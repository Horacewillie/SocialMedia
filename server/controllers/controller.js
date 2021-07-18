const User = require("../models/user");
const Info = require("../models/info");
const Post = require("../models/post");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

//Register User
exports.registerUser = async (req, res) => {
  const { email, name, username, password, lastname } = req.body;

  try {
    if (!email || !name || !username || !password || !lastname) {
      return res.status(400).json({
        message: "All fields must be complete",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({
        email,
        name,
        username,
        password: hashedPassword,
        lastname,
      });

      const registeredUser = await user.save();
      if (!registeredUser) {
        return res.status(400).json({
          success: false,
        });
      }
      return res.status(200).json({
        registeredUser,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Auth failed, No user!",
      });
    }
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (!comparedPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }
    const token = await jwt.sign(user._id.toHexString(), process.env.SECRETKEY);
    user.token = token;
    const loggedInUser = await user.save();
    if (!loggedInUser) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.cookie("w_auth", user.token).status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Authenticate User
exports.authUser = (req, res) => {
  res.status(200).send({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    followers: req.user.followers,
    following: req.user.following,
    role: req.user.role,
    lastname: req.user.lastname,
    email: req.user.email,
    name: req.user.name,
    coverPicture: req.user.coverPicture,
    profilePicture: req.user.profilePicture,
    info: req.user.info,
  });
};

//Update User
exports.updateUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: req.body },
      { new: true }
    );
    let info = await Info.findOne({ userId: req.user._id });
    if (info) {
      info = await Info.updateOne({ userId: req.user._id }, { $set: req.body });
    } else {
      info = await Info.create({
        userId: req.user._id,
        city: req.body.city,
        desc: req.body.desc,
        from: req.body.from,
        relationship: req.body.relationship,
      });
    }
    return res.status(200).json({
      name: user.name,
      desc: req.body.desc,
      city: req.body.city,
      from: req.body.from,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

//Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    await Info.findOneAndDelete({ userId: req.params.id });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

//GetUser
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    .select("-password")
    .select("-token")
    .select("-updatedAt")
    .select("-createdAt");
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error")
    return res.status(400).json({
      message: error.message,
    });
  }
};

//Follow User
exports.followUser = async (req, res) => {
  try {
    const toBeFollowedUser = await User.findById(req.params.id);
    if (!toBeFollowedUser)
      return res.status(400).json({ message: "User Not Found!" });
    if (!toBeFollowedUser.followers.includes(req.user._id)) {
      await toBeFollowedUser.updateOne({ $push: { followers: req.user._id } });
      await req.user.updateOne({ $push: { following: req.params.id } });
      return res.status(200).json({ success: true });
    } else {
      res.status(400).json({
        message: "Already Following",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Unfollow User
exports.unFollowUser = async (req, res) => {
  try {
    const toBeUnFollowedUser = await User.findById(req.params.id);
    if (!toBeUnFollowedUser)
      return res.status(400).json({ message: "User Not Found!" });
    if (req.user.following.includes(req.params.id)) {
      await req.user.updateOne({ $pull: { following: req.params.id } });
      await toBeUnFollowedUser.updateOne({
        $pull: { followers: req.user._id },
      });
      return res.status(200).json({ success: true });
    } else {
      res.status(400).json({
        message: "You are not following this user",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Create Post
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    await post.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Update Post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.user._id.toString() !== post.userId) {
      return res.status(500).json({
        message: "Cannot update!",
      });
    }
    await post.updateOne({ $set: req.body });
    return res.status(200).json({ message: "Updated Successfully!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Delete Post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.user._id.toString() !== post.userId) {
      return res.status(500).json({
        message: "Cannot delete!",
      });
    }
    await post.deleteOne();
    return res.status(200).json({ message: "Deleted Successfully!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//like and dislike a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.user._id)) {
      await post.updateOne({ $push: { likes: req.user._id } });
      return res.status(200).json({ message: "Post Liked!" });
    } else {
      await post.updateOne({ $pull: { likes: req.user._id } });
      return res.status(200).json({ message: "Post Disliked!" });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//get Post
exports.getPost = async (req, res) => {
  try{
    const post = await Post.findById(req.params.id)
    return res.status(200).json(post)
  }catch(err){
    return res.status(400).json({
      message: err.message
    })
  }
}

//get Timeline Post
exports.timelinePost = async (req, res) => {
  try{
  const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({userId: currentUser._id})
    const friendPosts = await Promise.all(
      currentUser.following.map((friendsId) => {
        return Post.find({userId: friendsId})
      })
    )
    return res.status(200).json(userPosts.concat(...friendPosts))
  }catch(err){
    return res.status(400).json({ message: err.message})
  }
}



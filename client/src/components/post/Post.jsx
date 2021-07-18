import './post.css';
import {useState, useEffect} from 'react'
import axios from "axios"
import { MoreVert } from '@material-ui/icons';
import TimeAgo from 'timeago-react'


//import { Users } from '../../dummyData';

function Post({post}) { 
    const[like, setLike] = useState(post.likes.length)
    const[isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like + 1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        axios
          .get(`/api/users/${post.userId}`)
          .then((res) => {
              setUser(res.data)
          });
      }, [post.userId]);

    return (
        <div className = 'post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || `/assets/Person/avatar.jpg`} alt="" className="postProfileImg" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate"><TimeAgo datetime = {post.createdAt}/></span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={`/assets/${post.img}`} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = 'likeIcon' src="/assets/heart.png" alt="" onClick = {likeHandler} />
                        <img className = 'likeIcon' src="/assets/like.png" alt=""  onClick = {likeHandler} />
                        <span className="postLikeCounter">{like} like(s)</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comment(s)</span>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Post

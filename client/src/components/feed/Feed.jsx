import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";

function Feed({ username }) {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get("/api/posts/timeline/60df439e4e4a3620bc18d971");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

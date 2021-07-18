import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";

function Feed() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts/timeline/60df439e4e4a3620bc18d971")
      .then((res) => {
          setPosts(res.data)
      });
  }, []);
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

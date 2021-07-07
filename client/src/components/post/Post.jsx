import './post.css'
import { MoreVert } from '@material-ui/icons'

function Post() {
    return (
        <div className = 'post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/Person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Ijoba Koloca</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hello Mothafucker!</span>
                    <img src="/assets/Post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = 'likeIcon' src="/assets/heart.png" alt="" />
                        <img className = 'likeIcon' src="/assets/like.png" alt="" />
                        <span className="postLikeCounter">5 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Post

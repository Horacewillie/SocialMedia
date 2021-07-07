import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'

function Feed() {
    return (
        <div className = 'feed'>
            <div className="feedWrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feed
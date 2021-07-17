import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileCover">
            <img src="assets/Post/3.jpeg" alt="" className="profileCoverImg" />
            <img src="assets/Person/7.jpeg" alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Horace Akpan</h4>
            <span className="profileDesc">World People na blast!</span>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Profile;

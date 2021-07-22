import "./profile.css";
import axios from 'axios';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  const [user, setUser] = useState({})

  const username = useParams().username

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${username}`)
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileCover">
            <img src={user.coverPicture || `/assets/Person/background.jpg`} alt="" className="profileCoverImg" />
            <img src={user.profilePicture || `/assets/Person/avatar.jpg`} alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">{user.name + ' ' + user.lastname}</h4>
            <span className="profileDesc">{user.desc}</span>
        </div>
        <div className="profileRightBottom">
          <Feed username = {user.username}/>
          <Rightbar user={user}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

function Rightbar({props}) {
    const followingDetails = [
        {
            img: 'assets/Person/1.jpeg',
            name: "David Herbert"
        },
        {
            img: 'assets/Person/6.jpeg',
            name: "David Herbert"
        },
        {
            img: 'assets/Person/8.jpeg',
            name: "David Herbert"
        },
        {
            img: 'assets/Person/5.jpeg',
            name: "David Herbert"
        },
        {
            img: 'assets/Person/3.jpeg',
            name: "David Herbert"
        },
        {
            img: 'assets/Person/2.jpeg',
            name: "David Herbert"
        },
    ]
    const renderFollowing = () => (
        followingDetails.map((detail) => (
            <div key = {Math.random()} className="rightbarFollowing">
                    <img src={detail.img} alt="" className="rightbarfollowingImg" />
                    <span className="rightbarFollowingName">{detail.name}</span>
        </div>
        ))
    )
  return (
    <div className="rightbar">
      {window.location.pathname !== "/profile" ? (
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Paula Foster</b> and <b>3 other friends</b> have birthdays
              today.
            </span>
          </div>

          <img src="assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </ul>
        </div>
      ) : (
        <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
          <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
            <h4 className="rightbarTitle">
                User Friends
            </h4>
            <div className="rightbarFollowings">
                {renderFollowing()}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Rightbar;

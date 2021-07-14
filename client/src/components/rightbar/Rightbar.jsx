import "./rightbar.css";
import Online from '../online/Online';
import {Users} from '../../dummyData';

function Rightbar() {
    return (
        <div className = 'rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Paula Foster</b> and <b>3 other friends</b> have birthdays today.
                    </span>
                </div>
                
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(user => (
                        <Online key ={user.id} user = {user}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
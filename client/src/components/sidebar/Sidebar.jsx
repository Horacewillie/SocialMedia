import "./sidebar.css";
import Button from "../../utils/button/Button";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

function Sidebar() {
  const renderListItem = () => (
    <ul className="sidebarList">
      <li className="sidebarListItem">
        <RssFeed className="sidebarIcon" />
        <span className="sidebarListItemText">Feeds</span>
      </li>
      <li className="sidebarListItem">
        <Chat className="sidebarIcon" />
        <span className="sidebarListItemText">Chats</span>
      </li>
      <li className="sidebarListItem">
        <PlayCircleFilledOutlined className="sidebarIcon" />
        <span className="sidebarListItemText">Videos</span>
      </li>
      <li className="sidebarListItem">
        <Group className="sidebarIcon" />
        <span className="sidebarListItemText">Groups</span>
      </li>
      <li className="sidebarListItem">
        <Bookmark className="sidebarIcon" />
        <span className="sidebarListItemText">Bookmarks</span>
      </li>
      <li className="sidebarListItem">
        <HelpOutline className="sidebarIcon" />
        <span className="sidebarListItemText">Questions</span>
      </li>
      <li className="sidebarListItem">
        <WorkOutline className="sidebarIcon" />
        <span className="sidebarListItemText">Jobs</span>
      </li>
      <li className="sidebarListItem">
        <Event className="sidebarIcon" />
        <span className="sidebarListItemText">Events</span>
      </li>
      <li className="sidebarListItem">
        <School className="sidebarIcon" />
        <span className="sidebarListItemText">Courses</span>
      </li>
    </ul>
  );
  const renderListItem2 = () => (
    <ul className="sidebarFriendList">
      <li className="sidebarFriend">
        <img src="/assets/Person/2.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Ijoba Okoli</span>
      </li>
      <li className="sidebarFriend">
        <img src="/assets/Person/3.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Tolu Akinpelu</span>
      </li>
      <li className="sidebarFriend">
        <img src="/assets/Person/4.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Lucky Odume</span>
      </li>
      <li className="sidebarFriend">
        <img src="/assets/Person/5.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Courage Osemwengie</span>
      </li>
      <li className="sidebarFriend">
        <img src="/assets/Person/6.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Emma Adoms</span>
      </li>
      <li className="sidebarFriend">
        <img src="/assets/Person/7.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Asi Etimbuk</span>
      </li>
      <li className="sidebarFriend">
        <img src="/assets/Person/8.jpeg" alt="" className="sidebarFriendImg" />
        <span className="sideBarFriendName">Dan Azumi</span>
      </li>
    </ul>
  );
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {renderListItem()}
        <Button type="default" desc = 'Show More'/>
        <hr className="sidebarHr" />
        {renderListItem2()}
      </div>
    </div>
  );
}

export default Sidebar;

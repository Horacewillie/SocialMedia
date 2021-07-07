import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import Button from '../../utils/button/Button'

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/Person/1.jpeg" alt="" className="shareImg" /> 
          <input placeholder="Share a post" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor = 'tomato' className="shareIcon" />
              <span className="shareOptionText">Media</span>
            </div>
            <div className="shareOption">
              <Label htmlColor = 'blue' className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor = 'green' className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor = 'goldenrod' className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <Button type = 'share' desc = 'Share'/>
        </div>
      </div>
    </div>
  );
}

export default Share;

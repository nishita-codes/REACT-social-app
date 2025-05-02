import "../App.css";
import person1 from '../assets/persons/person1.jpeg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import post1 from '../assets/posts/post1.jpeg';
import heart from '../assets/heart.webp';
import like from '../assets/like.png';

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={person1} alt="" />
                        <span className="postUsername">Grace lal</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">Hey! It's my first post:) </span>
                    <img className="postImg" src={post1} alt="" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={like} alt="" />
                        <img className="likeIcon" src={heart} alt="" />
                        <span className="postLikeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

import "../App.css";
import person1 from '../assets/persons/person1.jpeg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import heart from '../assets/heart.webp';
import like from '../assets/like.png';
import { Users } from '../dummyData'; 

export default function Post({post}) {

    console.log(post);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u)=>u.id === post?.userId)[0].username}</span>
                    
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc} </span>
                    <img className="postImg" src={post.photo} alt="post" />

                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={like} alt="" />
                        <img className="likeIcon" src={heart} alt="" />
                        <span className="postLikeCounter">{post.like}people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

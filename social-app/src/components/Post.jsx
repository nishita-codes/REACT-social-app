import "../App.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import heart from '../assets/heart.webp';
import like from '../assets/like.png';
import { Users } from '../dummyData'; 
import { useState } from "react";

export default function Post({post}) {
    
    const[likes,setLikes] = useState(post.like);
    const[isliked,setIsLiked] = useState(false);

    const likeHandler =()=>{
        setLikes(isliked ? likes-1:likes+1)
        setIsLiked(!isliked)
    }
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
                        <img className="likeIcon" src={like} alt=""  onClick={likeHandler}/>
                        <img className="likeIcon" src={heart} alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{likes} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

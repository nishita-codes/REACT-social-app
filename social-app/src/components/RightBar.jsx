import "../App.css";
 import gift from '../assets/gift.png';
 import advertisment from '../assets/ad.png';
  import { Users } from "../dummyData";
import Online from "./Online";
import person1 from '../assets/persons/person1.jpeg';
import person2 from '../assets/persons/person2.jpeg';
import person3 from '../assets/persons/person3.jpeg';
import person4 from '../assets/persons/person4.jpeg';
import person5 from '../assets/persons/person5.jpeg';
import person6 from '../assets/persons/person6.jpeg';

export default function RightBar({profile}){
    const HomeRightbar =()=>{
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src={gift} alt="" />
                    <span className="birthdayText">
                        <b className="bold">David</b> and <b className="bold"> 2 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src={advertisment} alt="" />
                <h4 className="rigthbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                 </ul>
            </>
        );
    };

    const ProfileRightbar =(post)=>{
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
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
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={person1} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={person2} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={person3} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={person4} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={person5} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={person6} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rigthbar">
            <div className="rightbarWrapper">
               <ProfileRightbar/>
            </div>
        </div>
    )
}
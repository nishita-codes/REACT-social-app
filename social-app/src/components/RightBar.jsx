import "../App.css";
 import gift from '../assets/gift.png';
 import advertisment from '../assets/ad.png';
  import person3 from '../assets/persons/person3.jpeg';
  import { Users } from "../dummyData";
import Online from "./Online";

export default function RightBar(){
    return (
        <div className="rigthbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    )
}
import "../App.css";
 import gift from '../assets/gift.png';
 import advertisment from '../assets/ad.png';
  import person3 from '../assets/persons/person3.jpeg';

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
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                    <li className="rightbarFriends">
                        <div className="rigthbarProfileImgContainer">
                            <img className="rigthbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rigthbarUsername">Jone doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
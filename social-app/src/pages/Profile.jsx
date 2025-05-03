import "../App.css";
import Feed from "../components/Feed.jsx";
import RightBar from "../components/RightBar.jsx";
import SideBar from "../components/SideBar.jsx";
import TopBar from "../components/TopBar.jsx";
import profileImg from '../assets/posts/post3.jpeg';
import userImg from '../assets/persons/person1.jpeg';

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={profileImg} className="profileCoverImg" alt="" />
                            <img src={userImg} className="profileUserImg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sofiya Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my Friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile/>
                    </div>
                </div>

            </div>
        </>
    )
}

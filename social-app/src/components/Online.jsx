import "../App.css";

export default function Online({user}) {
    return (
        <li className="rightbarFriends">
            <div className="rigthbarProfileImgContainer">
                <img className="rigthbarProfileImg" src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rigthbarUsername">{user.username}</span>
        </li>
    )
}

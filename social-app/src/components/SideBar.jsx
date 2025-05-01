import "../App.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import person2 from '../assets/persons/person2.jpeg';
import person3 from '../assets/persons/person3.jpeg';
import person4 from '../assets/persons/person4.jpeg';
import person5 from '../assets/persons/person5.jpeg';
import person6 from '../assets/persons/person6.jpeg';
import person7 from '../assets/persons/person7.jpeg';
import person8 from '../assets/persons/person8.jpeg';
import person9 from '../assets/persons/person9.jpeg';
import person10 from '../assets/persons/person10.jpeg';

export default function SideBar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                     <RssFeedIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                     <ChatIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                     <PlayCircleIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                     <GroupIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                     <BookmarkIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                     <HelpIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                     <WorkIcon  className="sidebarIcon"/>
                     <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                     <EventIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                     <SchoolIcon className="sidebarIcon"/>
                     <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>

                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person2} alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person3} alt="" />
                        <span className="sidebarFriendName">Alice</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person4} alt="" />
                        <span className="sidebarFriendName">Bob</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person5} alt="" />
                        <span className="sidebarFriendName">Charlie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person6} alt="" />
                        <span className="sidebarFriendName">David</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person7} alt="" />
                        <span className="sidebarFriendName">Eva</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person8} alt="" />
                        <span className="sidebarFriendName">Frank</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person9} alt="" />
                        <span className="sidebarFriendName">Grace</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={person10} alt="" />
                        <span className="sidebarFriendName">Hannah</span>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}
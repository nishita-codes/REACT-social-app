import "../App.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import person1 from "../assets/persons/person1.jpeg";

const TopBar = () => {
    return (
      <div className="topContainer">
         <div className="topLeft">
           <span className="logo">Friendzy</span>
         </div>
         <div className="topCenter">
           <div className="searchbar">
              <SearchIcon className="searchIcon"/>
              <input type="text" className="searchInput" placeholder="Search for friends, post or video" />
           </div>
         </div>
         <div className="topRight">
           <div className="TopbarLinks">
            <span className="topbarLink">HomePage</span>
            <span className="topbarLink">TimeLine</span>
           </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
               <PersonIcon/> 
               <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
               <ChatIcon/> 
               <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
               <NotificationsIcon/> 
               <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <img src={person1} alt="" className="topbarImg" />

         </div>
      </div>
    );
  };
  
  export default TopBar;
  

import "../App.css";
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
    return (
      <div className="topContainer">
         <div className="topLeft">
           <span className="logo">Friendzy</span>
         </div>
         <div className="topCenter">
           <div className="searchbar">
              <SearchIcon/>
              <input type="text" className="searchInput" placeholder="Search for friends, post or video" />
           </div>
         </div>
         <div className="topRight"></div>
      </div>
    );
  };
  
  export default TopBar;
  

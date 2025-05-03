import Feed from "../components/Feed.jsx";
import RightBar from "../components/RightBar.jsx";
import SideBar from "../components/SideBar.jsx";
import TopBar from "../components/TopBar.jsx";
import "../App.css";

export const Home = () => {
  return (
    <>
       <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div> 
    </>
  );
};

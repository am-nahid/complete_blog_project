import React from "react";
import { Logo, TopNavigation , LogoMobile, Footer, Login, LoginButton} from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import Store from "../../Utility/ContextStore/contextAPI";
import "../../App.css";
import TopPots from "./TopPsts";

const Home = () => {
  //  const [state] = useContext(AppData)
  // console.log(state);

  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    {/* <div className="LoginPos"><Login/></div> */}
    <div className='LLocal' ><Logo/>
    <div className="LoginPos"><LoginButton/></div>
      <TopNavigation/></div>
      {/* <Store> */}
        <Banner />
        <Latest />
        <div className="mainContainer">
          <div className="subContainer">
            <div className="homeContainer">
              <LatestArticle />

              <TopPots />
            </div>
          </div>
        </div>
      {/* </Store> */}
      {/* <Footer/> */}
    </>
  );
};

export default Home;

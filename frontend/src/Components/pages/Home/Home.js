import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Team from "./team/Team";
import Lamp_section from "./lamp_section/lamp_section";
import Card_in_home from "./Card_home/card_in_home";
import Carousel from "./carousel/carousel";
import Footer from "../Footer/Footer";
import Home_icon_data from './home_icon_section/home_icon_data';
import Spinner from "../../../spinner/spinner";
import Rateing from "./Rateing/rateing";
import News from "./news/News";

const Home = () => {
  
  return (
    <section  >

      <Spinner />

      {/* _______________________ Carouser Section ______________________________ */}

      <Carousel/>

      {/* ______________________ 4 Cards (Working) Section _____________________________*/}

      <Card_in_home/>

      {/* ______________________ Big Icons Section _____________________________________ */}
      
      <Home_icon_data/>

      {/* ________________________ Lamp Section ____________________________ */}
     
      <Lamp_section/>

      {/*_______________________ Materials Data Table Section_____________________________*/}
     
      <Rateing/>

      {/* _________________________ Team Member Section ______________________________ */}

      <Team/>

      {/* _________________________ News Section ______________________________ */}

      <News/>

      {/* ______________________ Footer ________________________________________________ */}

      <Footer />

    </section>
  );
};
export default Home;

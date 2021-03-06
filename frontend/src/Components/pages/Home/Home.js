import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Team from "./team/Team";
import Lamp_section from "./lamp_section/lamp_section";
import Card_in_home from "./Card_home/card_in_home";
import Carousel from "./carousel/carousel";
import Home_icon_data from './home_icon_section/home_icon_data';
import Rateing from "./Rateing/rateing";
import News from "./news/News";

const Home = () => {
  
  return (
    <section  >

      {/* _____________________________ Carouser Section ______________________________ */}

      <Carousel/>

      {/* _______________________ 4 Cards (Working) Section ____________________________*/}

      <Card_in_home/>

      {/* _____________________________ Big Icons Section _____________________________ */}
      
      <Home_icon_data/>

      {/* _______________________________ Lamp Section ________________________________ */}
    
      <Lamp_section/>

      {/*_________________________ Materials Data Table Section_________________________*/}
     
      <Rateing/>

      {/* ____________________________ Team Member Section _____________________________ */}

      <Team/>

      {/* ________________________________ News Section ________________________________ */}

      <News/>

    </section>
  );
};
export default Home;

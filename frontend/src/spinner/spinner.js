import React, { useEffect } from "react";
import { RiRecycleLine } from "react-icons/ri";
import "./spinner.css";

function Spinner() {

  // useEffect ( ()=> {
  //     let spinner = document.getElementById("load_animation");
  //     spinner.style.display = "none";
  //   } , []);

  return (
    <div id="load_animation" >
      <RiRecycleLine className="animation" />
    </div>
  );
}

export default Spinner;
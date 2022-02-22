import React, { useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { Langcontext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const Arabic = {
    RecycleWebSite: " إعادة تدوير موقع",
    Home: " الرئيسية",
    About: " معلومات عنا",
    Services: " خدمات",
    Testimonial: " شهادة",
    CountactUs: " اتصل بنا",
    Login: " تسجيل",
  };
  const English = {
    RecycleWebSite: "Recycle Web Site",
    Home: "Home",
    About: "About",
    Services: "Services",
    Testimonial: "Testimonial",
    CountactUs: "Countact Us",
    Login: "Login",
  };
  const { langcont, Setlangcontext } = useContext(Langcontext);
  console.log(langcont, "langContext");
  const translation = langcont === "ENGLISH" ? English : Arabic;

  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg navbar-fixed-top">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        {translation.RecycleWebSite}
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className=" collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <span className="span1">
                <i className="fas fa-tachometer-alt"></i>
                {translation.Home}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <span className="span1">
                {" "}
                <i className="far fa-address-book"></i>
                {translation.About}
              </span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/service" exact>
              <span className="span1">
                <i className="far fa-clone"></i>
                {translation.Services}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/testimonial" exact>
              <span className="span1">
                <i className="far fa-chart-bar"></i> {translation.Testimonial}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <span className="span1">
                {" "}
                <i className="far fa-copy"></i>
                {translation.CountactUs}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" exact>
              <span className="span1">
                <i className="far fa-copy"></i>
                {translation.Login}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <button
          type="button"
          className="btn btn-outline-light  rounded-pill m-2 cus-befor"
          onClick={() => {
            Setlangcontext(langcont === "ENGLISH" ? "ARABIC" : "ENGLISH");
          }}
        >
          {langcont === "ENGLISH" ? "ARABIC" : "ENGLISH"}
        </button>
    </nav>
  );
};
export default Navbar;

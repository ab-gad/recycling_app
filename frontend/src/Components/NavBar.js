import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Langcontext } from "../App";
import { useContext, useState, useEffect } from "react";
import { FaRegUserCircle ,FaSeedling , FaBoxOpen } from 'react-icons/fa';
import { VscHome } from 'react-icons/vsc';
import { BsBuilding , BsChatDots } from 'react-icons/bs';
import axiosInstance from "../axios";
const Navbar = () => {
  const Arabic = {
    RecycleWebSite: "إعادة تدوير موقع",
    Home: "الرئيسية",
    About: "من نحن",
    Services: "خدمات",
    Events: "الأحداث",
    CountactUs: "اتصل بنا",
    Login: "تسجيل",
    Register: "إنشاء حساب",
    Profile: "الملف الشخصي",
    settings: "الاعادات",
    logout:"تسجيل الخروج"
  };
  const English = {
    RecycleWebSite: "Recycle Web Site",
    Home: "Home",
    About: "About",
    Services: "Services",
    Events: "Events",
    CountactUs: "Contact ",
    Login: "Login",
    Register: "Register",
    Profile: "Profile",
    settings: "Settings",
    logout:"Logout"
  };

  const { langcont, Setlangcontext } = useContext(Langcontext);
  const translation = langcont === "ENGLISH" ? English : Arabic;
  const anmi_item = document.querySelectorAll('.anmi_item');

    anmi_item.forEach ( (item)=> {
      item.addEventListener('click' , active )
    })
    
    const language_zone = () => {
      if ( langcont === "ENGLISH" ) {
          Setlangcontext("ARABIC") 
      } else {
          Setlangcontext("ENGLISH") 
      }
    }

    function active (){
      anmi_item.forEach( (item)=> {
        item.classList.remove('active');
        this.classList.add('active');
      })
    }

    const[authedUser, setAutheUser] = useState({})

    const getAuthedUser = () => {
      axiosInstance
          .get('user_api/authedUser/')
          .then(res => {
              console.log(res,res.data, 'user',res.data.data)
              setAutheUser(res.data.data)
          })
          .catch((err)=>{
            console.log(err)
            setAutheUser(false)
          })
    }

    useEffect(()=>{
      getAuthedUser()
    },[])
      
  return (
    <>
     <div className="overlay">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand navbar-logo text-light" to="/" >
            <img src={require('../Components/pages/Home/images/lo.png')} alt="Logo" className="nav_logo" />
          </NavLink>
         

            <li className="nav-item mx-3 dropdown log_icon ">
              <NavLink className="nav-link p-0 m-0 " to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {authedUser ? 
                  <> 
                  <small>{`${authedUser.first_name} ${authedUser.last_name}`}</small>
                  <img className="rounded-circle" src={`http://localhost:8000${authedUser.avatar}`} width='35' height='35'/> 
                  </>
                : 
                  <FaRegUserCircle className="text-light" />
                }
              </NavLink>
              <button type="button" className="btn btn-outline-light shadow-none rounded-pill m-2 mx-3 language_button " onClick={() => language_zone() } >
                    {langcont}
              </button>
              {authedUser ?
              <ul className="dropdown-menu log_drop" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item text-center text-primary " to="/profile" > {translation.Profile} </NavLink></li>
                <li><NavLink className="dropdown-item text-center text-primary " to="/profile" > {translation.settings} </NavLink></li>
                <li><NavLink className="dropdown-item text-center text-primary " to="/logout" > {translation.logout} </NavLink></li>
              </ul>
              :
              <ul className="dropdown-menu log_drop" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item text-center text-primary " to="/login" > {translation.Login} </NavLink></li>
                <li><NavLink className="dropdown-item text-center text-primary " to="/register" > {translation.Register} </NavLink></li>
              </ul>
              }
            </li>
            
                
            <button className="navbar-toggler toggel_icon p-0" dir='rtl' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">    
              <div>
                <span className='line navbar-toggler-icon' > </span>
                <span className='line navbar-toggler-icon' > </span>
                <span className='line navbar-toggler-icon' > </span>
                <span className='line navbar-toggler-icon' > </span>
              </div>

            </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      
            <ul className="navbar-nav nav_element " dir="ltr" >
              <li className="nav-item anmi_item active">
                <NavLink to="/" className="nav-link text-center d-flex gap-3 responsev_zon" aria-current="page" >
                  <span className="ico text-light"> <VscHome /> </span>
                  <span className="tex text-light " > {translation.Home} </span>  
                </NavLink>
              </li>

              <li className="nav-item  anmi_item">
                <NavLink to="/about" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <BsBuilding/> </span>
                  <span className="tex text-light" > {translation.About} </span>  
                </NavLink>
              </li>
              
              <li className="nav-item anmi_item">
                <NavLink to="/service" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <FaBoxOpen/> </span>
                  <span className="tex text-light" > {translation.Services} </span>  
                </NavLink>
              </li>

              <li className="nav-item anmi_item">
                <NavLink to="/events" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <FaSeedling/> </span>
                  <span className="tex text-light" > {translation.Events} </span>  
                </NavLink>
              </li>

              <li className="nav-item anmi_item">
                <NavLink to="/contact" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <BsChatDots/> </span>
                  <span className="tex text-light" > {translation.CountactUs} </span>  
                </NavLink>
              </li>

              <div className="indecator" ></div>          
            </ul>
          </div>
        </div>
      </nav>
  </div>
 
    </>
  );
};
export default Navbar;

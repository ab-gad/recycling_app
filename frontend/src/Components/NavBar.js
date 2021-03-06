import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Langcontext } from "../App";
import React, { useContext, useEffect } from "react";
import { FaRegUserCircle ,FaSeedling , FaBoxOpen } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';
import { BsBuilding , BsChatDots  , BsShop , BsCart2 } from 'react-icons/bs';
import { useSelector} from "react-redux"
import { connect } from "react-redux";
import { logout} from "../redux/actions/actions";
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const {cartItems}=useSelector(state=>state.cart)

  // const {cartTotalQuantity}=useSelector(state=>state.cart)
  const Arabic = {
    RecycleWebSite: "إعادة تدوير موقع",
    Home: "الرئيسية",
    About: "من نحن",
    Services: "خدمات",
    Events: "الأحداث",
    CountactUs: "تواصل",
    Products: "منتجات",
    Login: " تسجيل الدخول",
    SignUp:"انشاء حساب",
    Orders: "الطلبات",
    settings: "الاعدادات",
    logout:"تسجيل الخروج"
  };
  const English = {
    RecycleWebSite: "Recycle Web Site",
    Home: "Home",
    About: "About",
    Services: "Services",
    Events: "Events",
    CountactUs: "Contact ",
    Products: "Products",
    Login: "Login",
    Register: "Register",
    Orders: "Orders",
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
        localStorage.setItem("navActive" , this.id )
      })
    }
    
    const history = useHistory();
    const logout_user = () => {
      props.logout();
      history.push('/auth/login');
      window.location.reload();
    } ;

    useEffect( ()=> {
      localStorage.getItem("navActive") ? 
      document.getElementById(localStorage.getItem("navActive")).classList.add('active'):
      document.getElementById('home').classList.add('active')
    } ,[])

  return (
    <>
     <div className="nav-overlay">
      <nav className="navbar navbar-expand-xl " dir='ltr'>
        <div className="container-fluid ">

          <div className=" navbar-logo text-light" >
            <div className="nav_logo" >
              <img src={require('../Components/pages/Home/images/lo1.png')} alt="Logo" />
              <span> C <span className="text-warning fw-bold"> 2 </span> R </span>
            </div>
          </div>

          <button type="button" className="btn btn-outline-light shadow-none m-2 mx-3 language_button " onClick={() => language_zone() } >
            {langcont==="ENGLISH"?"EN":"AR"}
          </button>   

            <li className="nav-item mx-3 dropdown log_icon d-flex align-items-center">
              <NavLink className="nav-link p-0 m-0 " to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.user !== null? 
                  <> 
                  <span className="fs-5 mx-2 text-white d-none d-md-inline">{`${props.user.first_name} ${props.user.last_name}`}</span>
                  <img className="rounded-circle" src={`${props.user.avatar}`} width='40' height='40' alt='user Avatar'/> 
                  </>
                : 
                  <FaRegUserCircle className="text-light" />
                }
              </NavLink>
              
              {props.user ?
              <ul className="dropdown-menu log_drop" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item text-center text-primary " to="/Orders" > {translation.Orders} </NavLink></li>
                <li><NavLink className="dropdown-item text-center text-primary " to="/settings" > {translation.settings} </NavLink></li>
                <li><NavLink className="dropdown-item text-center text-primary " to="/user/events" > {translation.Events} </NavLink></li>
                <li><button className="dropdown-item text-center text-primary " onClick={logout_user}> {translation.logout} </button></li>
              </ul>
              :
              <ul className="dropdown-menu log_drop" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item text-center text-primary " to="/auth/login" > {translation.Login} </NavLink></li>
                <li><NavLink className="dropdown-item text-center text-primary " to="/auth/register" > {translation.Register} </NavLink></li>
              </ul>
              }
            </li>       
              
                <NavLink to='/live' >
                  <RiMessengerLine className="product_cart user_chat" />
                </NavLink>
                <NavLink to='/wagon' className="nav-link product_cart " >
                  <span>  {cartItems ? cartItems.length : 0} </span>
                  <BsCart2/>
                </NavLink>
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

              <li className="nav-item anmi_item" id="home">
                <NavLink to="/" className="nav-link text-center d-flex gap-3 responsev_zon" aria-current="page"  >
                  <span className="ico text-light"> <VscHome /> </span>
                  <span className="tex text-light " > {translation.Home} </span>  
                </NavLink>
              </li>

              <li className="nav-item  anmi_item" id="about" >
                <NavLink to="/about" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <BsBuilding/> </span>
                  <span className="tex text-light" > {translation.About} </span>  
                </NavLink>
              </li>
              
              <li className="nav-item anmi_item" id="services">
                <NavLink to="/service" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <FaBoxOpen/> </span>
                  <span className="tex text-light" > {translation.Services} </span>  
                </NavLink>
              </li>

              <li className="nav-item anmi_item" id="events">
                <NavLink to="/events" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <FaSeedling/> </span>
                  <span className="tex text-light" > {translation.Events} </span>  
                </NavLink>
              </li>

              <li className="nav-item anmi_item" id="product" >
                <NavLink to="/Homeproduct" className="nav-link text-center  d-flex gap-3 responsev_zon" >
                  <span className="ico text-light"> <BsShop/> </span>
                  <span className="tex text-light" > {translation.Products} </span>  
                </NavLink>
              </li>

              <li className="nav-item anmi_item" id="contact">
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

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user
});

export default connect(mapStateToProps, {logout})(Navbar);

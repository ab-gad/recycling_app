import React , { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./Components/pages/About/About";
import Contact from "./Components/pages/Contact/Contact";
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Service/Service";
import Testimonial from "./Components/pages/Testimonial/Testimonial";
import User from "./Components/pages/user/user";


// import Login from "./Components/pages/Registeration/login";
// import Register from "./Components/pages/Registeration/register";
// import SignUp from "./Components/pages/Auth/register";
// import SignIn from "./Components/pages/Auth/login";
// import SignOut from "./Components/pages/Auth/logout";
import Login from "./Components/pages/Auth/NewLogin";
import Register from "./Components/pages/Auth/NewRegister";
import Activate from "./Components/pages/Auth/Activate";
import ResetPassword from "./Components/pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./Components/pages/Auth/ResetPasswordConfirm";

import Navbar from "./Components/NavBar";
import Chat from "./Components/pages/ChatBot/Chat";
import Order_form from "./Components/pages/cart/order_form";
import Cart from './Components/pages/cart/Cart';
import ScrollButton from "./Components/ScrollButton";
import ThemesContext , {themes} from  './Components/themes';
import {BsFillMoonStarsFill , BsFillSunFill} from  'react-icons/bs';
import { useEffect } from "react";
import ShoppingPage from './Components/pages/Product/productHome'
import CartPage from './Components/pages/Product/cartHome';
import Show from "./Components/pages/Testimonial/showevent";
import Product from "./Components/pages/Product/product";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import { Langcontext } from './context/lang';
export const Langcontext = React.createContext();


// //testing spinner
// const loader = document.querySelector(".preloader");

// const showLoader = () => loader.classList.remove("preloader");
// const addClass = () => loader.classList.add("loader-hide");
// //--->
const App = () => {
//testing spinner
  // useEffect(() => {
  //   showLoader();
  //   addClass();
  // }, []);

  // //-->
  const [langcont, Setlangcontext] = useState("ENGLISH");
 
  //creatr themes 
  const [theme , setTheme] = useState(themes.light)
  const [theme_icon , setThemeIcon] = useState(<BsFillMoonStarsFill/>)

  const toggle_theme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light)
      document.body.style.backgroundColor = themes.light.background
      document.body.style.color = themes.light.color
      setThemeIcon(<BsFillMoonStarsFill/>) 
      
      localStorage.setItem('theme' , themes.light.background)
      localStorage.setItem('color' , themes.light.color)
      localStorage.setItem('theme_icon' , 'moon')
      localStorage.setItem('theme_state' , 'lighe')
      
    } else {
      setTheme(themes.dark)
      document.body.style.backgroundColor = themes.dark.background
      document.body.style.color = themes.dark.color
      setThemeIcon(<BsFillSunFill/>)
      
      localStorage.setItem('theme' , themes.dark.background)
      localStorage.setItem('color' , themes.dark.color)
      localStorage.setItem('theme_icon' , 'sun' )
      localStorage.setItem('theme_state' , 'dark')
      
    }
  }
  
  window.onload = ()=>{
    
    document.body.style.color = `${localStorage.getItem('color')}`
    document.body.style.backgroundColor = `${localStorage.getItem('theme')}`
    localStorage.getItem('theme_icon') === 'sun' ?  setThemeIcon(<BsFillSunFill/>) :  setThemeIcon(<BsFillMoonStarsFill/>)
    localStorage.getItem('theme_state') === 'lighe' ?  setTheme(themes.light) :  setTheme(themes.dark)
  
  }

  return (

    <div dir={langcont === "ENGLISH" ? "ltr" : "rtl"}>

        <Router>
          <ToastContainer/>
          <Langcontext.Provider value={{ langcont, Setlangcontext }}>
            <main>
              <Navbar />
              <ThemesContext.Provider value={{theme}} >
                <div onClick={toggle_theme} id='box_theme'>
                  { theme_icon }
                </div>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about" exact>
                    <About />
                  </Route>
                  <Route path="/service" exact>
                    <Services />
                  </Route>
                  <Route path="/events" exact>
                    <Testimonial />
                  </Route>
                  <Route path="/settings" exact>
                    <User />
                  </Route>
                  <Route path="/Show/:id" component={Show} exact >
                  <Show/>
                  </Route>
                  <Route path="/ShoppingPage/" exact >
                  <ShoppingPage/>
                  </Route>
                  <Route path="/CartPage/" exact >
                  <CartPage/>
                  </Route>
                  <Route path="/contact" exact>
                    <Contact />
                  </Route>
                  <Route path="/service/cart/:name/:order_id" exact> 
                    <Order_form />
                  </Route>
                  <Route path="/service/cart/:name" exact> 
                   <Cart />
                  </Route>
                  {/* <Route path="/login" exact>
                    <SignIn/>
                  </Route>
                  <Route path="/register" exact>
                    <SignUp/>
                  </Route>
                  <Route path="/logout" exact>
                    <SignOut/>
                  </Route> */}

                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/reset-password' component={ResetPassword} />
                  <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                  <Route exact path='/activate/:uid/:token' component={Activate} />
                  
                  <Redirect to="/" />
                </Switch>
              </ThemesContext.Provider>
            </main>
          </Langcontext.Provider>
        </Router>
        <ScrollButton />
        <Chat />
    </div>

  );
};


export default App;

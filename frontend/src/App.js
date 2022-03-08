import React , { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./Components/pages/About/About";
import Contact from "./Components/pages/Contact/Contact";
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Service/Service";
import Settings from "./Components/pages/user/settings";
import Testimonial from "./Components/pages/Events/AllEvents";
import Orders from "./Components/pages/user/orders";
import Events from "./Components/pages/user/events";
import Error_404 from "./Components/pages/Home/error_404";
import Success_order from "./Components/pages/cart/success_order";
import Login_Register from "./Components/pages/Auth/NewLogin";
import Activate from "./Components/pages/Auth/Activate";
import ResetPassword from "./Components/pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./Components/pages/Auth/ResetPasswordConfirm";
import Facebook from "./Components/pages/Auth/Facebook";
import Google from "./Components/pages/Auth/Google";
import { checkAuthenticated, load_user} from "./redux/actions/actions";
import { connect } from "react-redux";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/NavBar";
import Chat from "./Components/pages/ChatBot/Chat";
import SellCart from "./Components/pages/cart/SellCart";
import ScrollButton from "./Components/ScrollButton";
import ThemesContext , {themes} from  './Components/themes';
import {BsFillMoonStarsFill , BsFillSunFill} from  'react-icons/bs';
import { useEffect } from "react";
import Show from "./Components/pages/Events/showevent";
import Homeproduct from "./Components/pages/Product/homeproduct";
import Wagon from "./Components/pages/Product/cart";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LiveChat from "./Components/pages/LiveChat/LiveChat";

export const Langcontext = React.createContext();

const App = ({load_user,checkAuthenticated, user, isAuthenticated}) => {
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
  useEffect(()=>{
    checkAuthenticated()
    load_user()
    console.log("user>>>>>",user)
  },[])
    

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
                    <Settings />
                  </Route>
                  <Route path="/user/events" exact>
                    <Events />
                  </Route>
                  <Route path="/orders" exact>
                    <Orders />
                  </Route>
                  <Route path="/Show/:id" component={Show} exact >
                  <Show/>
                  </Route>
                  <Route path="/Homeproduct/" exact >
                  <Homeproduct/>
                  </Route>
                  <Route path="/Wagon/" exact >
                  <Wagon/>
                  </Route>
                  <Route path="/contact" exact>
                    <Contact />
                  </Route>
                  <Route path="/live" exact>
                    <LiveChat />
                  </Route>
                  <ProtectedRoute exact path="/service/cart/:name/:order_id"  component={SellCart}/>
                  <ProtectedRoute exact path="/success_order"  component={Success_order}/>

                  <Route path="/service/cart/:name/" exact> 
                    <SellCart/>
                  </Route>
                  <Route path="/error_404" exact> 
                    <Error_404 />
                  </Route>
                  <Route exact path='/facebook' component={Facebook} />
                  <Route exact path='/google' component={Google} />
                  <Route exact path='/auth/:page' component={Login_Register} />
                  <Route exact path='/reset-password' component={ResetPassword} />
                  <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                  <Route exact path='/activate/:uid/:token' component={Activate} />

                  {/* <Route path="/service/cart/:id" exact> 
                    <Cart />
                  </Route> */}

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

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user
});

export default connect(mapStateToProps, {checkAuthenticated, load_user})(App);


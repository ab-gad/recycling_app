import React , { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./Components/pages/About/About";
import Contact from "./Components/pages/Contact/Contact";
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Service/Service";
import Testimonial from "./Components/pages/Testimonial/Testimonial";
import Login from "./Components/pages/Registeration/login";
import Register from "./Components/pages/Registeration/register";
import Navbar from "./Components/NavBar";
import ScrollButton from "./Components/ScrollButton";
import ThemesContext , {themes} from  './Components/themes';
import {BsFillMoonStarsFill , BsFillSunFill} from  'react-icons/bs';

// import { Langcontext } from './context/lang';
export const Langcontext = React.createContext();

const App = () => {
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
                <Route path="/contact" exact>
                  <Contact />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/register" exact>
                  <Register />
                </Route>
                <Redirect to="/" />
              </Switch>
            </ThemesContext.Provider>
          </main>
        </Langcontext.Provider>
      </Router>
      <ScrollButton />
    </div>
  );
};

export default App;

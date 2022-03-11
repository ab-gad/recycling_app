import React from "react";


export const themes = {
    dark: {
        color: '#fff',
        background: '#444' ,
      
    } ,
    light : {
        color : 'black',
        background : 'white' ,
       
    }
} 

const ThemesContext = React.createContext(themes)
export default ThemesContext;

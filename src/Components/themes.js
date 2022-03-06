import React from "react";


export const themes = {
    dark: {
        color: '#fff',
        background: '#121418' ,
      
    } ,
    light : {
        color : 'black',
        background : 'white' ,
       
    }
} 

const ThemesContext = React.createContext(themes)
export default ThemesContext;

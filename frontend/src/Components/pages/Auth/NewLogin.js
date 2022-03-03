import React, { useState } from "react";
import LoginForm from "./Form_Componant/login_componant";
import RegisterForm from "./Form_Componant/register_comopnant";
import { FcGoogle } from 'react-icons/fc';
import './login_register.css';
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Login_Register = () => {

    const [ form , setForm ] = useState(<LoginForm />)
    const [ form_title , setFormTitle ] = useState('Login')
    const isAuthenticated = useSelector(state=>state.authReducer.isAuthenticated)
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    
    function convert (e) {
        if (e.target.id === 'login_button' ){
        setForm(<LoginForm/>)
        setFormTitle('Login')
        }
        else {
        setForm(<RegisterForm setForm={setForm}/>)
        setFormTitle('Register')
        }
    }

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:3000/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {
            console.log('ERR', err)
        }
    };


    

  return (
    <div className="mt-5 row justify-content-between align-items-center" id="form_container" dir="ltr">
      <img src={require('./images/earth.png')} alt="From_photo" className="form_img d-none d-xl-block col-7 p-0" height='100%'  />
      <div className=" col-xl-5 m-auto" id="type_container" >

        <h2 className="mb-5 text-center " > {form_title} </h2>
        <div className="btn_container px-0 d-flex justify-content-between">
          <button className="btn btn_color " onClick={(e) => convert(e)} id="login_button" > Login </button>
          <button className="btn btn_color " onClick={(e) => convert(e)} id="register_button" > Sign Up </button>
        </div>

          {form}
          
          <button  onClick={continueWithGoogle} className="btn btn_color bg-light w-100 mt-3 text-dark" > <FcGoogle/> Continue With Google Account </button>

      </div>
    </div>
  );
};


export default Login_Register;

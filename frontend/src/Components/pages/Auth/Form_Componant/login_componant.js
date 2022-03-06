import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../../redux/actions/actions";
import { FaUserAlt , FaLock } from "react-icons/fa";


const LoginForm = ({ login, loginErr  }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const { email, password } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    // Show_Password
    let login_password = document.getElementById("login_password")
    function Show_Password() {
        if (login_password.type === "password") {
            login_password.type = "text";
        } else {
            login_password.type = "password";
        }
      }

    //Login Validation 
    const [notValid , setNotValid] = useState("")
    const vaild_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let login_validation_mess = document.getElementById("login_validation_mess")
    
    const validation = () => {
        if ( !(email.match(vaild_email)) ){
            login_validation_mess.style.display = 'block'
            setNotValid("Not a Valid Email .. ")
            return false
        }
        else if (password.length < 6 || (password.replace(/\s/g , "" ) === "" ) ) {
            login_validation_mess.style.display = 'block'
            setNotValid("Password must be more than 6 character .. ")
            return false
        }
        else {
            login_validation_mess.style.display = 'none'
            console.log("valid")
            return true

        }
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const valid =  validation()
        if ( valid ) {
            login(email, password);
        }
    };

    useEffect(()=>{
        if (loginErr !== null && login_validation_mess){
            console.log(loginErr)
            login_validation_mess.style.display = 'block'
            setNotValid(loginErr.detail)
        }
    },[loginErr])
    
    return (
     
        <form onSubmit={(e) => onSubmit(e)} id="login_form">
            <div className="form-group form_inputs">
                <div>
                <FaUserAlt className="input_icon"/>    
                <input className="login_input" type="email" placeholder="Email" name="email" required
                       value={email} onChange={(e) => onChange(e)} />
                </div>
                <div>
                    <FaLock className="input_icon"/>
                    <input className="login_input" type="password" placeholder="Password" name="password" minLength='6' required
                           value={password} onChange={(e) => onChange(e)} id="login_password" />

                    <input id="show_pass" type="checkbox" onClick={() => Show_Password() } className="m-0"/>
                    <label htmlFor="show_pass" className="text-muted mx-1"> Show Password </label>
                </div>
                <p className="mt-2">
                    <Link to="/reset-password" className="text-muted"> Forgot your Password?</Link>
                </p>
            </div>    
            <p className=" m-0 text-center text-danger validation_mess" id="login_validation_mess" > {notValid} ! </p>
            <button className="btn btn_color w-100 mt-3 shadow-none" type="submit"> Login </button>         
        </form>

    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    loginErr: state.authReducer.loginErr,
  });

export default connect(mapStateToProps, { login })(LoginForm);
  

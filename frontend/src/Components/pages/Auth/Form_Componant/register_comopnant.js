import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../../../redux/actions/actions';
import LoginForm from './login_componant'
import { useEffect } from 'react';

const RegisterForm = ({ signup, setForm, err, signUp}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Register Validation
    const [notValid , setNotValid] = useState("")
    const vaild_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const pattern = /[0-9]/
    let register_validation_mess = document.getElementById("register_validation_mess")

    function validation () {
        if ( !first_name ||
            first_name.match(pattern) || 
            first_name.replace(/\s/g, "") === "" ) {
                register_validation_mess.style.color='red'
                register_validation_mess.style.display = 'block'

                setNotValid("First Name is Not Valid ")
                return false
        }
        if ( !last_name ||
            last_name.match(pattern) || 
            last_name.replace(/\s/g, "") === "" ) {
                register_validation_mess.style.color='red'
                register_validation_mess.style.display = 'block'
                setNotValid("Last Name is Not Valid ")
                return false
        }
        else if ( !(email.match(vaild_email)) ){
            register_validation_mess.style.color='red'
            register_validation_mess.style.display = 'block'
            setNotValid("Not a Valid Email .. ")
            return false
        }
        else if (password.length < 6 || (password.replace(/\s/g , "" ) === "" ) ) {
            register_validation_mess.style.display = 'block'
            setNotValid("Password must be more than 6 character .. ")
            return false
        }
        else if (re_password !== password){
            register_validation_mess.style.color='red'
            register_validation_mess.style.display = 'block'
            setNotValid(" password is Not Match .. ")
            return false

        }
        else {
            register_validation_mess.style.display = 'none'
            console.log("valid")
            return true

        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const valid = validation()

        if (valid) {
            signup(first_name, last_name, email, password, re_password);
        }
    };

    const validateServerResponse = ()=>{
        if (err !== null){
            register_validation_mess.style.color='red'
            register_validation_mess.style.display = 'block'
            if (err.password){
                setNotValid(err.password[0])
                console.log('HI',err.password[0])
            }else if(err.email){
                setNotValid(err.email[0])
            }
        }else if (signUp==='success'){
            register_validation_mess.style.display = 'block'
            register_validation_mess.style.color='green' 
            setNotValid('You have Successfully Registered \nCheck Your Email for Activation')
        }else{
            register_validation_mess && (register_validation_mess.style.display = 'block')
            setNotValid(err)
        }
    }
    useEffect(()=>{
        validateServerResponse()
    },[err])

  return (
    <form onSubmit={e => onSubmit(e)}>
        <div className='form-group form_inputs'>
            <input className='form-control' type='text' placeholder='First Name' name='first_name' 
                value={first_name}
                onChange={e => onChange(e)}  />

            <input className='form-control' type='text' placeholder='Last Name' name='last_name' 
                    value={last_name}
                    onChange={e => onChange(e)} />

            <input className='form-control' type='email' placeholder='Email' name='email' 
                value={email}
                onChange={e => onChange(e)} />
 
            <input className='form-control' type='password' placeholder='Password' name='password'  
                value={password}
                onChange={e => onChange(e)}  />

            <input className='form-control' type='password' placeholder='Confirm Password' name='re_password' 
                value={re_password}
                onChange={e => onChange(e)}
            />
        </div>
        <p className=" m-0 text-center validation_mess" id="register_validation_mess" > {notValid} ! </p>
        <button className="btn btn_color w-100 mt-2 mp-0" type="submit"> Register </button>
    </form>
  );
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    err: state.authReducer.err,
    signUp:state.authReducer.signUp
});

export default connect(mapStateToProps, { signup })(RegisterForm);

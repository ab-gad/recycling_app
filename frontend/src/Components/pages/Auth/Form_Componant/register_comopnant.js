import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../../../redux/actions/actions';


const Register_Form = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
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
                register_validation_mess.style.display = 'block'
                setNotValid("First Name is Not Valid ")
                return false
        }
        if ( !last_name ||
            last_name.match(pattern) || 
            last_name.replace(/\s/g, "") === "" ) {
                register_validation_mess.style.display = 'block'
                setNotValid("Last Name is Not Valid ")
                return false
        }
        else if ( !(email.match(vaild_email)) ){
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
        validation()

        // if (password === re_password) {
        //     signup(first_name, last_name, email, password, re_password);
        //     setAccountCreated(true);
        // }
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }
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
        <p className=" m-0 text-center text-danger validation_mess" id="register_validation_mess" > {notValid} ! </p>
        <button className="btn btn_color w-100 mt-2 mp-0" type="submit"> Register </button>
    </form>
  );
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Register_Form);
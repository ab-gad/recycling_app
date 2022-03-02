import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/actions';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:3000/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {
            console.log('ERR', err)
        }
    };

    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/auth/o/facebook/?redirect_uri=http://localhost:3000/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };


    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
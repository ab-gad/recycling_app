import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../../redux/actions/actions';

const ResetPassword = ({ reset_password, resetPassErr }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    
    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    useEffect(()=>{
        console.log(resetPassErr)
    },[resetPassErr])

    if (requestSent && resetPassErr === null) {
        return <Redirect to='/login' />
    }

    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h1>Request Password Reset:</h1>
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
                <p className=" my-2 text-center text-danger" id="validation" > {resetPassErr&&resetPassErr.email[0]} </p>
                <button className='btn btn-primary my-2' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    resetPassErr: state.authReducer.resetPassErr,
  });

export default connect(mapStateToProps, { reset_password })(ResetPassword);
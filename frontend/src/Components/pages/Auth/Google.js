import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuthenticate } from '../../../redux/actions/actions';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

const Google = ({ googleAuthenticate }) => {
    let location = useLocation();
    const history = useHistory();
    
    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            try {
                googleAuthenticate(state, code);
                history.push('/')
            } catch (error) {
                console.log(error)
                history.push('/login')
            }
            
        }
    }, []);

    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Your Social Authentication With Google is Ongoing</h1>
                <p class='lead'>wait a moment</p>
                <hr class='my-4' />
                <p>Click the Log In button</p>
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    );
};

export default connect(null, { googleAuthenticate })(Google);
import React from 'react';
import { Link } from 'react-router-dom';

function Success_order() {
  return (
    <div className='container m-auto'>
        <img  src={require('../Auth/images/car.png')} width='70%' className='success_img' />       
        <h2 className='text-danger text-center my-3'> Success Prossess </h2>
        <p className='mb-4'>
            We appreciate your role in maintaining a clean and safe community. 
            We have received your request and our representative will come to you in a few days.
            It would be great to see some products that help you keep your family safe And to interact with our events.
        </p>
        <div className='d-flex gap-5 justify-content-center flex-wrap'>
            <Link to='/Homeproduct' className='btn btn-danger px-5 fw-light shadow-none'> Products </Link>
            <Link to='/events' className='btn btn-danger px-5 fw-light shadow-none'> Events </Link>
            <Link to='/' className='btn btn-danger px-5 fw-light shadow-none'> Home </Link>
        </div>
    </div>
  )
}

export default Success_order;
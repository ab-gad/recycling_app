import React , { useContext } from "react";
import { Langcontext } from "../../../App";
import { Link } from 'react-router-dom';

function Success_order() {
  const Arabic = {
    paragraph: "نحن نقدر دورك في الحفاظ على مجتمع نظيف وآمن.لقد تلقينا طلبك وسيأتي مندوبنا إليك في غضون أيام قليلة. سيكون من الرائع رؤية بعض المنتجات التي تساعدك في الحفاظ على أمان عائلتك والتفاعل مع أحداثنا.",
    product_button: "المنتجات",
    event_button: "الأحداث",
    home_button: "الرئيسية",
  };
  const English = {
    paragraph: "We appreciate your role in maintaining a clean and safe community. We have received your request and our representative will come to you in a few days. It would be great to see some products that help you keep your family safe And to interact with our events.",
    product_button: "Products",
    event_button: "Events",
    home_button: "Home",
   
  };

  const { langcont, Setlangcontext } = useContext(Langcontext);
  const translation = langcont === "ENGLISH" ? English : Arabic;

  return (
    <div className='container m-auto my-5'>
        <img  src={require('../Auth/images/car.png')} width='70%' className='success_img' />       
        <h2 className='text-success text-center my-3'> Success Prossess </h2>
        <p className='mb-4'> {translation.paragraph} </p>
  
        <div className='d-flex gap-5 justify-content-center flex-wrap'>
            <Link to='/Homeproduct' className='btn btn-success px-5 fw-light shadow-none'> {translation.product_button} </Link>
            <Link to='/events' className='btn btn-success px-5 fw-light shadow-none'> {translation.event_button} </Link>
            <Link to='/' className='btn btn-success px-5 fw-light shadow-none'> {translation.home_button} </Link>
        </div>
    </div>
  )
}

export default Success_order;
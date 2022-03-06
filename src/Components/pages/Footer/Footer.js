import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaPinterest, FaTwitter, FaVimeoV, FaLinkedinIn, FaChevronRight } from "react-icons/fa";
import React , { useContext } from "react";
import { Link } from "react-router-dom";
import { Langcontext } from "../../../App";

const Footer = ()=> {
    const Arabic = {
        main_title: "Call To Recycling ",
        main_title_caption: "أبقها نظيفة .. أبقها خضراء",
        left_element_title: "بيع و احصل على المال",
        left_element_body_1: "معنا يمكنك بيع المستعمل وشراء الجديد و المشاركة فى الأحداث المختلفة و القيام بالاعمال التطوعية",
        left_element_body_2: "يمكنك شراء الجديدة",
        left_element_body_3: " يمكنك المشاركة فى الأحداث المختلفة و القيام بالاعمال التطوعية",
        col_2_title:"الوصول السريع",
        About: "من نحن ",
        events: "الأحداث",
        products: "المنتجات",
        services: "الخدمات",
        col_3_title: "آخر الأخبار",
        col_3_body_1: "كيف يمكن أن تكون ناجحًا في السوق ",
        col_3_body_2: " الطاقة المتجددة فى 2030",
        address:"العنوان",
        copyright:"كل الحقوق محفوظة",
        home : "الرئيسية",
        the_end_1:"انشر الخير",
        the_end_2:"كن متطوعًا",
        the_end_button:"انضم إلينا ",
    };
    const English = {
        main_title: "Call To Recycling ",
        main_title_caption: " Keep Clean .. Keep Green",
        left_element_title: "Sell And Earn",
        left_element_body_1: "With us, you can sell used.",
        left_element_body_2: " you can buy new ones.",
        left_element_body_3: " you can participate in various events and be a volunteer.",
        col_2_title:"Quick Links",
        About: " About Us ",
        events: "Events",
        products: "Products",
        services: "Services",
        col_3_title: "Latest News",
        col_3_body_1: "How can be successfull in market place ",
        col_3_body_2: " Renewable energy in 2030",
        address:"Our Address",
        copyright:"All Rights Reserved",
        home : "Home",
        the_end_1:"Spreed your love",
        the_end_2:"Become A Volunteer",
        the_end_button:"JOIN US NOW",
    };
  
    const { langcont, Setlangcontext } = useContext(Langcontext);
    const translation = langcont === "ENGLISH" ? English : Arabic;
  

    return (
        <>
        <footer>
            <div className="top-footer py-3">
                <div className="container d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                        <h2 className='my-2'>
                            <span className="text-green oleo"> {translation.main_title} </span> 
                            & {translation.main_title_caption}
                        </h2>
                    </div>     
                </div>
            </div>
            <div className="py-3">
                <div className="container d-flex flex-wrap align-items-start justify-content-between">
                    <div className='my-4'>
                        <div className='mb-4'>
                            <h2 className='mb-0'>
                                C <span className='text-green oleo h1'>2</span> R 
                            </h2>
                            <small className='text-gray'> {translation.left_element_title} </small>
                        </div>
                        <p className='text-gray small'>
                            {translation.left_element_body_1} <br/>
                            {translation.left_element_body_2} <br/>
                            {translation.left_element_body_3} <br/>
                        </p>
                        <div className='scial-icons text-gray'>
                            <a href="#"><FaFacebookF/></a>   
                            <a href="#"><FaPinterest/></a>  
                            <a href="#"><FaTwitter/></a>  
                            <a href="#"><FaVimeoV/></a>  
                            <a href="#"><FaLinkedinIn/></a>  
                        </div>
                    </div>
                    <div className='my-4 quick-links'>
                        <h3 className='mb-4'> {translation.col_2_title} </h3>
                        <ul className='text-gray'>
                            <li>
                                <FaChevronRight/> <Link to='/about' > {translation.About} </Link>
                            </li>
                            <li>
                                <FaChevronRight/>  <Link to='/events' > {translation.events} </Link>
                            </li>
                            <li>
                                <FaChevronRight/>  <Link to='/Homeproduct' > {translation.products} </Link>
                            </li>
                            <li>
                                <FaChevronRight/>  <Link to='/service' > {translation.services} </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4 latest-news'>
                        <h3 className='mb-4'> {translation.col_3_title} </h3>
                        <div>
                            <div className="card border-0 mb-3" style={{maxWidth:"250px"}}>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <img src={require('./../Home/images/plant.png')} width="100" className=" img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-9">
                                    <div className="card-body py-0 pe-0">
                                        <h6 className="card-title text-gray"> {translation.col_3_body_1} </h6>
                                        <p className="card-text"><small className="text-muted">3 Mar, 2022</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-3" style={{maxWidth:"250px"}}>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <img src={require('./../Home/images/recycling.png')} width='100' className=" img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-9">
                                    <div className="card-body py-0 pe-0">
                                        <h6 className="card-title text-gray"> {translation.col_3_body_2} </h6>
                                        <p className="card-text"><small className="text-muted">3 Mar, 2022</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 our-address'>
                        <h3 className='mb-4'>
                            {translation.address}
                        </h3>
                        <ul className='small text-gray'>
                            <li className='mb-3'>
                                <FaMapMarkerAlt/><p className='m-0'> Team 4 - Full Stack With Python <br/> G1 - ITI , Minia</p>
                            </li>
                            <li className='mb-3'>
                                <FaPhone/><p className='m-0'> +20 1114238872 </p>
                            </li>
                            <li className='mb-3'>
                                <FaEnvelopeOpen/><p className='m-0'>team4@iti.com </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-3 btm-footer'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div><p className='m-0 small'> 
                        {translation.copyright}
                        <span className='text-green'> ITI </span> @ 2022</p>
                    </div>
                    <div className='text-gray small copyright '>
                        <Link to='/' > {translation.home} </Link> | 
                        <Link to='/service' > Privacy & policy</Link> 
                    </div>
                </div>
            </div>
            <div className='below-footer '>
                <div className='overlay py-5 '>
                    <div className='container text-center py-5 my-5'>
                        <h5 className='mb-0'> {translation.the_end_1} </h5>
                        <h2 className='h1 my-3'>  {translation.the_end_2} </h2>
                        <Link to='/events' className='btn bg-green rounded-pill text-light py-1 px-4'>
                            <small>  {translation.the_end_button} </small>
                        </Link>
                    </div>  
                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;
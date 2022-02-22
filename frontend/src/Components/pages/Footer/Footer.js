import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = ()=>
{
    return (
        <>
        <footer>
            <div className="top-footer py-3">
                <div className="container d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                        <h2 className='my-2'>
                            <span className="text-green oleo">Stay in touch </span> 
                            & sign up for new sletter
                        </h2>
                    </div>
                    <div className="input-group my-2">
                        <input type="text" className="form-control" placeholder="Enter your name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2"><i className="fab fa-telegram-plane"></i></span>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="container d-flex flex-wrap align-items-start justify-content-between">
                    <div className='my-4'>
                        <div className='mb-4'>
                            <h2 className='mb-0'>
                                Envi<span className='text-green oleo h1'>ro</span> 
                            </h2>
                            <small className='text-gray'>Nature & ECO Tempelate</small>
                        </div>
                        <p className='text-gray small'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                            Rerum iure beatae tenetur repudiandae asperiores non <br/>
                            ducimus libero minus fuga fugit, illum.
                        </p>
                        <div className='scial-icons text-gray'>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>   
                            <a href="#"><i className="fab fa-pinterest"></i></a>  
                            <a href="#"><i className="fab fa-twitter"></i></a>  
                            <a href="#"><i className="fab fa-vimeo-v"></i></a>  
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>  
                        </div>
                    </div>
                    <div className='my-4 quick-links'>
                        <h3 className='mb-4'>Quick Links</h3>
                        <ul className='text-gray'>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>About Us</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>Recent Projects</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>Our Mission</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>FAQ's</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>Privcy & Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4 latest-news'>
                        <h3 className='mb-4'>Latest News</h3>
                        <div>
                            <div className="card border-0 mb-3" style={{maxWidth:"250px"}}>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <img src="http://placekitten.com/50/50" className="h-100 img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-9">
                                    <div className="card-body py-0 pe-0">
                                        <h6 className="card-title text-gray">How can be successfull in market place</h6>
                                        <p className="card-text"><small className="text-muted">13 Feb, 2016</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-3" style={{maxWidth:"250px"}}>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <img src="http://placekitten.com/50/50" className="h-100 img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-9">
                                    <div className="card-body py-0 pe-0">
                                        <h6 className="card-title text-gray">How can be successfull in market place</h6>
                                        <p className="card-text"><small className="text-muted">13 Feb, 2016</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 our-address'>
                        <h3 className='mb-4'>
                            Our Address
                        </h3>
                        <ul className='small text-gray'>
                            <li className='mb-3'>
                                <i className="fas fa-map-marker-alt"></i><p className='m-0'>60 Grant Ave, Central New <br/>Road 0708, UK</p>
                            </li>
                            <li className='mb-3'>
                                <i className="fas fa-phone"></i><p className='m-0'>+880 1723 801 729 </p>
                            </li>
                            <li className='mb-3'>
                                <i className="fas fa-envelope-open-text"></i><p className='m-0'>enviroco@gmail.com </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-3 btm-footer'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div><p className='m-0 small'>All Rights Reserved <span className='text-green'>CreativeGifs</span> @ 2017</p></div>
                    <div className='text-gray small'><a href='#'>Home</a> | <a href='#'>Privacy & policy</a> | <a href='#'>FAQ's</a></div>
                </div>
            </div>
            <div className='below-footer'>
                <div className='overlay py-5'>
                    <div className='container text-center py-5 my-5'>
                        <h5 className='mb-0'>Spreed your love</h5>
                        <h2 className='h1 my-3'>Become A Volunteer</h2>
                        <a href='#' className='btn bg-green rounded-pill text-white py-1 px-4'><small>JOIN US NOW</small></a>
                    </div>  
                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;
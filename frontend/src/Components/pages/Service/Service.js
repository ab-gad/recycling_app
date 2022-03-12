import React from 'react'
import PageTitle from "../../page_title"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import {Langcontext} from '../../../App'
import {useContext}from "react";
import { Link } from 'react-router-dom';

const Services = () => {
    const Arabic={
        Services:" خدمات",
        service_home:"القائمه الرئيسيه /خدمات",
        FirstDivaccordion:"من المنزل",
        firstaccordionbody:" إذا كنت شقة سكنية فالكمية المحددة لك هي 2 كجم كحد أدنى : 20 كجم كحد أقصى. ",
        SecDivaccordion:" محل تجارى",
        Secaccordionbody:" إذا كنت محل تجاري فالكمية المحددة لك هي 10 كجم كحد أدنى : 80 كجم كحد أقصى و يمكن لمندوبنا ان يأتيك بشكل يومى/اسبوعى حسب الكمية ",
        ThirdDivaccordion:"تعمل فى جمع النفايات",
        Thirdaccordionbody:"اذا كنت تعمل فى جمع النفايات و سواء كانت بلاستيك او الومنيوم او كرتون فإننا نستطيع ان نوفر لك دخل ثابت من خلال ان تعمل  معنا فى جمع هذة المواد ",
        order_button: "أرسل طلب" ,
    }
    const English={
        Services:" Services",
        service_home:"Home/Services",
        FirstDivaccordion:"From Home",
          firstaccordionbody:"If you are an apartment, the quantity specified for you is minimum 2 kg : 20 kg as a maximum.",
          SecDivaccordion:"Shop ",
          Secaccordionbody:"If you are a Shop , the quantity specified for you is minimum 10 kg : 80 kg as a maximum. Our representative can pass you on a daily/weekly basis, depending on the quantity.",
          ThirdDivaccordion:" Workers",
          Thirdaccordionbody:"If you work in collecting garbage, whether it is plastic, aluminum or cardboard, we can provide you with a fixed income by working with us in collecting these materials." ,
          order_button: "Create Order" ,
        }

          const{langcont,Setlangcontext} = useContext(Langcontext);
          const translation=langcont==="ENGLISH"?English:Arabic;

        
    return (
        <div >
            <PageTitle title={translation.Services} description={translation.service_home}/>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img
                            alt="img"
                            className='imgsize'
                            src={require('../Auth/images/sevices.png')}
                            />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>

                        <div className="accordion shadow" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="accordion-button text-dark shadow-none"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne">
                                                {translation.FirstDivaccordion}
                                        </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body text-dark">
                                       {translation.firstaccordionbody}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button
                                        className="accordion-button collapsed shadow-none"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo">
                                        {translation.SecDivaccordion}
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body text-dark">
                                       {translation.Secaccordionbody}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button
                                        className="accordion-button collapsed shadow-none"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree">
                                        {translation.ThirdDivaccordion}
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body text-dark">
                                       {translation.Thirdaccordionbody}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="container">
                <div className="catigorise d-flex flex-wrap  "> 
                    <div className="catigory_1" >
                        <h3>{translation.FirstDivaccordion}</h3>
                        <p>{translation.firstaccordionbody}</p>
                        <Link to="/service/cart/home" className='btn shadow-none px-4'> {translation.order_button} </Link>
                    </div>

                    <div className="catigory_2" >
                        <h3>{translation.SecDivaccordion}</h3>
                        <p>{translation.Secaccordionbody}</p>
                        <Link to="/service/cart/shop" className='btn shadow-none px-4'> {translation.order_button} </Link>
                    </div>
                    
                    <div className="catigory_3" >
                        <h3>{translation.ThirdDivaccordion}</h3>
                        <p>{translation.Thirdaccordionbody}</p>
                        <Link to="/service/cart/worker" className='btn shadow-none px-4'> {translation.order_button} </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default Services;
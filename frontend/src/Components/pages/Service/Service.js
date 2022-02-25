import React from 'react'
import Footer from "../Footer/Footer";
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
        FirstDivaccordion:"عملاء المنزل",
        // firstaccordionbody:"  يمكنك التعديل على البيانات و الكمية  التى لديك كما تريد حتى يوم الاربعاء حيث انه فى ذلك اليوم يتم اعتماد البيانات التى تم ادخالها  و يتم طباعة كشف  بالكمية و السعر اللذان تم اعتمادهم و اعطائهم للمندوب و الذى يتعامل مع العميل طبقا لما هو مسجل عنده فى الكشف ",
        firstaccordionbody:" إذا كنت شقة سكنية فالكمية المحددة لك هي 2 كجم كحد أدنى : 20 كجم كحد أقصى. ",
        SecDivaccordion:" محل تجارى",
        // Secaccordionbody:" اذا كنت صاحب محل تجارى فلديك الخيار ان يمر عليك المندوب بشكل يومى او اسبوعى او شهرى حسب الكمية التى لديك حيث   ياتى المندوب فى اليوم التالى من تسجيل البيانات فى حالة اذا اخترت ان يمر عليك بشكل يومى امال اذا اخترت ان يمر عليك بشكل اسبوعى فسيمر عليك مرة واحدة  فى الاسبوع حسب المنطقة التى تنتمى اليها ",
        Secaccordionbody:" إذا كنت محل تجاري فالكمية المحددة لك هي 10 كجم كحد أدنى : 80 كجم كحد أقصى و يمكن لمندوبنا ان يأتيك بشكل يومى/اسبوعى حسب الكمية ",
        ThirdDivaccordion:"العمال",
        Thirdaccordionbody:"اذا كنت تعمل فى جمع القمامة و سواء كانت بلاستيك او الومنيوم او كرتون فإننا نستطيع ان نوفر لك دخل ثابت من خلال ان تعمل  معنا فى جمع هذة المواد و تستطيع ان تعرف معلومات اكتر عن طريق سيكشن العاملين"
        }
        const English={
          Services:" Services",
          service_home:"Home/Services",
          FirstDivaccordion:"From Home",
        //   firstaccordionbody:"You can modify the data and quantity that you have as you want until Wednesday, as on that day the data entered is approved  A statement is printed with the quantity and price that was approved and given to the representative, who deals with the customer according to what is registered with him in the statement.",
          firstaccordionbody:"If you are an apartment, the quantity specified for you is minimum 2 kg : 20 kg as a maximum.",
          SecDivaccordion:"Shop ",
        //   Secaccordionbody:"If you are the owner of a commercial store, you have the option to have the representative pass you on a daily, weekly, or monthly basis, according to a large number in the field. I stop you on a daily basis quickly on you only once. According to the region you belong to",
          Secaccordionbody:"If you are a Shop , the quantity specified for you is minimum 10 kg : 80 kg as a maximum. Our representative can pass you on a daily/weekly basis, depending on the quantity.",
          ThirdDivaccordion:" Workers",
          Thirdaccordionbody:"If you work in collecting garbage, whether it is plastic, aluminum or cardboard, we can provide you with a fixed income by working with us in collecting these materials, and you can learn more information through the worker's section "
          }

          const{langcont,Setlangcontext} = useContext(Langcontext);
          console.log(langcont,"langContext")
          const translation=langcont==="ENGLISH"?English:Arabic;

        
    return (
        <div >
            <PageTitle title={translation.Services} description={translation.service_home}/>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img
                            alt="img"
                            className='imgsize'
                            src='https://api.army.mil/e2/c/images/2021/02/18/f45b8688/original.jpg'
                            />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="accordion-button text-dark"
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
                                        className="accordion-button collapsed"
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
                                        className="accordion-button collapsed"
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
                    <Link to="/service/cart/1" className="catigory_1" >
                        <h3>{translation.FirstDivaccordion}</h3>
                        <p>{translation.firstaccordionbody}</p>
                    </Link>

                    <Link to="/service/cart/2" className="catigory_2" >
                        <h3>{translation.SecDivaccordion}</h3>
                        <p>{translation.Secaccordionbody}</p>
                    </Link>
                    
                    <Link to="/service/cart/3" className="catigory_3" >
                        <h3>{translation.ThirdDivaccordion}</h3>
                        <p>{translation.Thirdaccordionbody}</p>
                    </Link>
                </div>
            </div>
        
            <Footer/>
        </div>
    )
}
export default Services;
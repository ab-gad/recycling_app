import React from 'react'
import Footer from "../Footer/Footer";
import PageTitle from "../../page_title"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import {Langcontext} from '../../../App'
 import {useContext}from "react";
const Services = () => {
    const Arabic={
        Services:" خدمات",
        service_home:"القائمه الرئيسيه /خدمات",
        FirstDivaccordion:"عملاء المنزل",
        firstaccordionbody:"تختلف سياسة جمع القمامة وإعادة التدوير لدينا بناءً على معايير محددة. إذا كنت تعيش في شقة سكنية فإنه  يمكنك تحديد الكمية ومعرفة السعر قبل أن يأتي مندوبنا إليك و تكون الزيارة الاسبوعية مرة واحدة فقط فى الاسبوع (يوم الخميس)  و و يمكنك التعديل على البيانات و الكمية  التى لديك كما تريد حتى يوم الاربعاء حيث انه فى ذلك اليوم يتم اعتماد البيانات التى تم ادخالها  و يتم طباعة كشف  بالكمية و السعر اللذان تم اعتمادهم و اعطائهم للمندوب و الذى يتعامل مع العميل طبقا لما هو مسجل عنده فى الكشف :",
        SecDivaccordion:"صاحب محل تجارى",
        Secaccordionbody:" اذا كنت صاحب محل تجارى فلديك الخيار ان يمر عليك المندوب بشكل يومى او اسبوعى او شهرى حسب الكمية التى لديك حيث   ياتى المندوب فى اليوم التالى من تسجيل البيانات فى حالة اذا اخترت ان يمر عليك بشكل يومى امال اذا اخترت ان يمر عليك بشكل اسبوعى فسيمر عليك مرة واحدة  فى الاسبوع حسب المنطقة التى تنتمى اليها ",
        ThirdDivaccordion:"العمال",
        Thirdaccordionbody:"اذا كنت تعمل فى جمع القمامة و سواء كانت بلاستيك او الومنيوم او كرتون فإننا نستطيع ان نوفر لك دخل ثابت من خلال ان تعمل  معنا فى جمع هذة المواد و تستطيع ان تعرف معلومات اكتر عن طريق سيكشن العاملين"
        }
        const English={
            Services:" Services",
            service_home:"Home/Services",
          FirstDivaccordion:"From Home",
          firstaccordionbody:"Our garbage collection and recycling policy vary based on specific criteria. If you live in an apartment then it You can specify the quantity and know the price before our representative comes to you. The weekly visit is only once a week (on Thursday) and And you can modify the data and quantity that you have as you want until Wednesday, as on that day the data entered is approved  A statement is printed with the quantity and price that was approved and given to the representative, who deals with the customer according to what is registered with him in the statement.",
          SecDivaccordion:"Shop Owner",
          Secaccordionbody:"If you are the owner of a commercial store, you have the option to have the representative pass you on a daily, weekly, or monthly basis, according to a large number in the field. I stop you on a daily basis quickly on you only once. According to the region you belong to",
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
                                        className="accordion-button"
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
                                    <div className="accordion-body">
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
                                    <div className="accordion-body">
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
                                    <div className="accordion-body">
                                       {translation.Thirdaccordionbody}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='con2 '>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4  col-md-6 col-sm-12'>
                    <div className='inli'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        alt=""
                                        src='https://misasmartlogistics.com/wp-content/uploads/brizy/11485/assets/images/iW=555&iH=303&oX=0&oY=0&cW=555&cH=303/Door-to-Door-Delivery-Service-V2.png'
                                        className='imgsize'/>
                                </div>
                                <div className="flip-card-back">
                                    <h1>{translation.FirstDivaccordion}</h1>
                                    <hr/>
                                    <hr/>

                                    <p>{translation.firstaccordionbody}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>

                    <div className='inli'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        alt=""
                                        className='imgsize'
                                        src='https://cfcdn.streetfightmag.com/wp-content/uploads/Fotolia_55569182_S-e1429301151743-723x390.jpg'
                                       />

                                </div>
                                <div className="flip-card-back">
                                    <h1>{translation.SecDivaccordion}</h1>
                                    <hr/>

                                    <p>{translation.Secaccordionbody}</p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>

                    <div className='inli'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        alt=""
                                        src='http://www.theborneopost.com/newsimages/2016/10/C_PC0017464.jpg'
                                        className='imgsize'/>

                                </div>
                                <div className="flip-card-back">
                                    <h1>{translation.ThirdDivaccordion}</h1>
                                    <hr/>
                                    <p>{translation.Thirdaccordionbody}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>

            <Footer/>
        </div>
    )
}
export default Services;
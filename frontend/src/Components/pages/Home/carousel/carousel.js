import React , { useContext } from "react";
import { Langcontext } from "../../../../App";
import { Link } from 'react-router-dom';
import "./carousel.css";


function Carousel (){

  const Arabic = {
    Slide_1_title: "يسعدنا وجودك معنا فى Call To Recycle",
    Slide_1_body: "معنا تستطيع بيع الاشياء المستخدمة سواء كانت أوراق او زجاجات بلاستيكية او الومنيوم و تحسين مستوى دخلك  ",
    Slide_1_button1: "أبدأ الآن",
    Slide_1_button2: "من نحن",
    Slide_2_title: "ماذا تريد ان تشترى ",
    Slide_2_body: "يمكنك شراء العديد من المنتجات التى تساعدك فى الحفاظ على صحة و سلامة عائلتك ",
    Slide_2_button1: "المنتجات",
    Slide_3_title: "شارك معنا فى العديد من الاحداث",
    Slide_3_body: "يمكنك المشاركة فى العديد من الاحداث و ان تصبح متطوعاً لنعيش فى عالمٍ أفضل ",
    Slide_3_button1: "الأحداث",
    Slide_4_title: "تواصل معنا",
    Slide_4_body: "يسعدنا أن تتواصل معنا و ان تشاركنا الرأى و الإقتاراحات",
    Slide_4_button1: "تواصل معنا",
  }; 
  
  const English = {
    Slide_1_title: "Welcome in Call To Recycle",
    Slide_1_body: "With Call To Recycle Sell Your Paper, Plastic And Metal Garbage And Improve Your Income" ,
    Slide_1_button1: "Get Start Now" ,
    Slide_1_button2: "About Us",
    Slide_2_title: "What You Want To Buy",
    Slide_2_body: "You Can Buy Many Products That Help You Keep Your Family Healthy And Safe" ,
    Slide_2_button1: "Product" ,
    Slide_3_title: "Participate In Different Events",
    Slide_3_body: "You Can Participate In Different Events And Be A Volunteer To Live In A Better World" ,
    Slide_3_button1: "Events" ,
    Slide_4_title: "Contact With Us",
    Slide_4_body: "It Is Our Pleasure To Contact Us And Give Your Opinions And Suggestions" ,
    Slide_4_button1: "Contact Us" ,
  }; 

  const { langcont, Setlangcontext } = useContext(Langcontext);
  const translation = langcont === "ENGLISH" ? English : Arabic;

 return (
    <section>
    <div className="carousel slide" data-bs-ride="carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide cus-carousel-height"
        data-bs-interval="false"
      >
        <div className="carousel-indicators cus-postion">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="cus-shape active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="cus-shape"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="cus-shape"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="cus-shape"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner cus-full-height">
          <div className="carousel-item first-slide active cus-full-height" data-bs-interval="6000" >
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 animate__animated animate__zoomIn">
                  {translation.Slide_1_title}
                </h1>
                <p className="mb-0 col-8-md col-lg-7 fs-5 d-none shadow-none  text-capitalize d-md-block animate__animated animate__zoomIn">
                  {translation.Slide_1_body} 
                </p>
                <div className="my-4  cus-bottons animate__animated animate__fadeInUpBig">
                  <Link
                    to='/service'
                    type="button"
                    className="btn fw-light btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                  >
                   {translation.Slide_1_button1} 
                  </Link>
                  <Link
                    to='/about'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                    >
                    {translation.Slide_1_button2} 
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item zero-slide cus-full-height" data-bs-interval="6000">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 text-capitalize  animate__animated animate__zoomIn">
                  {translation.Slide_2_title} 
                </h1>
                <p className="mb-0 text-capitalize  col-8-md col-lg-7 fs-5 d-none shadow-none  d-md-block animate__animated animate__zoomIn">
                  {translation.Slide_2_body} 
                </p>
                <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">

                  <Link
                    to='/Homeproduct'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    {translation.Slide_2_button1}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item second-slide cus-full-height" data-bs-interval="6000">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 text-capitalize h2 animate__animated animate__zoomIn">
                  {translation.Slide_3_title}
                </h1>
                <p className="mb-0 text-capitalize col-8-md col-lg-7 fs-5 d-none shadow-none  d-md-block animate__animated animate__zoomIn">
                  {translation.Slide_3_body} 
                </p>
                <div className="cus-bottons my-4 animate__animated animate__fadeInUpBig">
                  <Link
                    to='/events'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    {translation.Slide_3_button1}
                  </Link>
                </div>
              </div>
            </div> 
          </div>
          <div className="carousel-item third-slide cus-full-height" data-bs-interval="6000">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 text-capitalize animate__animated animate__zoomIn">
                  {translation.Slide_4_title}
                </h1>
                <p className="my-0 col-8-md text-capitalize col-lg-7 fs-5 d-none shadow-none  d-md-block animate__animated animate__zoomIn">
                  {translation.Slide_4_body} 
                </p>
                <div className="my-4 fw-light cus-bottons animate__animated animate__fadeInUpBig">        
                  <Link
                    to='/contact'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                   {translation.Slide_4_button1}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}
export default Carousel;
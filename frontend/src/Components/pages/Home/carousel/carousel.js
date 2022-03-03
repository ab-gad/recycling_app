import { Link } from 'react-router-dom';
import "./carousel.css"


function Carousel (){

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
                  Welcome in Call To Recycle
                </h1>
                <p className="mb-0 col-8-md col-lg-7 fs-5 d-none text-capitalize d-md-block animate__animated animate__zoomIn">
                  with Call to recycle Sell your paper, plastic  and metal garbage and improve your income   
                </p>
                <div className="my-4  cus-bottons animate__animated animate__fadeInUpBig">
                  <Link
                    to='/service'
                    type="button"
                    className="btn fw-light btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                  >
                    Get Start Now
                  </Link>
                  <Link
                    to='/about'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item zero-slide cus-full-height" data-bs-interval="6000">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 text-capitalize  animate__animated animate__zoomIn">
                  What you want to buy 
                </h1>
                <p className="mb-0 text-capitalize  col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  You can buy many products that help you keep your family healthy and safe
                </p>
                <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">

                  <Link
                    to='/Homeproduct'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item second-slide cus-full-height" data-bs-interval="6000">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 text-capitalize h2 animate__animated animate__zoomIn">
                  Participate in different events
                </h1>
                <p className="mb-0 text-capitalize col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  You can participate in different events and be a volunteer to live in a better world
                </p>
                <div className="cus-bottons my-4 animate__animated animate__fadeInUpBig">
                  <Link
                    to='/events'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item third-slide cus-full-height" data-bs-interval="6000">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 text-capitalize animate__animated animate__zoomIn">
                  Contact with us
                </h1>
                <p className="my-0 col-8-md text-capitalize col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  It is our pleasure to contact us and give your opinions and suggestions
                </p>
                <div className="my-4 fw-light cus-bottons animate__animated animate__fadeInUpBig">        
                  <Link
                    to='/contact'
                    type="button"
                    className="btn fw-light btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    Contact Us
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
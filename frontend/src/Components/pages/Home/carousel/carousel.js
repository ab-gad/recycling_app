import "./carousel.css"

function Carousel ()
{
 return (
    <section>
    <div className="carousel">
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
          <div className="carousel-item first-slide active cus-full-height">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 animate__animated animate__zoomIn">
                  WELCOME TO THE WORLD
                </h1>
                <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, maiores amet quasi sunt dignissimos totam!
                </p>
                <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                  <button
                    type="button"
                    className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                  >
                    Get Start Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item zero-slide cus-full-height">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 animate__animated animate__zoomIn">
                  WELCOME TO THE WORLD
                </h1>
                <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, maiores amet quasi sunt dignissimos totam!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item second-slide cus-full-height">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 animate__animated animate__zoomIn">
                  What Do You Do Today For Peaples 2
                </h1>
                <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, maiores amet quasi sunt dignissimos totam!
                </p>
                <div className="cus-bottons my-4 animate__animated animate__fadeInUpBig">
                  <button
                    type="button"
                    className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                  >
                    Get Start Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item third-slide cus-full-height">
            <div className="cus-overlay">
              <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                <h1 className="my-4 h2 animate__animated animate__zoomIn">
                  What Do You Do Today For Peaples 1
                </h1>
                <p className="my-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, maiores amet quasi sunt dignissimos totam!
                </p>
                <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                  <button
                    type="button"
                    className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                  >
                    Get Start Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                  >
                    Contact Us
                  </button>
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
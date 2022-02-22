import React , {useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { LinearProgress } from "@material-ui/core";
import Progress from "../Home/progress";
import lamp from "../Home/images/lamp.PNG";
import plant from "../Home/images/plant.png";
import recycling from "../Home/images/recycling.png";
import electricity from "./images/electricity.png";
import power from "./images/power.png";
import watering from "../Home/images/watering.png";
import Team from "./team/Team";
import News from "./news/News";
import Card from "./Card";
import Carousel from "./carousel/carousel";
import Popup from "./Popup";
import Footer from "../Footer/Footer";
import Home_icon_data from '../../home_icon_data';

const Home = () => {
  return (
    <section  >
      {/* _______________________ Carouser Section ______________________________ */}
      <Carousel />
      {/* ______________________ 4 Cards (Working) Section _____________________________*/}
      <section id="homeCard">
        <div className="container py-5 mt-5">
          {/* __Title__ */}
          <div className="mb-5">
            <h2 className="green">2000+Volunter</h2>
            <h1 id="headers">People working with us since 1987!!</h1>
            <p className="size">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <Card
              title="Recycling"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={power}
              modelId="staticBackdrop"
            />
            <Popup content="hello1" modelId="staticBackdrop" />

            <Card
              title="Water Refine"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={electricity}
              modelId="staticBackdrop2"
            />
            <Popup content="hello2" modelId="staticBackdrop2" />

            <Card
              title="Eco system"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={power}
              modelId="staticBackdrop3"
            />
            <Popup content="hello3" modelId="staticBackdrop3" />

            <Card
              title="solar system"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={electricity}
              modelId="staticBackdrop4"
            />
            <Popup content="hello4" modelId="staticBackdrop4" />
          </div>
        </div>
      </section>

      {/* ______________________ Big Icons Section _____________________________________ */}
      
      <Home_icon_data />

      {/* ________________________ Lamp Section ____________________________ */}
      <section className="py-5">
        <Container>
          {/* __Title__ */}
          <div>
            <h2 className="green">2000+Volunter</h2>
            <h1 id="headers">People working with us since 1987!!</h1>
            <p className="size">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam
            </p>
          </div>

          <div className="cont">
            <Row>
              <Col>
                <div>
                  <p className="ubuntu">our mission</p>
                  <h4 className="h4">
                    We've <span className="green"> large volunteer</span>{" "}
                    community to set environment{" "}
                  </h4>
                  <br></br>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img src={plant} alt="Plant!" width="40" height="40" />
                    </Col>
                    <Col>
                      <h5 className="ubuntu">Recycling Rubbish</h5>
                      <p className="ubuntu">Lorem ipsum dolor sit amet</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img
                        src={recycling}
                        alt="Plant!"
                        width="40"
                        height="40"
                      />
                    </Col>
                    <Col>
                      <h5 className="ubuntu">Plant Ecology</h5>
                      <p className="ubuntu">Lorem ipsum dolor sit amet</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img src={watering} alt="Plant!" width="40" height="40" />
                    </Col>
                    <Col>
                      <h5 className="ubuntu">Recycling Rubbish</h5>
                      <p className="ubuntu">Lorem ipsum dolor sit amet</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <img
                  src={lamp}
                  alt="Tree inside lamp!"
                  width="200"
                  height="300"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/*_______________________ Materials Data Table Section_____________________________*/}
      <section id="reat_section" className=" my-5 p-3 fs-sm-6 fs-md-1">
        <table className="table table-borderless text-center">
          <thead className="">
            <tr className=" row align-items-center">
              <th className="col-3 d-none d-sm-block ">material</th>
              <th className="col-4 col-sm-3">
                annual <br /> production
              </th>
              <th className="col-4 col-sm-3">
                Annual <br /> consumption
              </th>
              <th className="col-4 col-sm-3">recycling</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" row justify-content-between align-items-centermt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">plastic</td>
              <td className="col-4 col-sm-3">
                <Progress value={50} /> <span>50%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={93} />
                <span>93%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">
                Cardboard and papers
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={45} />
                <span>45%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={30} />
                <span>30%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">Aluminum</td>
              <td className="col-4 col-sm-3">
                <Progress value={70} />
                <span>70%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={90} />
                <span>90%</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="ssss">
                <h6>environmental conservation rate</h6>
                <LinearProgress
                  className="env_rate"
                  variant="determinate"
                  value={80}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      {/* _________________________Team Member Section______________________________ */}
      <Team />

      <News />

      {/* ______________________ Footer ________________________________________________ */}
      <Footer />
    </section>
  );
};
export default Home;

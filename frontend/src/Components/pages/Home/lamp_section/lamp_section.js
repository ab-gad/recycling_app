import { Col, Container, Row } from "react-bootstrap";
import lamp from "../../Home/images/lamp.PNG";
import plant from "../../Home/images/plant.png";
import idea from "../../Home/images/idea.png";
import React , { useContext } from "react";
import { Langcontext } from "../../../../App";

function Lamp_section () {

  const Arabic = {
    title : "نسعى لمستقبلٍ أفضل",
    title_body : "نسعى أن يكون لدينا أكثر من 20،000 متطوع فى مختلف المحافظات لاننا نؤمن تماماً ان المستقبل سيبنى بالعمل الدؤوب و الشغف نحو الافضل  ",
    head_1: "يمكنك ان تشارك معنا فى ",
    head_strong: "الاحداث ",
    head_2: "وتترك أثراً جيدا",
    element_1_title : "نظيفة و خضراء",
    element_1_body : "شارك معنا للحفاظ على بيئة نظيفة و خضراء",
    element_2_title : "شارك بفكرة",
    element_2_body : "تواصل معنا و شاركنا افكارك ومقترحاتك",
  }
  const English = {
    title : "Strive for a better future",
    title_body : "We seek to have more than 20,000 volunteers in various cities because we fully believe that the future will be built with hard work and passion for the better.",
    head_1: "You can participate with us in",
    head_strong: "our events",
    head_2: "  and make a good impact",
    element_1_title : " Clean and Green",
    element_1_body : "participate to maintaining a clean and green environment",
    element_2_title : "Share an Idea",
    element_2_body : "Contact us and share your ideas and suggestions",
  }
  const { langcont, Setlangcontext } = useContext(Langcontext);
  const translation = langcont === "ENGLISH" ? English : Arabic;
  
    return (
        <section className="py-5 container">
          <div>
            <h2 className="green">20,000+Volunter</h2>
            <h1 id="headers"> {translation.title} </h1>
            <p className="size"> {translation.title_body} </p>       
          </div>

          <div className="cont d-flex justify-content-center flex-wrap">
            <Row xs={1} md={2}>
              <Col>
                <div>
                  <h4 className="h4 my-sm-4">
                    {translation.head_1}
                    <h3 className="d-inline m-0 p-0 green"> {translation.head_strong} </h3>
                    {translation.head_2}
                  </h4>
                  <br></br>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img src={plant} alt="Plant!" width="40" height="40" />
                    </Col>
                    <Col>
                      <h5 className="ubuntu"> {translation.element_1_title} </h5>
                      <p className="ubuntu">{translation.element_1_body}</p>
                    </Col>
                  </Row>
                </div>
                <div className="mt-3">
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img
                        src={idea}
                        alt="Plant!"
                        width="40"
                        height="40"
                      />
                    </Col>
                    <Col>
                    <h5 className="ubuntu"> {translation.element_2_title} </h5>
                      <p className="ubuntu">{translation.element_2_body}</p>
                    </Col>
                  </Row>
                </div>   
              </Col>
              <Col  dir='ltr'>
                <img
                  src={lamp}
                  alt="Tree inside lamp!"
                  width="200"
                  className="lamp_effect "  
                />
              </Col>
            </Row>
          </div>
      </section>
    );
} 

export default Lamp_section;
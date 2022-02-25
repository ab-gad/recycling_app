import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./showevent.css";
{
  /* import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";


function Show(props) {
  const params = useParams();
  console.log(params.id, "params"); // params link

  const [userInfo, setInfo] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/events_api/Events/${params.id}`)
      .then((res) => {
        console.log(res.data, "here");
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  , []);

  return (
    <React.Fragment>
      <Container>
        <AboutRow>
          <AboutImage src={`${userInfo.img}`}/>
          <AboutText>
            <Heading>{userInfo.title}{" "}</Heading>
            <SubTitle>Location: {userInfo.location}{" "}</SubTitle>
            <SubTitle>Start Date: {userInfo.start_date}{" "}</SubTitle>
            <SubTitle>End Date: {userInfo.end_date}{" "}</SubTitle>
            <Text>Details: {userInfo.details}{" "}</Text>
          </AboutText>
        </AboutRow>
      </Container>
    </React.Fragment>
  );
}

const AboutRow = styled.div`
display: flex;
flex-direction: row;
padding: 120px 0;
margin: 0 100px;

@media screen and (max-width: 960px){
  flex-direction: column;
  margin: 0;
  padding: 60px 0;
}
`;
const AboutImage = styled.img`
width: 474px;
height: auto;

@media screen and (max-width: 960px){
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
`;
const AboutText = styled.div`
padding: 20px;
`;

const Heading = styled.h1`
font-size: 3rem`;
const SubTitle = styled.h4`
font-size: 1.3rem;
`;
const Text = styled.p`
text-align: justify;
margin-bottom:20px;
margin-top: 20px;
`;
export default Show; */
}

const Show = (props) => {
  const params = useParams();
  console.log(params.id, "params"); // params link

  const [userInfo, setInfo] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/events_api/Events/${params.id}`)
      .then((res) => {
        console.log(res.data, "here");
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="card text-center shadow">
          <div className="overflow">
            <img src={`${userInfo.img}`} className="card-img-top" />
          </div>
         
          <div className="card-body text-dark">
            <h4 className="card-title">{userInfo.title} </h4>
            
            <p className="card-text text-secondary">{userInfo.details} </p>
            <p className="badge rounded-pill bg-success center">
            {" "}
            <strong>Location: </strong>
            {userInfo.location}{" "}
          </p>
          </div>
          <hr/>
          <p className="text-center">
            {" "}
            <strong>Start Date: </strong>
            {userInfo.start_date}{" "}
          </p>
          <p className="text-center">
            {" "}
            <strong>End Date: </strong>
            {userInfo.end_date}{" "}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Show;

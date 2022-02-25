import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./showevent.css";
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
    <>
    <section id="showeventCard">
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
    </section>
    
    </>
    
  );
};

export default Show;

import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "../../page_title";

import { Container, Row, Col } from "react-bootstrap";
import "./showevent.css";
const Show = (props) => {
const params = useParams();
  // console.log(params.id, "params"); // params link

  const [userInfo, setInfo] = useState({});
  const [userInfo2, setInfo2] = useState({});
  const [userInfo3, setInfo3] = useState({});

  // Promise.all([
  //   axios.get("`http://127.0.0.1:8000/events_api/Events/${params.id}`"),
  //   axios.get("http://127.0.0.1:8000/comment_api_test/Comments"),
  //   axios.get("http://127.0.0.1:8000/user_api/list/")
  // ]).then(allResponses => {
  //   const response1 = allResponses[0]
  //   const response2 = allResponses[1]
  //   const response3 = allResponses[2]
  
  //   console.log(response1.data,"event")
  //   console.log(response2.data,"comment")
  //   console.log(response3.data,"user")
  
  // })

  // const getUsers = async () => {
  //   let response = await axios.get('http://127.0.0.1:8000/comment_api_test/Comments')
  //   console.log(response.data,"asyncs")
  //   setInfo2(response.data)
  // };
  // useEffect(() => {
  //   getUsers();
  //  }, []);

   useEffect(() => {
     axios.get(`http://127.0.0.1:8000/events_api/Events/${params.id}`)
      .then((res) => {
        console.log(res.data, "here");
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/user_api/list/`)
  //     .then((user) => {
  //       console.log(user.data, "user");
  //       setInfo3(user.data);
  //       // console.log(setInfo3.length,"ds")
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <PageTitle title="Event" description="Home/Event/Show Event" />

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
              <hr />
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

      {/* <div>
        <section>
          <hr />
          <h3 className="container">Comment section</h3>
          <div className=" my-5 py-5 text-dark">
            <div className="row d-flex justify-content-center">
              <div className="col-md-11 col-lg-9 col-xl-7">
 
                
                {userInfo3.map((user)=>{
                  {userInfo2.map((comm) => {


                    
  
                      if(comm.user ==user.id){
                        console.log(comm.user,"commennt",user.id,"user")
  
                      }
                    
                    
                    return (
                      
  
                      <div className=" border d-flex flex-start mb-4">
                                            <div>{}</div>
  
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                          alt="avatar"
                          width="65"
                          height="65"
                        />
                        <div className="card w-100">
                          <div className="card-body p-4">
                            <div className="">
                              <h5>{comm.comment}</h5>
                              <p>
                             {comm.user}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                   })}
                })} 
              </div>
            </div>
          </div>
        </section> */}
      {/* </div> */}
    </div>
  );
};

export default Show;

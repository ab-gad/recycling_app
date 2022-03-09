import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./events.css";
import { useHistory,Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Volunteer from "./event_components/volunteer";
import Interest from "./event_components/interest";






const Events = () => {
    const authed_user = useSelector((state) => state.authReducer.user);

    
  
    return (
        <section id="events_container">
            <h1 className="text-center"> {`Welcome ${authed_user && authed_user.first_name} ${authed_user && authed_user.last_name}`} </h1>
                <div className="tabs_container">
                    <ul className="nav nav-pills d-flex justify-content-center mt-4" id="pills-tab" role="tablist " >
                        <li className="nav-item me-2  " role="presentation">
                            <button className="nav-link active" id="pills-volunteer-tab" data-bs-toggle="pill" data-bs-target="#pills-volunteer" type="button" role="tab" aria-controls="pills-volunteer" aria-selected="true">Volunteer</button>
                        </li>
                        <li className="nav-item ms-2  " role="presentation">
                            <button className="nav-link" id="pills-interested-tab" data-bs-toggle="pill" data-bs-target="#pills-interested" type="button" role="tab" aria-controls="pills-interested" aria-selected="false">Interested</button>
                        </li>
                    </ul>
                    <div className="tab-content " id="myTabContent">
                        <div className="tab-pane fade show active" id="pills-volunteer" role="tabpanel" aria-labelledby="pills-volunteer-tab"><Volunteer/> </div>
                        <div className="tab-pane fade" id="pills-interested" role="tabpanel" aria-labelledby="pills-interested-tab"><Interest/></div>
                    </div>
                </div>

            

        </section>

        

    
    );
  };
  
  export default Events;

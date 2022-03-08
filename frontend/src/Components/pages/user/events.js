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
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="volunteer-tab" data-bs-toggle="tab" data-bs-target="#volunteer" type="button" role="tab" aria-controls="volunteer" aria-selected="true">Volunteer</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="interested-tab" data-bs-toggle="tab" data-bs-target="#interested" type="button" role="tab" aria-controls="interested" aria-selected="false">Interested</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="volunteer" role="tabpanel" aria-labelledby="volunteer-tab"><Volunteer/> </div>
                <div class="tab-pane fade" id="interested" role="tabpanel" aria-labelledby="interested-tab"><Interest/></div>
            </div>
        </section>

        

    
    );
  };
  
  export default Events;

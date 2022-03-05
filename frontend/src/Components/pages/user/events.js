import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./events.css";
import { useHistory,Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import {BsFillCursorFill} from "react-icons/bs"
import {BsFillAlarmFill} from "react-icons/bs"




const Events = (props) => {
    const history=useHistory()
    const [events, setEvents] = useState([]);
    const authed_user = useSelector((state) => state.authReducer.user);
    
    const getEvents = () => {
        if (authed_user !== null){
            const id = authed_user.id
            console.log(authed_user.id,"user id");
            axios
            .get(`http://localhost:8000/user_api/events/${id}`)
            .then((result) => {
                console.log("events",result.data.events);
                setEvents(result.data.events);
            })
            .catch((err) => {
              console.log(err);
            });

        }
    };

    useEffect(() => {
        getEvents();
        
    }, [authed_user]);
  
    return (
        <section id="events_container">  
            <h1 className="text-center"> {`Welcome ${authed_user && authed_user.first_name} ${authed_user && authed_user.last_name}`} </h1>
            <div className="row justify-content-center ">
            {events.map((E) =>{
                return (
                    <div className="card mt-2 me-2">
                            <div className="photo">
                                <img src={`http://localhost:8000${E.img}`}/>
                                <div className="event_no">{E.id}</div>
                            </div>
                            <div className="content">
                                <p className="title">{E.title}</p>
                                <p className="subtitle">{`${E.title} details`}</p>
                                <p className="details">{E.details}</p>
                            </div>
                            <div className="footer">
                                <p>
                                    <Link to={`/show/${E.id}`} className="btn btn-success w-50 m-auto">Event Details</Link>
                                    <span className="location"><BsFillCursorFill className="lo_icon" />{E.location}</span>
                                </p>
                                <p className="date"> <BsFillAlarmFill className="date_icon" /> {`${E.start_date}`} <span className="end_date">{`To: ${E.end_date}`}</span></p>
                            </div>
                    </div>

                );
            })}
            </div>
        </section>

    
    );
  };
  
  export default Events;

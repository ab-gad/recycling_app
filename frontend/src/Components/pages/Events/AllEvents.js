import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory,Link } from 'react-router-dom';
import {BsFillCursorFill} from "react-icons/bs"
import {BsFillAlarmFill} from "react-icons/bs"
import AnEvent from "./AnEvent";

const AllEvents = (props) => {
    const history=useHistory()
    const [events, setEvents] = useState([]);
    
    const getEvents = () => {
            axios
            .get(`http://127.0.0.1:8000/events_api/Events/`)
            .then((result) => {
                console.log("events",result.data);
                setEvents(result.data);
            })
            .catch((err) => {
              console.log(err);
            });
    };

    useEffect(() => {
        getEvents();
    }, []);
  
    return (
        <section id="allEvents" className="py-5">  
            <div className="container row row-cols-1 row-cols-md-3 g-4">
            {events.map((e) =>{
                return (
                    <AnEvent event={e}/>
                );
            })}
            </div>
        </section>

    
    );
  };
  
  export default AllEvents;

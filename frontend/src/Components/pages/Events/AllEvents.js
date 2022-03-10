import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import AnEvent from "./AnEvent";
import Spinner from "../../../spinner/spinner";

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setloading] = useState(true);
    const getEvents = () => {
        axios
        .get(`http://127.0.0.1:8000/events_api/Events/`)
        .then((result) => {
            console.log("events",result.data);
            setEvents(result.data);
            setloading(false)
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        getEvents();
    }, []);
    
    if(loading){
        return <Spinner/>
    }

    return (
        <section id="allEvents " className="py-5">
            {console.log('RENDER')}  
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

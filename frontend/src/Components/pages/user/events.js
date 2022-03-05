import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./events.css";
import { useHistory,Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Events = (props) => {
    const history=useHistory()
    const [events, setEvents] = useState({});
    const authed_user = useSelector((state) => state.authReducer.user);
    console.log(authed_user.id,"user id");
    const id = authed_user.id

    const getEvents = () => {
        axios
        .get(`http://localhost:8000/user_api/events/${id}`)
        .then((result) => {
            console.log("events",result.data.events);
            setEvents(result.data.events);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
        getEvents();
        
    }, []);
  
    return (
    //     <div>
    //   <PageTitle title="Event" description="Home/Event" />
    //   <div className="container">
    //     <div className="row">
    //       {events.map((event) => {
    //         return (
    //           <div key={event.id} className="col-lg-4  col-sm-12">
    //             <Card style={{ width: "18rem" }}>
    //               <Link to={`/Show/${user.id}`}>
    //                 <Card.Img variant="top" src={user.img} />
    //               </Link>
    //               <Card.Body>
    //                 <Card.Title>{user.title}</Card.Title>
    //                 <Card.Text id="content">{user.details}</Card.Text>
    //                 <Button variant="primary"> {user.location}</Button>
    //               </Card.Body>
    //             </Card>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <p> hello</p>
    
    );
  };
  
  export default Events;

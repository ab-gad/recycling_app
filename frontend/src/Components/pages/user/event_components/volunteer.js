import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../events.css";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import {BsFillCursorFill} from "react-icons/bs"
import {BsFillAlarmFill} from "react-icons/bs"
import Spinner from '../../../../spinner/spinner'  
import { useHistory } from 'react-router-dom';



const Volunteer = (props) => {
    const history = useHistory()
    const [loading,setLoading]=useState(true) 
    const [volEvents, setVolEvents] = useState([]);
    const authed_user = useSelector((state) => state.authReducer.user);
    
    const getVolunteeringEvents = () => {
        if (authed_user !== null){
            const id = authed_user.id
            console.log(authed_user.id,"user id");
            axios
            .get(`http://localhost:8000/events_api/getUserEvents/${id}`)
            .then((result) => {
                console.log("volunteer",result.data.data);
                setVolEvents(result.data.data);
                setLoading(false)
            })
            .catch((err) => {
              console.log(err);
            });
            

        }
    };

    
    useEffect(() => {
        if (localStorage.getItem('access')){
            if (authed_user !== null){
                getVolunteeringEvents()
            }
        }else{
            history.push('error_404')
        }   
    }, [authed_user]);

    if (loading){
        return <Spinner/>
    }
  
    return (
        <section id="events_container">
            {volEvents.length === 0 ? (
            <div className="text-center" id="empty_volunteer">
                <img src={require('../img/event2.jpeg')} alt="Empty page img" />
                <h3 className="text-capitalize">your Page is Empty </h3>
                <Link to="/events">
                <span className="btn volunteerbtn">you can volunteer now</span>
                </Link>

            </div>
    ) : (
      <>
            <div className="row justify-content-center ">
            {volEvents.map((E) =>{
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
      </>  
        )}   
        </section>

    
    );
  };
  
  export default Volunteer;

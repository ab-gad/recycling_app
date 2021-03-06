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

const Interest = (props) => {

    const history = useHistory()
    const [loading,setLoading]=useState(true) 
    const [intEvents, setIntEvents] = useState([]);
    const authed_user = useSelector((state) => state.authReducer.user);
    
    const getInterestedEvents = () => {
        if (authed_user !== null){
            const id = authed_user.id
            console.log(authed_user.id,"user id");
            axios
            .get(`http://localhost:8000/events_api/getUserInterests/${id}`)
            .then((result) => {
                console.log("interested",result.data.data);
                setIntEvents(result.data.data);
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
                getInterestedEvents()
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
            {intEvents.length === 0 ? (
            <div className="text-center" id="empty_interest">
                <img src={require('../img/event2.jpeg')} alt="Empty page img" />
                <h3 className="text-capitalize">your Page is Empty </h3>
                <Link to="/events">
                <span className="btn interestbtn">you can interest now</span>
                </Link>

            </div>
    ) : (
      <>
            <div className="row justify-content-center ">
            {intEvents.map((E) =>{
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
  
  export default Interest;

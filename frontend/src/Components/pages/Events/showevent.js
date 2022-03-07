import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "../../page_title";
import {BsListStars, BsFillBookmarkStarFill,BsFillAlarmFill, BsFillCursorFill } from "react-icons/bs"
import {MdVolunteerActivism, MdOutlineVolunteerActivism} from "react-icons/md"
import {SiTarget} from "react-icons/si"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {TiDeleteOutline} from "react-icons/ti"

const Show = (props) => {
  // console.log(params.id, "params"); // params link
  const params = useParams();
  const authed_user = useSelector((state)=> state.authReducer.user)
  
  const [eventInfo, setInfo] = useState({});
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
  const [volunteer, setVolunteer]=useState(false)
  const [interest, setInterest]=useState(false)

  const handleVolunteer = (type) => {
    if (authed_user === null){
      alert("you have to login first to volunteer")
    }else if(authed_user && authed_user.id){
      axios.get(`http://127.0.0.1:8000/events_api/handleVoluntee/${authed_user.id}/${eventInfo.id}`)
      .then((res)=>{
        setInfo({...eventInfo, volunteers:res.data.data.volunteers});
        if (type==='add'){
          toast.success(`You have volunteered successfully in event No.${res.data.data.id} `, {
            position: "bottom-left",
          });
          setVolunteer(true)
        }else{
          toast.success(`Event No.${res.data.data.id} successfully removed from your events list`, {
            position: "bottom-left",
          });
          setVolunteer(false)
        }
  
      })
      .catch((err)=>{
        if(err.response){
          console.log(err?.response?.data)
          toast.error(`oops!! ${err?.response?.data}  `, {
            position: "bottom-left",
          });
        }else{
          toast.error(`oops!! Err in volunteering, Please Try again  `, {
            position: "bottom-left",
          });
        }
      })
    }
  }

  const handleInterest = (type) => {
    if (authed_user === null){
      alert("you have to login first to volunteer")
    }else if(authed_user && authed_user.id){
      axios.get(`http://127.0.0.1:8000/events_api/handleInterests/${authed_user.id}/${eventInfo.id}`)
      .then((res)=>{
        setInfo({...eventInfo, interests:res.data.data.interests});
        if (type==='add'){
          toast.success(`Event No.${res.data.data.id} has been added successfully to your Interests List`, {
            position: "bottom-left",
          });
          setInterest(true)
        }else{
          toast.success(`Event No.${res.data.data.id} successfully removed from your Interests list`, {
            position: "bottom-left",
          });
          setInterest(false)
        }
  
      })
      .catch((err)=>{
        if(err.response){
          console.log(err?.response?.data)
          toast.error(`oops!! ${err?.response?.data}  `, {
            position: "bottom-left",
          });
        }else{
          toast.error(`oops!! Err in volunteering, Please Try again  `, {
            position: "bottom-left",
          });
        }
      })
    }
  }

    //      handleVoluntee/<int:userId>/<int:eventId>
// handleInterests/<int:userId>/<int:eventId></int:eventId>
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

  useEffect(()=>{
    if (authed_user && authed_user.id && eventInfo?.volunteers?.includes(authed_user.id)){
      setVolunteer(true)
    }
    if (authed_user && authed_user.id && eventInfo?.interests?.includes(authed_user.id)){
      setInterest(true)
    }
  },[authed_user])



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

      <section id="showeventCard" className="my-5 py-5">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="card shadow pt-3">
              <div className="overflow">
                <img src={`${eventInfo.img}`} className="card-img-top" />
              </div>

              <div className="card-body text-dark">
                <div className="mb-4 row align-items-center">
                  <div className="col-md-8">
                    <span className="small badge rounded-pill bg-success center">Recycling Event</span>
                    <h2 className="card-title h1 fw-bolder mt-2 mb-0">{eventInfo.title} </h2>
                    <div className="d-block">
                      <span className="me-4"><BsFillAlarmFill/> From {eventInfo?.start_date?.split("T")[0]} to {eventInfo?.end_date?.split("T")[0]}</span>
                      <span><BsFillCursorFill className="me-1"/>{eventInfo.location}</span>
                    </div>
                    <span className="d-block"></span>
                  </div>
                  <div className="col-md-4 text-center text-md-end">
                    {volunteer ?
                      <button onClick={(e)=>{handleVolunteer('delete')}} className="btn btn-outline-danger py-3 px-4 w-100 fs-5"><TiDeleteOutline className="float-start fs-4"/>Remove Event</button>
                       : 
                      <button onClick={(e)=>{handleVolunteer('add')}} className="btn btn-primary py-3 px-4 w-100 fs-5"><MdOutlineVolunteerActivism className="float-start fs-4"/>Volunteer Now</button>
                    }
                  </div>
                </div>
                <ul className="d-flex p-0 bg-light py-3">
                  <li className="me-5"><SiTarget className="me-2"/> Target number of volunteers: {eventInfo.target}</li>
                  <li className="me-5"><MdVolunteerActivism className="me-2"/> Current volunteers: {eventInfo?.volunteers?.length}</li>
                  <li className="me-5"><BsFillAlarmFill className="me-2"/>Interests: {eventInfo?.interests?.length}</li>
                </ul>
                <div>
                  <h3> Event Details:</h3>
                </div>
                <p className="card-text text-secondary">{eventInfo.details} </p>
              </div>
              <hr />
              <div className="text-center mb-4">
                {
                  volunteer?
                  <button onClick={(e)=>{handleVolunteer('delete')}} className="btn btn-outline-danger py-3 px-4 fs-5 mx-2"><TiDeleteOutline className="float-start fs-4 me-1"/>Remove Event</button>
                  :
                  <button onClick={(e)=>{handleVolunteer('add')}} className="btn btn-success py-3 px-4 fs-5 mx-2"><MdOutlineVolunteerActivism className="float-start fs-4 me-1"/>Volunteer Now</button>
                }
                {
                  interest?
                  <button onClick={(e)=>{handleInterest('delete')}} className="btn btn-outline-warning py-3 px-4 fs-5 mx-2"><BsFillBookmarkStarFill className="float-start fs-4 me-1"/>Remove Interest</button>
                  :
                  <button onClick={(e)=>{handleInterest('add')}} className="btn btn-primary py-3 px-4 fs-5 mx-2"><BsFillBookmarkStarFill className="float-start fs-4 me-1"/>Interest Event</button>
                }

                </div>
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

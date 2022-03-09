import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "../../page_title";
import { BsListStars, BsFillBookmarkStarFill, BsFillAlarmFill, BsFillCursorFill } from "react-icons/bs"
import { MdVolunteerActivism, MdOutlineVolunteerActivism } from "react-icons/md"
import { SiTarget } from "react-icons/si"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti"
import Comment from "./Comment";
import Spinner from "../../../spinner/spinner";

const Show = (props) => {
  // console.log(params.id, "params"); // params link
  const params = useParams();
  const authed_user = useSelector((state) => state.authReducer.user)
  const history = useHistory()

  const [eventInfo, setInfo] = useState({});
  const [loader1, setLoader1] = useState(true)
  const [loader2, setLoader2 ] = useState(true)
  const [comments, setcomments] = useState([])
  const [volunteer, setVolunteer] = useState(false)
  const [interest, setInterest] = useState(false)
  const [userComment, setUserComment] = useState("")

  const handleVolunteer = (type) => {
    if (authed_user === null) {
      alert("you have to login first to volunteer")
    } else if (authed_user && authed_user.id) {
      axios.get(`http://127.0.0.1:8000/events_api/handleVoluntee/${authed_user.id}/${eventInfo.id}`)
        .then((res) => {
          setInfo({ ...eventInfo, volunteers: res.data.data.volunteers });
          if (type === 'add') {
            toast.success(`You have volunteered successfully in event No.${res.data.data.id} `, {
              position: "bottom-left",
            });
            setVolunteer(true)
          } else {
            toast.success(`Event No.${res.data.data.id} successfully removed from your events list`, {
              position: "bottom-left",
            });
            setVolunteer(false)
          }

        })
        .catch((err) => {
          if (err.response) {
            console.log(err?.response?.data)
            toast.error(`oops!! ${err?.response?.data}  `, {
              position: "bottom-left",
            });
          } else {
            toast.error(`oops!! Err in volunteering, Please Try again  `, {
              position: "bottom-left",
            });
          }
        })
    }
  }

  const handleInterest = (type) => {
    if (authed_user === null) {
      alert("you have to login first to volunteer")
    } else if (authed_user && authed_user.id) {
      axios.get(`http://127.0.0.1:8000/events_api/handleInterests/${authed_user.id}/${eventInfo.id}`)
        .then((res) => {
          setInfo({ ...eventInfo, interests: res.data.data.interests });
          if (type === 'add') {
            toast.success(`Event No.${res.data.data.id} has been added successfully to your Interests List`, {
              position: "bottom-left",
            });
            setInterest(true)
          } else {
            toast.success(`Event No.${res.data.data.id} successfully removed from your Interests list`, {
              position: "bottom-left",
            });
            setInterest(false)
          }

        })
        .catch((err) => {
          if (err.response) {
            console.log(err?.response?.data)
            toast.error(`oops!! ${err?.response?.data}  `, {
              position: "bottom-left",
            });
          } else {
            toast.error(`oops!! Err in volunteering, Please Try again  `, {
              position: "bottom-left",
            });
          }
        })
    }
  }

  //      handleVoluntee/<int:userId>/<int:eventId>
  // handleInterests/<int:userId>/<int:eventId></int:eventId>
  const getEvent = () => {
    axios.get(`http://127.0.0.1:8000/events_api/Events/${params.id}/`)
      .then((res) => {
        console.log(res.data, "here");
        setInfo(res.data);
        setLoader1(false)
      })
      .catch((err) => {
        console.log(err);
        history.push('/error_404')
      });
  }
  const getComments = () => {
    axios.get(`http://127.0.0.1:8000/events_api/getEventComments/${params.id}`)
      .then((res) => {
        console.log(res.data, "comments");
        setcomments(res.data.comments.reverse());
        setLoader2(false)
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Sorry, we can't get comments now, Please try again later`, {
          position: "bottom-left",
        })
      });
  }

  const handlCommentSubmet = (e) => {
    e.preventDefault();
    if(authed_user === null){
      alert('Sorry , you need to login to place your comment')
      toast.error(`Sorry , you need to login to place your comment`, {
        position: "bottom-left",
      })
    }else if(userComment.trim === ''){
      toast.error(`Write your comment please`, {
        position: "bottom-left",
      })
    }else{
      const commentData = {
        comment:userComment,
        user:authed_user.id,
        event:params.id
      }
      axios
      .post(`http://127.0.0.1:8000/events_api/comments/`, commentData)
      .then((res)=>{
        const responseComment = res.data
        responseComment['avatar']=res.data.avatar.split('8000')[1]
        setcomments([...comments, res.data])
        toast.success(`Your comment was sent successfully`, {
          position: "bottom-left",
        })
      })
      .catch((err)=>{
        console.log(err)
        toast.error(`Sorry, problem wihle sending your comment, Please try again`, {
          position: "bottom-left",
        })
      })
    }
  }

  useEffect(() => {
    getEvent();
    getComments();
  }, []);

  useEffect(() => {
    if (authed_user && authed_user.id && eventInfo?.volunteers?.includes(authed_user.id)) {
      setVolunteer(true)
    }
    if (authed_user && authed_user.id && eventInfo?.interests?.includes(authed_user.id)) {
      setInterest(true)
    }
  }, [eventInfo])

  if(loader1 || loader2){
    return <Spinner/>
  }

  return (
    <>
      <PageTitle title="Event" description="Home/Event/Show Event" />

      <section id="showeventCard" className="my-5 py-5 container">
        <div className="row" >
          <div className="col-md-8">
              <h2>Event:</h2>
              <div className="card shadow">
                <div className="overflow">
                  <img src={`${eventInfo.img}`} className="card-img-top" />
                </div>

                <div className="card-body text-dark">
                  <div className="mb-4 row align-items-center">
                    <div className="col-md-8">
                      <span className="small badge rounded-pill bg-success center">Recycling Event</span>
                      <h2 className="card-title h1 fw-bolder mt-2 mb-0">{eventInfo.title} </h2>
                      <div className="d-block">
                        <span className="me-4"><BsFillAlarmFill /> From {eventInfo?.start_date?.split("T")[0]} to {eventInfo?.end_date?.split("T")[0]}</span>
                        <span><BsFillCursorFill className="me-1" />{eventInfo.location}</span>
                      </div>
                      <span className="d-block"></span>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                      {volunteer ?
                        <button onClick={(e) => { handleVolunteer('delete') }} className="btn btn-outline-danger py-3 px-4 w-100 fs-5"><TiDeleteOutline className="float-start fs-4" />Remove Event</button>
                        :
                        <button onClick={(e) => { handleVolunteer('add') }} className="btn btn-primary py-3 px-4 w-100 fs-5"><MdOutlineVolunteerActivism className="float-start fs-4" />Volunteer Now</button>
                      }
                    </div>
                  </div>
                  <ul className="d-flex p-0 bg-light py-3">
                    <li className="me-5"><SiTarget className="me-2" /> Target number of volunteers: {eventInfo.target}</li>
                    <li className="me-5"><MdVolunteerActivism className="me-2" /> Current volunteers: {eventInfo?.volunteers?.length}</li>
                    <li className="me-5"><BsFillAlarmFill className="me-2" />Interests: {eventInfo?.interests?.length}</li>
                  </ul>
                  <div>
                    <h3> Event Details:</h3>
                  </div>
                  <p className="card-text text-secondary">{eventInfo.details} </p>
                </div>
                <hr />
                <div className="text-center mb-4">
                  {
                    volunteer ?
                      <button onClick={(e) => { handleVolunteer('delete') }} className="btn btn-outline-danger py-3 px-4 fs-5 mx-2"><TiDeleteOutline className="float-start fs-4 me-1" />Remove Event</button>
                      :
                      <button onClick={(e) => { handleVolunteer('add') }} className="btn btn-success py-3 px-4 fs-5 mx-2"><MdOutlineVolunteerActivism className="float-start fs-4 me-1" />Volunteer Now</button>
                  }
                  {
                    interest ?
                      <button onClick={(e) => { handleInterest('delete') }} className="btn btn-outline-warning py-3 px-4 fs-5 mx-2"><BsFillBookmarkStarFill className="float-start fs-4 me-1" />Remove Interest</button>
                      :
                      <button onClick={(e) => { handleInterest('add') }} className="btn btn-primary py-3 px-4 fs-5 mx-2"><BsFillBookmarkStarFill className="float-start fs-4 me-1" />Interest Event</button>
                  }

                </div>
              </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between" >
            <div className="">
              <h2>Comments:</h2>
              <div className="overflow-auto" style={{maxHeight:'100vh'}}>
                {comments && comments.map((c)=><Comment key={c.id} comment={c}/>)}
              </div>    
            </div>
            <div className="mt-1 mb-0 pt-3 border-top ">
              <h4>Leave your comment:</h4>
              <form onSubmit={e => handlCommentSubmet(e)}>
                <div className="form-floating">
                  <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{height: "100px"}}
                    onChange={(e)=>setUserComment(e.target.value)}
                    ></textarea>
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <input className="form-control btn btn-success" type="submit" value="Comment"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Show;

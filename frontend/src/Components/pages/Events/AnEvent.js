import {BsListStars, BsFillAlarmFill, BsFillCursorFill } from "react-icons/bs"
import { Link } from "react-router-dom"

// BsFillBookmarkStarFill
const AnEvent = (props) => {
    const{
        img,
        id,
        title,
        details,
        location,
        creation_date,
        start_date,
        end_date
     }=props.event


    return (
        <div className="col ">
            <div className="card h-100 ">
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body position-relative">
                        <span className="text-white bg-danger py-2 px-4 position-absolute bottom-100 start-0" >{id}</span>
                        <h4 className="card-title mb-1" style={{minHeight: 60}}>{title}</h4>
                        <div className="text-secondary small mb-2">
                        <span className="me-4"><BsFillAlarmFill className="me-1"/> From {start_date.split("T")[0]} to {end_date.split("T")[0]}</span>
                        <span><BsFillCursorFill className="me-1"/>{location}</span>

                        </div>
                        <h5 className="text-danger"><BsListStars className="small me-2"/>Event Details:</h5>
                        <p className="card-text overflow-hidden" style={{maxHeight: 50}}>{details}...</p>
                    </div>
                    <div className="text-center mb-4">
                        <Link className="btn btn-success" to={`show/${id}`}>More Details</Link>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Created: {creation_date.split("T")[0] }</small>
                    </div>
            </div>
        </div>
    )
}

export default AnEvent;
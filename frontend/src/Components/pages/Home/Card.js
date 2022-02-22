import Popup from "./Popup"
import { useState } from "react"

function Card(props) {
    const {title, text, imgSrc,modelId} = props
    // const [buttonPopup,setButtonPopup]=useState(false);
    
    return (
        <div className="col">
            <div className="card border text-center pb-1">
                <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                    <img src={imgSrc} className="card-img-top" alt="..." />
                    
                    <h4 className='my-3'>{title}</h4>
                </div>
                <div className="card-body text-white small py-3 ">
                    <p className="card-text">{text}</p>
                    <button type="button" className="btn py-1 rounded-pill border-white fw-bold border-2 text-white " data-bs-toggle="modal" data-bs-target={`#${modelId}`}>Read More</button>
                </div>
            </div>
                

            
        </div>

    )
}

export default Card
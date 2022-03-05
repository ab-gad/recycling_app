import { FaGithub } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";

function TeamCard(props) {

    const {src, name, title, bgColor , facebook , github , linkedin } = props

    return(
        <div className="col">
            <div className="card border shadow-sm text-center pb-1 shadow">
                <div className='buttom-rounded position-relative pt-1' style={{backgroundColor:bgColor}}> 
                    <img src={src} className="card-img-top" alt="..." />
                    <div className='scial-icons buttom-rounded'>
                        <a href= {linkedin} target='_blank' > <TiSocialLinkedin/> </a>   
                        <a href= {github} target='_blank' > <FaGithub/> </a>  
                        <a href= {facebook} target='_blank' > <GrFacebookOption/> </a>  
                    </div>
                </div>
                <div className="card-body small py-3 ">
                    <small className="text-gray oleo">{title}</small>
                    <h6 className='my-1 text-dark'>{name}</h6>
                </div>
            </div>
        </div>
    )

}

export default TeamCard;
function TeamCard(props) {

    const {src, name, title, bgColor} = props

    return(
        <div className="col">
            <div className="card border shadow-sm text-center pb-1">
                <div className='buttom-rounded position-relative pt-1' style={{backgroundColor:bgColor}}> 
                    <img src={src} className="card-img-top" alt="..." />
                    <div className='scial-icons buttom-rounded'>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>   
                        <a href="#"><i className="fab fa-twitter"></i></a>  
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>  
                    </div>
                </div>
                <div className="card-body small py-3 ">
                    <small className="text-gray oleo">{title}</small>
                    <h6 className='my-1'>{name}</h6>
                </div>
            </div>
        </div>
    )

}

export default TeamCard;
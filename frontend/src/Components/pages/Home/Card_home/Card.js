

function Card(props) {
    const {title, text, imgSrc , url} = props
    
    return (
        <div className="col-10 col-md-5 col-xl-3 ">
            <div className="card border text-center pb-1 shadow">
                <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                    <img src={imgSrc} className="card-img-top" alt="photo" />
                    
                    <h4 className='my-3'> {title} </h4>
                </div>
                <div className="card-body text-white small py-3 ">
                    <p className="card-text"> {text} </p>
                    <a href={url} target="_blanck" className="btn shadow-none ">
                        Read More
                    </a>
                </div>
            </div>
                

            
        </div>

    )
}

export default Card;

  
import {useParams} from "react-router-dom";
import {useState, useEffect}  from  "react"
import axios from "axios";
import { Container,Row,Col } from "react-bootstrap";
import './showevent.css';


function Show(props) {
    const params  = useParams()
	console.log(params.id, "params")// params link 
	



	const [userInfo, setInfo] = useState({})


	useEffect(() => {
		axios
		.get(`http://127.0.0.1:8000/events_api/Events/${params.id}`)
		.then((res)=> {
			console.log(res.data, "here")
			setInfo(res.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}, [])



    return (

       

  <Container>
              <p className="text" ><strong>Title: </strong>{userInfo.title}  </p>
              <div className="col-lg-8">
        <img  variant="top" className="page_title " src={`${userInfo.img}` }/>
        </div>
        <hr/>
        <p className="badge rounded-pill bg-success center"> <strong>location: </strong> {userInfo.location}  </p>
        <p className="text-center"><strong>Start date: </strong> {userInfo.start_date}  </p>
        <p className="text-center"><strong>end date: </strong> {userInfo.end_date}  </p>
        <hr/>

        <p><strong>details: </strong> {userInfo.details}  </p>
  

        
      
  </Container> 


    );
  }
  
  export default Show;


  
import {useParams} from "react-router-dom";
import {useState, useEffect}  from  "react"
import axios from "axios";
import { Container,Row,Col } from "react-bootstrap";


function Show(props) {
    const params  = useParams()
	console.log(params.id, "params")// params link 
	



	const [userInfo, setInfo] = useState({})


	useEffect(() => {
		axios
		.get(`http://127.0.0.1:8000/events_api/${params.id}`)
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
      <Row>
        <Col>
        <img variant="top" className="im" src={`${userInfo.img}`} />

        </Col>
        <Col>
        <p><strong>Title: </strong>{userInfo.title}  </p>
        <p><strong>details: </strong> {userInfo.details}  </p>
        <p><strong>Start date: </strong> {userInfo.start_date}  </p>
        <p><strong>end date: </strong> {userInfo.end_date}  </p>
        <p><strong>location: </strong> {userInfo.location}  </p>

        </Col>
      </Row>
  </Container> 


    );
  }
  
  export default Show;

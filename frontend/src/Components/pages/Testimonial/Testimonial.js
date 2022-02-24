import React from 'react'
import PageTitle from "../../page_title"
import './Testimonial.css';
import {Link,} from "react-router-dom"

import axios from "axios";
import { useEffect, useState } from "react";
import {  Card ,Button} from 'react-bootstrap';
const Testimonial = () => {

const [users,setUsers]=useState([])
useEffect(()=>{
axios.get('http://127.0.0.1:8000/events_api/Events/')
.then((res)=>{

  console.log(res.data  )
  setUsers(res.data)

})
.catch((err)=>{
  console.log(err)
})


},[])


  return (
  <div >
    <PageTitle title="Event" description="Home/Event"/>
<div className='container'>
<div className='row'>
    {users.map((user)=>
{
return(

<div key={user.id} className="col-lg-4  col-sm-12">
<Card style={{ width: '18rem' }}>
<Link  to={`/Show/${user.id}`} >
<Card.Img variant="top" src={user.img} />
</Link>
  <Card.Body>
    <Card.Title>{user.title}</Card.Title>
    <Card.Text id="content" >
      {user.details}
    </Card.Text>
    <Button variant="primary"> {user.location}</Button>
  </Card.Body>
</Card>
    </div>
   
   

)


}

)}
</div>    
</div>
  </div>
  )
}
export default Testimonial;
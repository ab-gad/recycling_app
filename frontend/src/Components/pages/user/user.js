import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
import axios from "axios"
import {useState, useEffect}  from  "react"
import './user.css'
import { useHistory } from 'react-router-dom';



const User=()=> {
    const [user, setUser] = useState({})
    const initialData={
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        city:'',
        birthdate:'',

    }
    const [userData,updateData]=useState(initialData)
    const handleChange=(e) => {
        updateData({
            // spread operator
            ...userData,
            // trim() => trim/remove whitespace from both sides of a string
            [e.target.name]:e.target.value.trim()
        })
    }
    // const history=useHistory()
    // const id=props.match.params.id

    const updateUser=() => {
        console.log(userData)
        axios.put(`http://localhost:8000/user_api/list/2`,{
            email: userData.email,
            city: userData.city,
            first_name: userData.first_name,
            last_name: userData.last_name,
            phone:userData.phone,
            birthdate:userData.birthdate
        })
        .then((response) => {
            console.log(response.data)
            updateData(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const getUser=() => {
        axios.get(`http://localhost:8000/user_api/list/2`)
        .then((result) => {
            console.log("user",result.data)
            setUser(result.data)

        })    

    }
    const deleteUser=() => {
        axios.delete(`http://localhost:8000/user_api/list/2`)
        .then((result) => {
            console.log("user",result.data)

        })    

    }
    useEffect(()=>{
        getUser()   

    },[])








  return (
<div className="container mt-3">
    <div className="card p-3 ">
        <div className="d-flex flex-row justify-content-center mb-3">
            <div className="image">
                <img src={`${user.avatar}`} className="rounded-circle" style={{maxWidth: 80,maxHeight:80}}/> 
                <span><AiFillCamera /> </span>
            </div>
            <div className="d-flex flex-column ms-3 user-details">
                <h4 className="mb-0">{`${user.first_name}`} {`${user.last_name}`}</h4>
            </div>
        </div>
        <h4 className='text-center '>User Profile</h4>
        <div className="row data_container">
            <div className="col-md-6">
                <div className="inputs"> <label>First name</label>
                    <input name='first_name' className="form-control" type="text" placeholder={`${user.first_name}`}
                     onChange={handleChange}/> 
                 </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Last name</label>
                    <input name='last_name' className="form-control" type="text" placeholder={`${user.last_name}`}
                    onChange={handleChange}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Email</label>
                    <input name='email' className="form-control" type="text" placeholder={`${user.email}`}
                    onChange={handleChange}/> 
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Mobile phone</label>
                    <input name='phone' className="form-control" type="text" placeholder={`${user.phone}`}
                    onChange={handleChange}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>City</label>
                    <input name='city' className="form-control" type="text" placeholder={`${user.city}`}
                    onChange={handleChange}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Birth date</label>
                    <input type="date" name='birthdate' className="form-control" placeholder={`${user.birthdate}`}
                    onChange={handleChange}/>
                </div>
            </div>
        </div>
        <div className="mt-3 gap-2 d-flex justify-content-end">
             <button onClick={e => {deleteUser()} } className="px-3 btn btn-sm btn-outline-primary">Delete</button>
             <button onClick={e => {updateUser()} } className="px-3 btn btn-sm btn-primary">Edit</button> 
        </div>
    </div>
</div>

  );
};

export default User;
import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
import axios from "axios"
import {useState, useEffect}  from  "react"


const User=()=> {

    const getUser=()=>{
        axios.get('http://localhost:8000/user_api/list/1')
        .then((result)=>{
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
                <img src="" className="rounded-circle"/> 
                <AiFillCamera /> 
            </div>
            <div className="d-flex flex-column ms-3 user-details">
                <h4 className="mb-0">user name</h4>
            </div>
        </div>
        <h4 className='text-center'>User Profile</h4>
        <div className="row data_container">
            <div className="col-md-6">
                <div className="inputs"> <label>First name</label>
                    <input name='first_name' className="form-control" type="text" placeholder="First name"/> 
                 </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Last name</label>
                    <input name='last_name' className="form-control" type="text" placeholder="Last name"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Email</label>
                    <input name='email' className="form-control" type="text" placeholder="Email"/> 
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Mobile phone</label>
                    <input name='phone' className="form-control" type="text" placeholder="Phone"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>City</label>
                    <input name='city' className="form-control" type="text" placeholder="City"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="inputs"> <label>Birth date</label>
                    <input name='birthdate' className="form-control" type="text" placeholder="Birth date"/>
                </div>
            </div>
        </div>
        <div className="mt-3 gap-2 d-flex justify-content-end">
             <button className="px-3 btn btn-sm btn-outline-primary">Delete</button>
             <button className="px-3 btn btn-sm btn-primary">Edit</button> 
        </div>
    </div>
</div>

  );
};

export default User;
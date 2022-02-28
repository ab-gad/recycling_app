import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
import axios from "axios"
import {useState, useEffect}  from  "react"
import './user.css'
import { useHistory } from 'react-router-dom';



const User=()=> {
    // const history=useHistory()
    // const id=props.match.params.id
    
    const [userData,updateData]=useState({})
    // const [image,setImage] = useState(null)
    const handleChange=(e) => {
        // if ([e.target.name] == 'avatar'){
        //     setImage({
        //         avatar: e.target.files[0]
        //     })
        //     console.log(e.target.files)
        // }

        // console.log(e.target.value)
        updateData({
            ...userData, // spread operator
            [e.target.name]:e.target.value.trim() // trim()=>trim/remove whitespace from both sides of a string
        })
        
    }

    const updateUser=() => {
        console.log("without avatar",userData)
        axios.put(`http://localhost:8000/user_api/list/8`,{
            email: userData.email,
            city: userData.city,
            first_name: userData.first_name,
            last_name: userData.last_name,
            phone:userData.phone,
            birthdate:userData.birthdate,
            // avatar:image.avatar
        })
        .then((response) => {
            console.log(response.data)
            updateData(response.data)
        })
        
        .catch((err) => {
            console.log(err)
        })
    }
    const [user, setUser] = useState({})
    const getUser=() => {
        axios.get(`http://localhost:8000/user_api/list/8`)
        .then((result) => {
            console.log("user",result.data)
            setUser(result.data)

        })
        .catch((err) => {
            console.log(err)
        })    

    }
    const deleteUser=() => {
        axios.delete(`http://localhost:8000/user_api/list/8`)
        .then((result) => {
            console.log("user",result.data)

        })
        .catch((err) => {
            console.log(err)
        })    

    }
    useEffect(()=>{
        getUser()   

    },[])


    // input validations
    const [mailName , setmailName]= useState("");
    const [mailError , setmailError] = useState("")
    const mailVaildation = (e) => {
        if(e.target.name === "email") {
            setmailName(e.target.value);
            if(e.target.value.match("[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,4}")){
                setmailError (" ");
                // console.log(mailName)
            }else {
                setmailError ("Please enter a vaild email format");
            }
            
        }
    }

    const [fName , setFName]= useState("");
    const [fNameError , setFNameError] = useState("")
    const fNameVaildation = (e) => {
        if (e.target.name === "first_name") {
            setFName(e.target.value);
            if(e.target.value.match("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")&&!(e.target.value.includes(" "))){
                setFNameError (" ");
            }else {
                setFNameError ("Please enter a vaild username format");
            }
            
          }
    }

    const [lName , setLName]= useState("");
    const [lNameError , setLNameError] = useState("")
    const lNameVaildation = (e) => {
        if (e.target.name === "last_name") {
            setLName(e.target.value);
            if(e.target.value.match("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")&&!(e.target.value.includes(" "))){
                setLNameError (" ");
            }else {
                setLNameError ("Please enter a vaild username format");
            }
            
          }
    }

    const [phone , setPhone]= useState("");
    const [phoneError , setPhoneError] = useState("")
    const phoneVaildation = (e) => {
        if (e.target.name === "phone") {
            setPhone(e.target.value);
            if(e.target.value.match("^01[0125][0-9]{8}$")){
                setPhoneError (" ");
            }else {
                setPhoneError ("Please enter a valid phone format (must be in egyptian format)");
            }
            
          }
    }
    


  return (
<div className="container mt-3">
    <div className="card p-3 ">
        <div className="d-flex flex-row justify-content-center mb-3 name_image_block">
            
            <div className="image">
                <img src={`${user.avatar}`} className="rounded-circle border border-primary border-3" style={{maxWidth: 80,maxHeight:80}}/> 
                <span ><AiFillCamera /> </span>
                
            </div>
            <div className="d-flex flex-column ms-3 user-details">
                <h4 className="mb-0">{`${user.first_name}`} {`${user.last_name}`}</h4>
            </div>
        </div>
        <div className='form_container'>
            <h4 className='text-center '>User Profile</h4>
            <div className="row data_container">
                <div className="col-md-6">
                    <div className="inputs"> <label>First name</label>
                        <input name='first_name' className="form-control" type="text" placeholder={`${user.first_name}`}
                        onChange={(e)=>{handleChange(e);fNameVaildation(e)}}
                       
                        />
                        <small>{fNameError}</small>  
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputs"> <label>Profile picture</label>
                    <input type="file" accept="image/*" name="avatar"  class="form-control form-control-alternative"
                     onChange={(e)=>handleChange(e)}
                    />
                    </div>
                        
                </div>
                <div className="col-md-6">
                    <div className="inputs"> <label>Last name</label>
                        <input name='last_name' className="form-control" type="text" placeholder={`${user.last_name}`}
                        onChange={(e)=>{handleChange(e);lNameVaildation(e)}}
                       
                        />
                        <small>{lNameError}</small> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputs"> <label>Mobile phone</label>
                        <input name='phone' className="form-control" type="text" placeholder={`${user.phone}`}
                        onChange={(e)=>{handleChange(e);phoneVaildation(e)}}
                        />
                        <small>{phoneError}</small> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputs"> <label>Email</label>
                        <input name='email' className="form-control" type="email" placeholder={`${user.email}`}
                        onChange={(e)=>{handleChange(e);mailVaildation(e)}}
                        
                        />
                        <small>{mailError}</small> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputs"> <label>City</label>
                        <input name='city' className="form-control" type="text" placeholder={`${user.city}`}
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="inputs"> <label>Birth date</label>
                        <input type="date" name='birthdate' className="form-control" placeholder={`${user.birthdate}`}
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                
            </div>
            <div className="mt-3 gap-2 d-flex justify-content-end">
                <button onClick={e => {deleteUser()} } className="px-3 btn btn-sm btn-outline-primary">Delete</button>
                <button onClick={e => {updateUser()} } className="px-3 btn btn-sm btn-primary">Edit</button> 
            </div>
        </div>
    </div>
</div>


  );
};

export default User;
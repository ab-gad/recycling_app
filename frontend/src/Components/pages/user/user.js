import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
import axios from "axios"
import {useState, useEffect}  from  "react"
import './user.css'
// import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";





const User=()=> {
// const history=useHistory()
const authed_user = useSelector((state)=> state.authReducer.user)
console.log(authed_user)
    
    
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
            ...userData,
            [e.target.name]:e.target.value.trim()
        })
        
    }

    const updateUser=() => {
        console.log("without avatar",userData)
        axios.put(`http://localhost:8000/user_api/list/${authed_user.id}`,{
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
            setUser(response.data)
            // history.push('/settings')
        })
        
        .catch((err) => {
            console.log(err)
        })
    }
    const [user, setUser] = useState({})
    const getUser=() => {
        axios.get(`http://localhost:8000/user_api/list/${authed_user.id}`)
        .then((result) => {
            console.log("user",result.data)
            setUser(result.data)
            updateData(result.data)
        })
        .catch((err) => {
            console.log(err)
        })    

    }
    const deleteUser=() => {
        axios.delete(`http://localhost:8000/user_api/list/${authed_user.id}`)
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
            if(e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){

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

    



        <div className='col-xl-5 m-auto' id='settings_container'>
                <img src={`${user.avatar}`} className="rounded-circle border border-success border-4"/> 
            <h2 className="mb-5 text-center">{`${user.first_name}`} {`${user.last_name}`}</h2>
            
            <form >
                <div className='form-group form_inputs'>
                <input name='first_name' className="form-control" type="text" placeholder={`${user.first_name}`}
                        onChange={(e)=>{handleChange(e);fNameVaildation(e)}}/>
                         <small>{fNameError}</small> 
                </div>
                <div className='form-group'>
                <input name='last_name' className="form-control" type="text" placeholder={`${user.last_name}`}
                        onChange={(e)=>{handleChange(e);lNameVaildation(e)}}/>
                         <small>{lNameError}</small> 

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
import React from 'react'
import axios from "axios"
import {useState, useEffect}  from  "react"
import './settings.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { load_user, logout } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import Spinner from '../../../spinner/spinner'  
import PageTitle from '../../page_title';

const Settings=()=> {
    const history=useHistory()
    const authed_user = useSelector((state)=> state.authReducer.user)
    const dispatch = useDispatch()
    console.log(authed_user)
    
    
const [loading,setLoading]=useState(true) 
const [userData,updateData]=useState({})
const [avatar,setAvatar] = useState(null);
    const handleChange=(e) => {
        if (e.target.name === 'avatar'){
                setAvatar({
                    avatar: e.target.files[0]
                })
                console.log("FILES",e.target.files)
        }else{
                updateData({
                    ...userData,
                    [e.target.name]:e.target.value.trim()
                })
        }
    }
            
    const updateUser=() => {
        
        let formData = new FormData();
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        console.log("without avatar",userData)
        avatar && formData.append("avatar",avatar?.avatar)
        userData.email&& formData.append('email', userData?.email)
        userData.first_name && formData.append('first_name', userData?.first_name)
        userData.last_name && formData.append('last_name', userData.last_name)
        userData.phone && formData.append('phone', userData?.phone)
        userData.birthdate && formData.append('birthdate', userData?.birthdate)
        userData.city && formData.append('city', userData?.city)
        console.log(formData, "FORM DATA")
        axios.put(`http://localhost:8000/user_api/list/${authed_user.id}`,formData, config)
        .then((response) => {
            console.log("UPDATE RES" ,response.data)
            setUser(response.data)
            dispatch(load_user())
        })
        
        .catch((err) => {
            console.log(err)
            toast.error("Error in editing!,try again!",{position:"bottom-left"})

        })
    }
    
    const [user, setUser] = useState({})
    const getUser=() => {
        if (authed_user !== null){
            axios.get(`http://localhost:8000/user_api/list/${authed_user.id}`)
            .then((result) => {
                console.log("user response",result.data)
                setUser(result.data)
                updateData(result.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })    

        }

    }
    const deleteUser=(e) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/user_api/list/${authed_user.id}`)
        .then((result) => {
            console.log("delete",result.data)
            dispatch(logout())
            toast.success("Delete done successfully",{position:"bottom-left"})
            history.push('/auth/login')
        
        })
        .catch((err) => {
            console.log("error in deleting",err)
            toast.error("Error in deleting!,try again!",{position:"bottom-left"})

        })    

    }
    useEffect(()=>{
        if (localStorage.getItem('access')){
            if (authed_user !== null){
                getUser()
            }
        }else{
            history.push('error_404')
        }   

    },[authed_user])


    // input validations
    const [mailName , setmailName]= useState("");
    const [mailError , setmailError] = useState(false)
    const mailVaildation = (e) => {
        if(e.target.name === "email") {
            setmailName(e.target.value);
            if(e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
                setmailError (false);
            }else {
                setmailError ("Please enter a vaild email format");
            }
            
        }
    }

    const [fName , setFName]= useState("");
    const [fNameError , setFNameError] = useState(false)
    const fNameVaildation = (e) => {
        if (e.target.name === "first_name") {
            setFName(e.target.value);
            if(e.target.value.match("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$")&&!(e.target.value.includes(" "))){
                setFNameError (false);
            }else {
                setFNameError ("Please enter a vaild username format");
            }
            
          }
    }

    const [lName , setLName]= useState("");
    const [lNameError , setLNameError] = useState(false)
    const lNameVaildation = (e) => {
        if (e.target.name === "last_name") {
            setLName(e.target.value);
            if(e.target.value.match("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$")&&!(e.target.value.includes(" "))){
                setLNameError (false);
            }else {
                setLNameError ("Please enter a vaild username format");
            }
            
          }
    }

    const [phone , setPhone]= useState("");
    const [phoneError , setPhoneError] = useState(false)
    const phoneVaildation = (e) => {
        if (e.target.name === "phone") {
            setPhone(e.target.value);
            if(e.target.value.match("^01[0125][0-9]{8}$")){
                setPhoneError (false);
            }else {
                setPhoneError ("Please enter a valid phone format");
            }
            
          }
    }

    const [city , setCity]= useState("");
    const [cityError , setCityError] = useState(false)
    const cityVaildation = (e) => {
        if (e.target.name === "city") {
            setCity(e.target.value);
            if(e.target.value.match("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$")&&!(e.target.value.includes(" "))){
                setCityError (false);
            }else {
                setCityError ("Please enter a vaild city format");
            }
            
          }
    }


    const updateValidation =(e) =>{
        e.preventDefault()
        if (cityError || phoneError || mailError || lNameError || fNameError ){
            toast.error("Error in update!,try again!",{position:"bottom-left"})
        }else{
            updateUser()
            toast.success("Edit done successfully",{position:"bottom-left"})

        }

    }
    
    if (loading){
        return <Spinner/>
    }

  return (
    <>
    <PageTitle title="My Settings" description='Profile/settings'/>
    <form id='settings_container' className='my-5'>  
    <div className='d-flex justify-content-between flex-column flex-md-row' >
      <div className="d-flex flex-column align-items-center left_container">
        <img src={`${user.avatar}`} className="rounded-circle border border-muted border-2 setting_img " width="200" height="200" /> 
   
        <h3 className="mt-3 mb-0 text-center">  {`${authed_user && user.first_name}`} {`${authed_user && user.last_name}`} </h3> 
        <span className="small text-success" >{user.birthdate}</span>
        
        <div className='mx-3'>
            <h6 className="mt-3 mb-0">Change image</h6> 
            <input type="file" accept="image/*" name="avatar" className="form-control form-control-alternative shadow-none" onChange={(e)=>handleChange(e)}/>
            <h6 className="mt-3 mb-0">Email</h6> 
            <input name='email' className="form-control shadow-none" type="email"   value={`${user.email}`} onChange={(e)=>{handleChange(e);mailVaildation(e)}} readOnly  />       
            <small> {mailError} </small>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-2 mt-3 mt-md-0 mx-3 right_container justify-content-center align-items-center">
  
          <div className='form-group position-relative'>
            <input name='first_name' className="form-control" type="text" placeholder={`${user.first_name}`}  onChange={(e)=>{handleChange(e);fNameVaildation(e)}} />
            <label className="floatingLabel"> First name </label>
            <small> {fNameError} </small> 
          </div>
  
          <div className='form-group position-relative'>
            <input name='last_name' className="form-control" type="text" placeholder={`${user.last_name}`} onChange={(e)=>{handleChange(e);lNameVaildation(e)}}  />
            <label className="floatingLabel"> Last name </label>
            <small> {lNameError} </small>
          </div>
  
          <div className='form-group position-relative'>
            {user.city === "" ?
            (<input name='city' className="form-control" type="text" placeholder={"Enter your city"} onChange={(e)=>{handleChange(e);cityVaildation(e)}} />)
            :
            (<input name='city' className="form-control" type="text" placeholder={`${user.city}`} onChange={(e)=>{handleChange(e);cityVaildation(e)}} />)}
            <label className="floatingLabel"> City </label>
            <small> {cityError} </small> 
          </div>
  
          <div className='form-group position-relative'>
            {user.phone === null ?
            (<input name='phone' className="form-control" type="text" placeholder={"Enter your phone"} onChange={(e)=>{handleChange(e);phoneVaildation(e)}} />)
            :
            (<input name='phone' className="form-control" type="text" placeholder={`${user.phone}`} onChange={(e)=>{handleChange(e);phoneVaildation(e)}} />)}
            <label className="floatingLabel"> Mobile phone </label>
            <small> {phoneError} </small>
          </div>
                
          <div className='form-group position-relative'>
            <input type="date" name='birthdate' className="form-control" onChange={(e)=>handleChange(e)}  />   
            <label className="floatingLabel"> Birthdate </label>
          </div>
      </div>
    </div>
    <div className="d-flex justify-content-evenly mt-5 m-auto button_container gap-0 gap-md-5 w-50 flex-column flex-md-row">
      <button className="btn my-2 text-light shadow-none" id="update_button" onClick={e=> {updateValidation(e)} }> Edit </button>
      <button className="btn my-2 text-light shadow-none" id="delete_button"  onClick={e=> {e.preventDefault(); if (window.confirm('Are you sure you wish to delete your account?')) deleteUser(e)} }> Delete </button>
    </div>
    </form>
     </>

    
  );
};

export default Settings;

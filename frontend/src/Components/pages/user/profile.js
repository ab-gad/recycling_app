import React from 'react'
import axios from "axios"
import {useState, useEffect}  from  "react"
import './profile.css'
// import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";





const Profile=()=> {
    // const history=useHistory()
const authed_user = useSelector((state)=> state.authReducer.user)
console.log(authed_user)
    
    
    const [orders,setOrders]=useState({})
    
    
    const getOrders=() => {
        axios.get(`http://localhost:8000/user_api/profile/${authed_user.id}`)
        .then((result) => {
            console.log("orders",result.data)
            setOrders(result.data)
        })
        .catch((err) => {
            console.log(err)
        })    

    }
    
    useEffect(()=>{
        getOrders()   

    },[])


    
    


  return (
      <>
        {/* <h1 className="text-center"> Orders </h1>
                    
            <div className="row justify-content-center">
                    
                {orders.map((order) => {
                    return (  
                        <div className="card text-center col-md-3 col-sm-5 ">
                            <div className="card "style={{width: "18rem"}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}className="card-img-top" alt=""/>
                                <div className="card-body">
                                <Link  key={movie.id} to={`/showmovie/${movie.id}`}> 
                                <h5 className="card-title">{movie.original_title}</h5>
                                </Link>
                                </div>
                            </div>
                            <button onClick={()=>fav.indexOf(movie.id)==-1 && dispatch(addFav(movie.id))} className="btn btn-primary">Add to favorites</button>

                        </div>
                        
                            
                            )
                        })}
                                
            </div>   */}
      </>


  );
};

export default Profile;
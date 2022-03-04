import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./profile.css";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { GiCoinsPile } from "react-icons/gi";

const Profile = () => {
  const history=useHistory()
  const authed_user = useSelector((state) => state.authReducer.user);
  console.log(authed_user);
//   if (authed_user === null){
//     history.push('/login')
//   }
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
      console.log(authed_user.id)
    axios
      .get(`http://localhost:8000/user_api/profile/${authed_user.id}`)
      .then((result) => {
        console.log("orders",result.data.orders);
        setOrders(result.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <section id="profile_container">  
        <h1 className="text-center"> {`Welcome ${authed_user.first_name} ${authed_user.last_name}`} </h1>
        <div className="row justify-content-center " id="profile_container">
        {orders.map((order) => {
            return (
			
            <div className="card mt-2 me-2" >
                <div className="title">{`${order.first_name} ${order.last_name}'s order`}</div>
                <div className="info">
                    <div className="row">
                        <div className="col-7"> <span id="heading">Date</span><br/> <span id="details">{order.order_date}</span> </div>
                        <div className="col-5 pull-right"> <span id="heading">Order No.</span><br/> <span id="details">{order.id}</span> </div>
                    </div>
                </div>
                <div className="pricing">
                    <div className="row">
                        <div className="col-9"> <span id="name">Paper Qty</span> </div>
                        <div className="col-3"> <span id="price">£{order.paper_q}</span> </div>
                    </div>
                    <div className="row">
                        <div className="col-9"> <span id="name">Plastic Qty</span> </div>
                        <div className="col-3"> <span id="price">£{order.plastic_q}</span> </div>
                    </div>
                    <div className="row">
                        <div className="col-9"> <span id="name">Metal Qty</span> </div>
                        <div className="col-3"> <span id="price">£{order.metal_q}</span> </div>
                    </div>
                </div>
                <div className="total">
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3"><big>£{order.total_price}</big></div>
                    </div>
                </div>
                <div className="tracking">
                    <div className="title">Tracking Order</div>
                </div>
                <div className="progress-track">
                    <ul id="progressbar">
                        <li className="step0 active " id="step1">Ordered</li>
                        <li className="step0 active text-center" id="step2">Shipped</li>
                        <li className="step0 active text-right" id="step3">On the way</li>
                        <li className="step0 text-right" id="step4">Delivered</li>
                    </ul>
                </div>
                <Link to="/service/cart/:name/:order_id" className="btn btn-danger w-50 m-auto">order details</Link>

                
            </div>
                
                )
                
            })}
            </div>
            
        


      
      
    </section>  
      
      
      
      
      
      
      
      

  
  );
};

export default Profile;

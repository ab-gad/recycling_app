import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./sell.css";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { setUserSellOrders } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import Spinner from '../../../../spinner/spinner'  
import { useHistory } from 'react-router-dom';


const Sell = () => {
  const authed_user = useSelector((state) => state.authReducer.user);
  console.log('authed user',authed_user);
  const history = useHistory()
  const [loading,setLoading]=useState(true) 
  const [soldOrders, setSoldOrders] = useState([]);
  const dispatch = useDispatch();
  const getSoldOrders = () => {
    if (authed_user !== null) {
      axios
        .get(`http://localhost:8000/user_api/orders/${authed_user.id}`)
        .then((result) => {
          console.log("sell orders", result.data.orders);
          setSoldOrders(result.data.orders);
          dispatch(setUserSellOrders(result.data.orders));
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          
        });

    }

  };
  useEffect(() => {
    if (localStorage.getItem('access')){
      if (authed_user !== null){
        getSoldOrders()
      }
  }else{
      history.push('error_404')
  }   

    
  }, [authed_user]);

  if (loading){
    return <Spinner/>
}

  return (
    <section id="sell_container">
      {soldOrders.length === 0 ? (
      <div className="text-center" id="empty_sell">
        <img src={require('../img/orders2.png')} alt="Empty page img" />
        <h3 className="text-capitalize">your Page is Empty </h3>
        <Link to="/service">
          <span className="btn sellsorders">Sell Orders</span>
        </Link>

      </div>
    ) : (
      <>
        <div className="row justify-content-center ">
        {soldOrders.map((order) => {
          return (
            <div className="card mt-2 me-2">
              <div className="title">{`${authed_user.first_name} ${authed_user.last_name}'s order`}</div>
              <div className="info">
                <div className="row">
                  <div className="col-7">
                    
                    <span id="heading">Date</span>
                    <br /> <span id="date">{order.order_date}</span>
                  </div>
                  <div className="col-5 pull-right">
                    
                    <span id="heading">Order No.</span>
                    <br /> <span id="details">{order.id}</span>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="row">
                  <div className="col-9">
                    
                    <span id="name">Paper Qty</span>
                  </div>
                  <div className="col-3">
                    
                    <span id="price">£{order.paper_q}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9"> 
                    <span id="name">Plastic Qty</span>
                  </div>
                  <div className="col-3">
                    <span id="price">£{order.plastic_q}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    <span id="name">Metal Qty</span>
                  </div>
                  <div className="col-3">
                    <span id="price">£{order.metal_q}</span>{" "}
                  </div>
                </div>
              </div>
              <div className="total">
                <div className="row">
                  <div className="col-9"></div>
                  <div className="col-3">
                    <big>£{order.total_price}</big>
                  </div>
                </div>
              </div>
              <div className="tracking">
                <div className="title">Tracking Order</div>
              </div>
              <div className="progress-track">
                <ul id="progressbar">
                    <li className="step0 active " id="step1">Pending</li>
                    {order.status !== "P" ?(<li className="step0 active " id="step2">Approved</li>):
                    (<li className="step0 " id="step2">Approved</li>)}

                    {order.status === "S" || order.status === "D" ?(<li className="step0 active " id="step3">Shipping</li>):
                    (<li className="step0 " id="step3">Shipping</li>)}

                    {order.status === "D" ?(<li className="step0 active " id="step4">Deliverd</li>):
                    (<li className="step0 " id="step4">Deliverd</li>)}
                      
                </ul>
              </div>
              {order.type === "H" && (
                <Link to={`/service/cart/home/${order.id}`} className="btn btn-danger w-50 m-auto">More Details</Link>
              )}
              {order.type === "S" && (
                <Link to={`/service/cart/shop/${order.id}`} className="btn btn-danger w-50 m-auto">More Details</Link>
              )}
              {order.type === "W" && (
                <Link to={`/service/cart/worker/${order.id}`} className="btn btn-danger w-50 m-auto">
                  More Details
                </Link>
              )}
            </div>
          );
        })}
        </div>
        
      </>
    )}


    </section>
  );
};

export default Sell;

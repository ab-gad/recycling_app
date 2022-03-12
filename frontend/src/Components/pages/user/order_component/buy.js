import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./buy.css";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Spinner from '../../../../spinner/spinner'  
import { useHistory } from 'react-router-dom';


const Buy = () => {
  const authed_user = useSelector((state) => state.authReducer.user);
  console.log(authed_user);
  const history = useHistory()
  const [loading,setLoading]=useState(true) 
  const [boughtOrders, setBoughtOrders] = useState([]);
  const getBoughtOrders = () => {
    if (authed_user !== null) {
      axios
        .get(`http://localhost:8000/order_product_api/OrderProductList`)
        .then((result) => {
          console.log("bought orders", result.data);
          setBoughtOrders(result.data);
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
        getBoughtOrders()
      }
    }else{
      history.push('error_404')
      } 
    
  }, [authed_user]);

  if (loading){
    return <Spinner/>
}


  return (
    <section id="buy_container">  
        <div className="row justify-content-center ">
        {boughtOrders.map((order) => {
          return (
            <div className="card mt-2 me-2">
              <div className="title">{`${authed_user.first_name} ${authed_user.last_name}'s order`}</div>
              <div className="info">
                <div className="row">
                  <div className="col-7">
                    
                    <span id="heading">Date</span>
                    <br /> <span id="details">{order.order_date}</span>
                  </div>
                  <div className="col-5 pull-right">
                    
                    <span id="heading">Order No.</span>
                    <br /> <span id="order_no">{order.id}</span>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="row">
                  <div className="col-9">
                    
                    <span id="name">Products</span>
                  </div>
                  <div className="col-3">
                    <span id="products">{order.products.join(", ")}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    
                    <span id="name">Quantities</span>
                  </div>
                  <div className="col-3">
                
                    <span id="qty">{order.quantities.join(", ")}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    <span id="name">Total price</span>
                  </div>
                  <div className="col-3">
                    <span id="price">£{order.total_price}</span>{" "}
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    <span id="name">Address</span>
                  </div>
                  <div className="col-3">
                    <span id="address">{order.address}</span>{" "}
                  </div>
                </div>
              </div>
              <div className="tracking">
                <div className="title">Tracking Order</div>
              </div>
              <div className="progress-track">
                <ul id="progressbar">
                    <li className="step0 active " id="step1">Being delivered</li>
                    <li className={`step0 ${order.received && "active"}`} id="step2">Received</li>

                </ul>
              </div>
                <Link to="/contact" className="btn btn-success w-50 m-auto">
                  If you need help,contact us.
                </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Buy;

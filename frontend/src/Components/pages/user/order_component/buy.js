import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./buy.css";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
// import { setUserSellOrders } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const BoughtOrders = () => {
  const authed_user = useSelector((state) => state.authReducer.user);
  console.log(authed_user);
  const [boughtOrders, setBoughtOrders] = useState([]);
  const dispatch = useDispatch();
  const getOrders = () => {
    if (authed_user !== null) {
      axios
        .get(`http://localhost:8000/order_product_api/OrderProductList`)
        .then((result) => {
          console.log("bought orders", result.data);
          setBoughtOrders(result.data);
        //   dispatch(setUserSellOrders(result.data.orders));
        })
        .catch((err) => {
          console.log(err);
          
        });

    }

  };
  useEffect(() => {
      getOrders();
    
  }, [authed_user]);

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
                    
                    <span id="products">{order.products[0]}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    
                    <span id="name">Quantities</span>
                  </div>
                  <div className="col-3">
                
                    <span id="qty">{order.quantities}</span>
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
              <div className="status">
                <div className="row">
                    <div className="col-9">
                      <span id="name">Status</span>
                    </div>
                    <div className="col-3">
                      <span id="order_status">{order.status}</span>
                    </div>
                </div>
              </div>
              <div className="tracking">
                <div className="title">Tracking Order</div>
              </div>
              <div className="progress-track">
                <ul id="progressbar">
                  <li className="step0 active " id="step1">
                    Pending
                  </li>
                  <li className="step0 active text-center" id="step2">
                    Approved
                  </li>
                  <li className="step0 active text-right" id="step3">
                    Shipping                  </li>
                  <li className="step0 text-right" id="step4">
                    Delivered
                  </li>
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
    </section>
  );
};

export default BoughtOrders;

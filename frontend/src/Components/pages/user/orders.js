import React ,{ useContext } from "react";
import "./order_component/sell.css";
import { useSelector } from "react-redux";
import Buy from "./order_component/buy";
import Sell from "./order_component/sell";

const Orders = () => {
  const authed_user = useSelector((state) => state.authReducer.user);    
    return (
        <section id="orders">
            <h1 className="text-center"> {`welcome ${authed_user && authed_user.first_name} ${authed_user && authed_user.last_name}`} </h1>
                <div className="tabs_container">
                    <ul className="nav nav-pills d-flex justify-content-center mt-4" id="pills-tab" role="tablist " >
                        <li className="nav-item me-2  " role="presentation">
                            <button className="nav-link active fw-bold fs-6 text" id="pills-sold-tab" data-bs-toggle="pill" data-bs-target="#pills-sold" type="button" role="tab" aria-controls="pills-sold" aria-selected="true">Sell orders</button>
                        </li>
                        <li className="nav-item ms-2  " role="presentation">
                            <button className="nav-link fw-bold fs-6 text" id="pills-Bought-tab" data-bs-toggle="pill" data-bs-target="#pills-Bought" type="button" role="tab" aria-controls="pills-Bought" aria-selected="false">Buy orders</button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3 " id="myTabContent">
                        <div className="tab-pane fade show active" id="pills-sold" role="tabpanel" aria-labelledby="pills-sold-tab"><Sell/> </div>
                        <div className="tab-pane fade" id="pills-Bought" role="tabpanel" aria-labelledby="pills-Bought-tab"><Buy/></div>
                    </div>
                </div>

            

        </section>   
    );
};
  
export default Orders;


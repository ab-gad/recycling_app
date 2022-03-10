import React ,{ useContext } from "react";
import "./orders.css";
import { useSelector } from "react-redux";
import BoughtOrders from "./order_component/buy";
import SoldOrders from "./order_component/sell";






const Orders = () => {
    const authed_user = useSelector((state) => state.authReducer.user);
    
  
    return (
        <section id="orders_container">
            <h1 className="text-center"> {`welcome ${authed_user && authed_user.first_name} ${authed_user && authed_user.last_name}`} </h1>
                <div className="tabs_container">
                    <ul className="nav nav-pills d-flex justify-content-center mt-4" id="pills-tab" role="tablist " >
                        <li className="nav-item me-2  " role="presentation">
                            <button className="nav-link active" id="pills-sold-tab" data-bs-toggle="pill" data-bs-target="#pills-sold" type="button" role="tab" aria-controls="pills-sold" aria-selected="true">Sold orders</button>
                        </li>
                        <li className="nav-item ms-2  " role="presentation">
                            <button className="nav-link" id="pills-Bought-tab" data-bs-toggle="pill" data-bs-target="#pills-Bought" type="button" role="tab" aria-controls="pills-Bought" aria-selected="false">Bought orders</button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3 " id="myTabContent">
                        <div className="tab-pane fade show active" id="pills-sold" role="tabpanel" aria-labelledby="pills-sold-tab"><SoldOrders/> </div>
                        <div className="tab-pane fade" id="pills-Bought" role="tabpanel" aria-labelledby="pills-Bought-tab"><BoughtOrders/></div>
                    </div>
                </div>

            

        </section>

        

    
    );
  };
  
  export default Orders;

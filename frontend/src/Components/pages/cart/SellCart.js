import React from "react";
import PageTitle from "../../page_title";
import Footer from '../Footer/Footer';
import OrderForm from "./OrderForm";
import EditOrder from "./Edit_order";
import "./cart.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SellCart () {
    const {name, order_id} = useParams()
    console.log(name, "name from sell cart")
    console.log(order_id, "ORDER_ID from sell cart")
    return(
        <>
            <section id="cart">
                <PageTitle title="My Cart" description="Clean And Earn"/>
                <div className="container py-5 table-responsive">
                    <div className="mb-5" >
                        <h2>Selling Policy</h2>
                        <h5>- To make a successfull selling process please make sure you fullfilled the following conditions: </h5>
                        <ul>
                            <li> Make sure the information you fill in the form is correct </li>
                            <li> After you fill out the form, you can start selling your items with the following rules:
                                <ul className="text-secondary">
                                    <li> - If you are an <strong> apartment</strong>, the quantity specified for you is <strong> 2 kg : 20 kg </strong> as a maximum. </li>
                                    <li> - If you are a <strong> shop</strong>, you can specify the quantity available to you between <strong> 10 kg : 80 kg </strong> as a maximum. </li>
                                    <li> - If you <strong> work in garbage collection</strong>, you can specify the quantity you have from <strong> 80 kg : 200 kg </strong>  as a maximum. </li>
                                </ul>
                            </li>
                            <li> Depending on the amount of material you tries to sell the plan will be choosed </li>
                            <li> Afer choosing quantities you have to click on the "Done" button to intiate an order and start your selling process. </li>
                            <li> Our representative will come to your location within after few days your selling order </li>
                            <li>You can modify the data and quantity that you have as you want until Wednesday,
                                as on that day the data entered is approved A statement is printed with the quantity and price that was approved and
                                given to the representative, who deals with the customer according to what is registered with him in the statement. </li>
                        </ul>
                        
                        
                        
                    </div>
                    <Link to='/service/cart/shop/1' >TESTME</Link>
                    
                    {order_id ? <EditOrder type={name} order_id={order_id} /> : <OrderForm type={name}/>}
                </div>
            </section> 
        <Footer/>
        </> 
    )
}

export default SellCart;
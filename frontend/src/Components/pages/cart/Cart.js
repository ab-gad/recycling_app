import React from "react";
import PageTitle from "../../page_title";
import Footer from '../Footer/Footer';
import Order_form from "./order_form";
import "./cart.css";


function Cart () {

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
                    <h3 className="border-top pt-3 my-3">Start to <span className="text-danger"> Clean and Earn </span> </h3>

                    <Order_form />

                </div>
            </section> 
        <Footer/>
        </> 
    )
}

export default Cart;
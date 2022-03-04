import React , { useContext } from "react";
import PageTitle from "../../page_title";
import Footer from '../Footer/Footer';
import { Langcontext } from "../../../App";
import OrderForm from "./OrderForm";
import EditOrder from "./Edit_order";
import "./cart.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function SellCart () {

    const Arabic = {
        page_title:"أطلب",
        title : "سياسة البيع",
        head: "- لإنجاز عملية بيع ناجحة ، يرجى التأكد من استيفاء الشروط التالية:",
        element_1: "تأكد من صحة المعلومات التي تملأها في النموذج",
        element_2: "بعد ملء النموذج ، يمكنك البدء في بيع العناصر الخاصة بك بالقواعد التالية:",
        element_2_1: "- إذا كنت شقة سكنية في الكمية المحددة لك هي 2 كغ : 20 كغ كحد أقصى.",
        element_2_2: "- إذا كنت متجراً يمكنك تحديد الكمية المتاحة لك بين 10 كيلو جرام : 80 كيلو كحد أقصى.",
        element_2_3: "- إذا كنت تعمل في مجال جمع القمامة ، يمكنك تحديد الكمية التي لديك من 80 كجم: 200 كجم كحد أقصى.",
        element_3: "اعتمادًا على كمية المواد التي تحاول بيعها ، يتم اختيار النموذج الذى يجب ان تملأه",
        element_4: "بعد اختيار الكميات عليك الضغط على زر ' تم' لإرسال الطلب وبدء عملية البيع.",
        element_5: "مندوبنا سوف يأتي إلى موقعك في غضون أيام قليلة من طلب البيع الخاص بك",
        element_6: "يمكنك تعديل البيانات والكمية التي لديك كما تريد حتى يوم الأربعاء ، حيث تتم الموافقة على البيانات المدخلة في ذلك اليوم. يتم طباعة بيان بالكمية والسعر المعتمد ويعطى للمندوب الذي يتعامل مع العميل حسب ما هو مسجل لديه في البيان.",
    }
    const English = {
        page_title:"Order",
        title : "Selling Policy",
        head: "- To make a successfull selling process please make sure you fullfilled the following conditions: ",
        element_1: "Make sure the information you fill in the form is correct",
        element_2: "After you fill out the form, you can start selling your items with the following rules:",
        element_2_1: "- If you are an apartment, the quantity specified for you is 2 kg : 20 kg as a maximum.",
        element_2_2: "- If you are a shop, you can specify the quantity available to you between 10 kg : 80 kg as a maximum.",
        element_2_3: "- If you work in garbage collection, you can specify the quantity you have from 80 kg : 200 kg as a maximum.",
        element_3: "Depending on the amount of material you are trying to sell, the form you must fill is chosen",
        element_4: "After choosing quantities you have to click on the 'Done' button to send order and start your selling process.",
        element_5: "Our representative will come to your location within after few days your selling order",
        element_6: "You can modify the data and quantity that you have as you want until Wednesday, as on that day the data entered is approved A statement is printed with the quantity and price that was approved and given to the representative, who deals with the customer according to what is registered with him in the statement.",
        
    }

    const { langcont, Setlangcontext } = useContext(Langcontext);
    const translation = langcont === "ENGLISH" ? English : Arabic;
     

    const {name, order_id} = useParams()
    console.log(name, "name from sell cart")
    console.log(order_id, "ORDER_ID from sell cart")
    return(
        <>
            <section id="cart">
                <PageTitle title={translation.page_title} description="Clean And Earn"/>
                <div className="container py-5 table-responsive">
                    <div className="mb-5" >
                        <h2> {translation.title} </h2>
                        <h5> {translation.head} </h5>
                        <ul>
                            <li> {translation.element_1} </li>
                            <li> {translation.element_2} 
                                <ul className="text-secondary">
                                    <li> {translation.element_2_1} </li>
                                    <li> {translation.element_2_2} </li>
                                    <li> {translation.element_2_3} </li>
                                </ul>
                            </li>
                            <li> {translation.element_3} </li>
                            <li> {translation.element_4} </li>
                            <li> {translation.element_5} </li>
                            <li> {translation.element_6} </li>
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
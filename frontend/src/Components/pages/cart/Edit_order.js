import React , { useState, useEffect} from "react";
import { usePosition } from 'use-position';
import { BiError } from 'react-icons/bi';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./cart.css";
import { toast } from "react-toastify";
import Spinner from "../../../spinner/spinner";

function OrderForm (props) {
    const [price, setPrice] = useState({})
    const [quantity, setQuantity] = useState({})
    const [limit , setLimit] = useState({})
    const [loader1 , setLoader1] = useState(true)
    const [loader2 , setLoader2] = useState(true)
    const [ not_valid_message , setNotValid ] = useState("");
    const { latitude , longitude } = usePosition();
  
    const [orderData , setOrderData] = useState({})

    const user = useSelector(state => state.authReducer.user )
    const userSellOrders = useSelector(state => state.sellOrders )

    const order_id =  props.order_id
    const cart_catigory = props.type

    let type = ""
    if (cart_catigory==='shop'){
        type = 'S'
    }else if (cart_catigory==='worker'){
        type = 'W'
    }else {
        type = 'H'
    }
    const history = useHistory()
    
    useEffect(()=>{
        if ( cart_catigory === 'shop' ) {
            setPrice({ paper: props.paperPrice.shop_price , metal: props.metalPrice.shop_price , plastic: props.plasticPrice.shop_price})
            setLimit({  min: 10 , max: 80 });
        }
        else if ( cart_catigory === 'worker' ){
            setPrice({ paper: props.paperPrice.workers_price , metal: props.metalPrice.workers_price , plastic: props.plasticPrice.workers_price})
            setLimit({ min: 80 , max: 200 });
        }else{
            setPrice({ paper: props.paperPrice.home_price , metal: props.metalPrice.home_price , plastic: props.plasticPrice.home_price})
            setLimit({ min: 2 , max: 20 });
        }
        setLoader1(false)
    },[cart_catigory])

    useEffect(()=>{
        const filteredOrders = userSellOrders.filter(order => order.id == order_id )
        const myOrder = filteredOrders[0]
        setOrderData(myOrder)
        console.log("sSSSSSS",myOrder)
        setQuantity({
            paper: myOrder.paper_q , 
            metal: myOrder.metal_q , 
            plastic: myOrder.plastic_q
        })
        setLoader2(false)
    },[])

    if(loader1 || loader2){
        return <Spinner/>
    }

    const paperPrice   = price.paper*quantity.paper;
    const plasticPrice = price.plastic*quantity.plastic;
    const metalPrice   = price.metal*quantity.metal;
    const sum = paperPrice + plasticPrice + metalPrice;
   

    
    
    const onChangeHandler = (e, material) => {
        if (e.target.value >= 0){
            setQuantity({...quantity, [material]:Number(e.target.value)})
        }
    }
    
    let not_valid = document.getElementById("not_valid");
    let pattern = /[0-9]/

    function form_validation (){
        if ( !orderData.first_name ||
            orderData.first_name.match(pattern) || 
            orderData.first_name.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid("First Name is Required and Mustn't be Numeric")
            return false
        } 
        else if ( !orderData.last_name ||
            orderData.last_name.match(pattern) ||
            orderData.last_name.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid("Last Name is Required and Mustn't be Numeric ")
            return false
        }
        else if ( orderData.phone.length !== 11 || orderData.phone[0] !== '0' || orderData.phone[1] !== '1' ){
            console.log('PHONE',orderData.phon.length,orderData.phone)
            not_valid.style.display = 'block'
            setNotValid("Phone Must be 11 Number and be Egyptian Phone Number")
            return false
        }
        else if ( !orderData.city ||
                orderData.city.match(pattern) ||
                orderData.city.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid(" City is Required and Mustn't be Numeric ")
            return false
        }
        else if ( !orderData.address ||
                orderData.address.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid(" Address is Required and Must be Specified ")
            return false
        }
        else {
            not_valid.style.display = 'none'
            return true

        }
    }


    // Axios Api
    const url = `http://127.0.0.1:8000/orders_api/${order_id}/`
    

    const onDelete = (e) => {
        e.preventDefault();
        console.log('DELETE YES')
        axios.delete(url)
            .then ( res => {
                console.log(res.data)
                toast.success(`Your Order Was Deleted Successfully`, {
                    position: "bottom-left",
                  });
                
                history.push('/Orders')
            })
            .catch((err) => {
                toast.error(`error Updating , please Try again`, {
                    position: "bottom-left",
                  });
                console.log(err)
                history.push('/error_404')
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = form_validation()
        console.log("USER",user, "Valid", valid )
        if (user !== null && valid){
            console.log('VAAALID')
            const updatedOrderData = {
                first_name: orderData.first_name ,
                last_name: orderData.last_name ,
                phone: orderData.phone ,
                city: orderData.city ,
                address: orderData.address ,
                paper_q: quantity.paper ,
                plastic_q: quantity.plastic ,
                metal_q: quantity.metal ,
                total_price: sum ,
                latitude: latitude || null ,
                longitude: latitude || null ,
            }
            console.log(updatedOrderData)
            axios.put(url,updatedOrderData)
            .then ( res => {
                console.log(res.data)
                toast.success(`Your Order Was Updated Successfully`, {
                    position: "bottom-left",
                  });
                setOrderData(res.data)
                history.push('/success_order')
            })
            .catch((err) => {
                toast.error(`error Updating , please Try again`, {
                    position: "bottom-left",
                  });
                console.log(err)
                history.push('/error_404')
            })
        }else if(user === null){
            console.log('NOT VAL', valid)
            toast.warning(`Make sure you are logged to be able to update your order`, {
                position: "bottom-left",
              });
            not_valid.style.display = 'block'
            setNotValid("Make sure you are logged to be able to upadate your order")
        }
    }
    return(
        <>
            <section id="cart" className="container">
                <h3 className="border-top py-3 my-4">Start to <span className="text-danger"> Clean and Earn </span> </h3>
                <form action="" onSubmit={ (event) => handleSubmit(event)}  >
                    <div className="my-3 row ">
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6  ">
                            <label htmlFor="firstName" > First Name </label>
                            <input value={orderData.first_name} className="w-50" onChange={(e) => setOrderData({...orderData,first_name:e.target.value}) } type="text" id="firstName" name="first_name" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="lastName" > Last Name </label>
                            <input value={orderData.last_name} className="w-50" onChange={(e) => setOrderData({...orderData,last_name:e.target.value}) }  type="text" id="lastName" name="last_name" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="phone" > Phone </label>
                            <input value={orderData.phone} className="w-50" onChange={(e) => setOrderData({...orderData,phone:e.target.value}) } type="number" id="phone" name="phone" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="city" > City </label>
                            <input value={orderData.city} className="w-50" onChange={(e) => setOrderData({...orderData,city:e.target.value}) } type="text" id="city" name="city" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 ">
                            <label htmlFor="Address" > Detailed Address <span className="text-muted mx-2"> This will help our representative reach you, so please enter the ( Street - Building No. - Floor No. - Apartment No. ) </span> </label>
                            <textarea value={orderData.address} className="w-100" onChange={(e) => setOrderData({...orderData,address:e.target.value}) } rows="5" id="Address" name="address" > </textarea>
                        </div>

                        {/* hidden inputs */}
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="latitude" name="latitude" value={latitude} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="longitude" name="longitude" value={longitude} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="total_price" name="total_price" value={sum} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="date" name="date" />
                        </div>
                    </div>

                <table className="table text-center table-responsive-sm ">
                    <caption>You Can Update Form Data Through Your Profile </caption>
                    <thead>
                        <tr >
                            <th scope="col">Material</th>
                            <th scope="col">Quntity ( KG ) </th>
                            <th scope="col">Price Per KG</th>
                            <th scope="col">Total Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        <tr>
                            <td>Paper</td>
                            <td>
                                <div className="input-group justify-content-center align-items-center">
                                    <button 
                                        className="btn btn-outline-secondary shadow-none" type="button" id="button-addon1"
                                        onClick={ ()=> quantity.paper > limit.min && setQuantity( {...quantity, paper:quantity.paper-1} ) }
                                    >  -  </button>
                                    
                                    <input  type="number" name="paper" value={quantity.paper} onChange={(e)=>onChangeHandler(e, "paper")}
                                            className="border px-2 text-center" aria-describedby="button-addon1"
                                    />

                                    <button 
                                        className="btn btn-outline-secondary shadow-none" type="button" id="button-addon2"
                                        onClick={()=> { quantity.paper < limit.max && setQuantity({...quantity, paper:quantity.paper+1}) }}
                                    >  + </button>

                                </div>
                            </td>
                            <td>
                                <input className="mx-2" value={price.paper } disabled />
                                <span>LE</span>    
                            </td>
                            <td>
                                <input className="mx-2" value={paperPrice.toFixed(2)} disabled />
                                <span>LE</span>    
                            </td>
                        </tr>

                        <tr>
                            <td>Metal</td>
                            <td>
                                <div className="input-group  justify-content-center align-items-center">
                                    <button 
                                        className="btn btn-outline-secondary shadow-none" type="button" id="button-addon1"
                                        onClick={()=> quantity.metal > limit.min && setQuantity({...quantity, metal:quantity.metal-1})}
                                    > - </button>
                                        
                                    <input type="number" name="metal" value={quantity.metal} className="border px-2 text-center" aria-describedby="button-addon1" 
                                        onChange={(e)=>onChangeHandler(e, "metal")}
                                    />

                                    <button className="btn btn-outline-secondary shadow-none" type="button" id="button-addon2"
                                        onClick={()=> quantity.metal < limit.max && setQuantity({...quantity, metal:quantity.metal+1}) }
                                    > + </button>
                                </div>
                            </td>
                            <td>
                                <input className="mx-2" value={price.metal} disabled />
                                <span>LE</span>    
                            </td>
                            <td>
                                <input className="mx-2" value={metalPrice.toFixed(2)} disabled />
                                <span>LE</span>    
                            </td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td>
                                <div className="input-group  justify-content-center align-items-center">
                                    <button 
                                        className="btn btn-outline-secondary shadow-none" 
                                        type="button" 
                                        id="button-addon1"
                                        onClick={()=> quantity.plastic > limit.min && setQuantity({...quantity, plastic:quantity.plastic-1})}
                                    >  - </button>
                                    
                                    <input type="number" name="palstic" value={quantity.plastic} aria-describedby="button-addon1" className="border px-2 text-center"  
                                        onChange={(e)=>onChangeHandler(e, "plastic")}
                                    />

                                    <button className="btn btn-outline-secondary shadow-none" type="button" id="button-addon2"
                                        onClick={()=> quantity.plastic < limit.max && setQuantity({...quantity, plastic:quantity.plastic+1})  }
                                    > +  </button>
                                        
                                </div>
                            </td>
                            <td>
                                <input className="mx-2" value={price.plastic} disabled />
                                <span>LE</span>    
                            </td>
                            <td>
                                <input className="mx-2" value={plasticPrice.toFixed(2)} disabled />
                                <span>LE</span>    
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}> Total </td>
                            <td>
                                <input className="mx-2" value={sum.toFixed(2)} disabled />
                                <span>LE</span>    
                            </td>
                        </tr>
                    </tfoot>
                </table>
                
                <div className="my-4 text-center">
                {/* onClick={ (event) => handleSubmit(event)}  */}
                    <button type="submit" className="btn btn-outline-success rounded-bill shadow-none"> Update My Order </button>
                    <button className="btn btn-outline-danger rounded-bill shadow-none"
                     onClick={(e) => { if (window.confirm('Are you sure you wish to delete this order?')) onDelete(e) } }> Delete Order </button>
                    <p className="text-danger my-3 m-auto p-3 rounded text-center border border-danger w-50" id="not_valid">
                        <BiError className="d-block my-2 m-auto h2 " />
                        { not_valid_message }
                    </p>
                </div>
            </form>
        </section> 
    </> 
    )
}

export default OrderForm;
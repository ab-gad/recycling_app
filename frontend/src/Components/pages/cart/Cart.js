import React , { useEffect , useState} from "react";
import { useParams  } from "react-router-dom";
import { usePosition } from 'use-position';
import PageTitle from "../../page_title";
import { BiError } from 'react-icons/bi';
import Footer from '../Footer/Footer';
import "./cart.css";


function Cart () {
    const [price, setPrice] = useState({paper:0.70, metal:1.5, plastic:1.5})
    const [quantity, setQuantity] = useState({paper:2, metal:2, plastic:2})
    const [limit , setLimit] = useState({ min: 2 , max: 20 })
    const cart_id = parseInt(useParams().id)
    const { latitude , longitude } = usePosition();
    
    const paperPrice   = price.paper*quantity.paper;
    const plasticPrice = price.plastic*quantity.plastic;
    const metalPrice   = price.metal*quantity.metal;
    const sum = paperPrice + plasticPrice + metalPrice;
    
    // catigory of kind of users 
    useEffect( () => {
        if ( cart_id === 2 ) {
            setQuantity({paper:10 , metal:10 , plastic:10 }) ;
            setLimit({  min: 10 , max: 80 });
        }
        else if ( cart_id === 3 ){
            setQuantity({paper: 80 , metal: 80 , plastic: 80 }) ;
            setLimit({ min: 80 , max: 200 });
        }
    } , [])
    
    const onChangeHandler = (e, material) => {
        if (e.target.value >= 0){
            setQuantity({...quantity, [material]:Number(e.target.value)})
        }
    }
    
    // form validation
    const [ not_valid_message , setNotValid ] = useState("");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let phone = document.getElementById("phone");
    let city = document.getElementById("city");
    let Address = document.getElementById("Address");
    let not_valid = document.getElementById("not_valid");
    let pattern = /[0-9]/

    function form_validation (){
        if ( !firstName.value ||
             firstName.value.match(pattern) || 
             firstName.value.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid("First Name is Required and Mustn't be Numeric")
            return false
        } 
        else if ( !lastName.value ||
                  lastName.value.match(pattern) ||
                  lastName.value.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid("Last Name is Required and Mustn't be Numeric ")
            return false
        }
        else if ( phone.value.length != 11 ||
                 (phone.value[0] !=0 || phone.value[1] != 1 )  ) {

            not_valid.style.display = 'block'
            setNotValid("Phone Must be 11 Number and be Egyptian Phone Number")
            return false
        }
        else if ( !city.value ||
                  city.value.match(pattern) ||
                  city.value.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid(" City is Required and Mustn't be Numeric ")
            return false
        }
        else if ( !Address.value ||
                  Address.value.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid(" Address is Required and Must be Specified ")
            return false
        }
        else {
            not_valid.style.display = 'none'
            return true

        }
    }

    function predefult (event) {
        if ( !(form_validation()) ) {
            event.preventDefault()
        }
    }
    
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

                <form action="" method="">
                    <div className="my-3 row ">
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6  ">
                            <label htmlFor="firstName" > First Name </label>
                            <input className="w-50" type="text" id="firstName" name="firstName"  />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="lastName" > Last Name </label>
                            <input className="w-50" type="text" id="lastName" name="lastName" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="phone" > Phone </label>
                            <input className="w-50" type="number" id="phone" name="phone" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="city" > City </label>
                            <input className="w-50" type="text" id="city" name="city" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 ">
                            <label htmlFor="Address" > Detailed Address <span className="text-muted mx-2"> This will help our representative reach you, so please enter the ( Street - Building No. - Floor No. - Apartment No. ) </span> </label>
                            <textarea className="w-100" rows="5" id="Address" name="address" > </textarea>
                        </div>

                        {/* hidden inputs */}
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="latitude" name="latitude" value={latitude} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="longitude" name="longitude" value={longitude} />
                        </div>
                    </div>

                <table className="table text-center table-responsive-sm ">
                    <caption>You Can Update To Data Until Wednesday 12:00 AM</caption>
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
                    <button type="submit" onClick={ (event) => predefult(event)} className="btn btn-outline-success rounded-bill shadow-none"> Done </button>
                    <p className="text-danger my-3 m-auto p-3 rounded text-center border border-danger w-50" id="not_valid">
                        <BiError className="d-block my-2 m-auto h2 " />
                        { not_valid_message }
                    </p>
                </div>
                </form>
            </div>
        </section> 
        <Footer/>
        </> 
    )
}

export default Cart;
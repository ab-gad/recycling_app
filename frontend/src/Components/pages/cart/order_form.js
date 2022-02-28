import React , { useEffect , useState} from "react";
import { useParams  } from "react-router-dom";
import { usePosition } from 'use-position';
import { BiError } from 'react-icons/bi';
import "./cart.css";


function Order_form () {
    const [price, setPrice] = useState({ paper: 0.70 , metal: 1.5 , plastic: 1.5})
    const [quantity, setQuantity] = useState({ paper: 2 , metal: 2 , plastic: 2})
    const [limit , setLimit] = useState({ min: 2 , max: 20 })
    const cart_catigory = useParams().name
    const order_id = useParams().order_id
    const { latitude , longitude } = usePosition();
    const date = new Date().toLocaleString()
    const paperPrice   = price.paper*quantity.paper;
    const plasticPrice = price.plastic*quantity.plastic;
    const metalPrice   = price.metal*quantity.metal;
    const sum = paperPrice + plasticPrice + metalPrice;
   

    // catigory of kind of users 
    useEffect( () => {
        if ( cart_catigory === 'shop' ) {
            setQuantity({paper: 10 , metal: 10 , plastic: 10 }) ;
            setLimit({  min: 10 , max: 80 });
            if ( order_id  ) {
                console.log(order_id)
            }else {
                console.log("No ID")

            }
        }
        else if ( cart_catigory === 'worker' ){
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
            <section id="cart" className="container">
                <h3 className="border-top py-3 my-4">Start to <span className="text-danger"> Clean and Earn </span> </h3>
                <form action="" method="">
                    <div className="my-3 row ">
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6  ">
                            <label htmlFor="firstName" > First Name </label>
                            <input className="w-50" type="text" id="firstName" name="firstName" />
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
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="total_price" name="total_price" value={sum} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <input className="w-50" type="hidden" id="date" name="date" value={date} />
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
                    <button type="submit" onClick={ (event) => predefult(event)} className="btn btn-outline-success rounded-bill shadow-none"> Done </button>
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

export default Order_form;
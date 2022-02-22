import { useState } from "react";
import PageTitle from "../../page_title";
import "./cart.css"

import Footer from '../Footer/Footer';

function Cart(){
    const [price, setPrice] = useState({paper:0.70, metal:1.5, plastic:1.5})

    const [quantity, setQuantity] = useState({paper:15, metal:10, plastic:5})
    
    
    const paperPrice   = price.paper*quantity.paper;
    const plasticPrice = price.plastic*quantity.plastic;
    const metalPrice   = price.metal*quantity.metal;
    const sum = paperPrice + plasticPrice + metalPrice;
   
    const onChangeHandler = (e, material) => {
        if (e.target.value >= 0){
            setQuantity({...quantity, [material]:Number(e.target.value)})
        }
    }


    return(
        <>
            <section id="cart">
                <PageTitle title="My Cart" description="Clean & Earn"/>
                <div className="container py-5 table-responsive">
                    <div className="mb-3" >
                        <h3>Selling Policy</h3>
                        <h4>To make a successfull selling process please make sure you fullfilled the following conditions: </h4>
                        <ul>
                            <li>
                                Make sure that you have an account in our platform and you are logged in 
                            </li>
                            <li>
                                After signing in you can start selling your material with the following rules:
                                <ul className="text-secondary">
                                    <li>
                                        If you are following our individuals' plan you can sell only <strong>10 kgs</strong> of each materials per month <br/>
                                        When you exceeded this limit, you will not considered as individual any more and will be transfered automatically in other suitable plane
                                    </li>
                                    <li>
                                        If you are following our Superarkets Owners' plan you can sell only <strong>100 kgs</strong> of each materials per month <br/>
                                    </li>
                                    <li>
                                        If you are a bussiness owner who wanna exceed the 100 Kg of each material per month choose our custom plan that suits your needs.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Depending on the amount of material you tries to sell the plan will be choosed
                            </li>
                            <li>
                                Afer choosing quantities you have to click on the "Proceed Selling Process" button to intiate an order and start your selling process. 
                            </li>
                            <li>
                                Our representative will come to your location within 2 weaks after your selling order
                            </li>
    
                        </ul>
                    </div>
                    <h3 className="border-top pt-3 my-3">Start to Clean & Earn </h3>
                    <table className="table">
                        <caption>Clean & Earn</caption>
                        <thead>
                            <tr>
                                <th scope="col">Material</th>
                                <th scope="col">Quntity</th>
                                <th scope="col">Price Per KG</th>
                                <th scope="col">Total Revenue</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            <tr>
                                <td>Paper</td>
                                <td>
                                    <div className="input-group ">
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            id="button-addon1"
                                            onClick={()=> quantity.paper > 0 && setQuantity({...quantity, paper:quantity.paper-1})}
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            value={quantity.paper}
                                            onChange={(e)=>onChangeHandler(e, "paper")}
                                            className="border px-2 text-center"  
                                            placeholder="" 
                                            aria-label="Example text with button addon" 
                                            aria-describedby="button-addon1" 
                                        />
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            id="button-addon2"
                                            onClick={()=> setQuantity({...quantity, paper:quantity.paper+1})}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <input 
                                            className="mx-2" 
                                            value={price.paper}
                                            disabled
                                    />
                                    <span>LE</span>    
                                </td>
                                <td>
                                    <input 
                                            className="mx-2" 
                                            value={paperPrice.toFixed(2)}
                                            disabled
                                    />
                                    <span>LE</span>    
                                </td>
                            </tr>
                            <tr>
                                <td>Metal</td>
                                <td>
                                <div className="input-group ">
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            id="button-addon1"
                                            onClick={()=> quantity.paper > 0 && setQuantity({...quantity, metal:quantity.metal-1})}
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            value={quantity.metal}
                                            onChange={(e)=>onChangeHandler(e, "metal")}
                                            className="border px-2 text-center"  
                                            placeholder="" 
                                            aria-label="Example text with button addon" 
                                            aria-describedby="button-addon1" 
                                        />
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            id="button-addon2"
                                            onClick={()=> setQuantity({...quantity, metal:quantity.metal+1})}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <input 
                                                className="mx-2" 
                                                value={price.metal}
                                                disabled
                                        />
                                    <span>LE</span>    
                                </td>
                                <td>
                                    <input 
                                                className="mx-2" 
                                                value={metalPrice.toFixed(2)}
                                                disabled
                                        />
                                    <span>LE</span>    
                                </td>
                            </tr>
                            <tr>
                                <td>Plastic</td>
                                <td>
                                    <div className="input-group ">
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            id="button-addon1"
                                            onClick={()=> quantity.paper > 0 && setQuantity({...quantity, plastic:quantity.plastic-1})}
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            value={quantity.plastic}
                                            onChange={(e)=>onChangeHandler(e, "plastic")}
                                            className="border px-2 text-center"  
                                            placeholder="" 
                                            aria-label="Example text with button addon" 
                                            aria-describedby="button-addon1" 
                                        />
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button" 
                                            id="button-addon2"
                                            onClick={()=> setQuantity({...quantity, plastic:quantity.plastic+1})}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <input 
                                        className="mx-2" 
                                        value={price.plastic}
                                        disabled
                                    />
                                    <span>LE</span>    
                                </td>
                                <td>
                                    <input 
                                        className="mx-2" 
                                        value={plasticPrice.toFixed(2)}
                                        disabled
                                    />
                                    <span>LE</span>    
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>
                                    Total
                                </td>
                                <td>
                                    <input 
                                        className="mx-2" 
                                        value={sum.toFixed(2)}
                                        disabled
                                    />
                                    <span>LE</span>    
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="my-4 text-center">
                        <button className="btn btn-outline-success rounded-bill">Proceed Selling Process</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </> 
    )
}

export default Cart;
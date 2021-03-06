import React , { useEffect , useState , useContext} from "react";
import { usePosition } from 'use-position';
import { BiError } from 'react-icons/bi';
import axios from "axios";
import { useSelector } from 'react-redux';
import { Langcontext } from "../../../App";
import { useHistory } from "react-router-dom";
import "./cart.css";
import { toast } from "react-toastify";


function OrderForm (props) {
    const Arabic = {
        first_name: "الأسم الأول",
        last_name: "الأسم الثاني",
        phone: "الهاتف",
        city: "المدينه",
        address: "العنوان",
        address_caption: "هذا سيساعد المندوب للوصول إليك لذلك من فضلك ادخل (اسم الشارع - رقم العمارة - رقم الطابق - رقم الشقة)",
        material:"المادة",
        quntity: "الكمية",
        price_per_kg: "سعر الكيلو",
        total: "الإجمالي",
        table_caption:"تستطيع تعديل البيانات من خلال صفحتك الشخصية",
        button: "إرسال",
        paper : "ورق",
        metal : "معدن",
        plastic : "بلاستيك",
        first_validation: "من فضلك ادخل الاسم الأول و يجب ألا يحتوى على أرقام",
        last_validation: "من فضلك ادخل الاسم الثانى و يجب ألا يحتوى على أرقام",
        phone_validation: "يجب ان يكون الهاتف مكون من 11 رقم و مطابق للمعايير المصرية",
        address_validation: "من فضلك ادخل العنوان بالتفصيل",
        cairo: "القاهرة",
        Minia: "المنيا",
        Alexandria: "الإسكندرية",
    }
    const English = {
        first_name: "First Name",
        last_name: "Last Name",
        phone: "Phone",
        city: "City",
        address: "Address",
        address_caption: "This will help our representative reach you, so please enter the ( Street - Building No. - Floor No. - Apartment No. )",
        material:"Material",
        quntity: "Quntity ( KG )",
        price_per_kg: "Price Per KG",
        total: "Total",
        table_caption:"You Can Update Form Data Through Your Profile",
        button: "Done",
        paper : "Paper",
        metal : "Metal",
        plastic : "Plastic",
        first_validation: "First Name is Required and Mustn't be Numeric",
        last_validation: "Last Name is Required and Mustn't be Numeric ",
        phone_validation: "Phone Must be 11 Number and be Egyptian Phone Number",
        address_validation: "Address is Required and Must be Specified ",
        cairo: "Cairo",
        Minia: "Minia",
        Alexandria: "Alexandria",
    }
    const { langcont } = useContext(Langcontext);
    const translation = langcont === "ENGLISH" ? English : Arabic;

    const [price, setPrice] = useState({})
    const [quantity, setQuantity] = useState({})
    const [limit , setLimit] = useState({})
    const { latitude , longitude } = usePosition();
    const cart_catigory = props.catigory
    let type = ""
    if (cart_catigory==='shop'){
        type = 'S'
    }else if (cart_catigory==='worker'){
        type = 'W'
    }else {
        type = 'H'
    }
    const history = useHistory()
    const date = new Date().toLocaleString()
    // catigory of kind of users 
    
    useEffect(()=>{
        if ( cart_catigory === 'shop' ) {
            setQuantity({paper: 10 , metal: 10 , plastic: 10 }) ;
            setPrice({ paper: props.paperPrice.shop_price , metal: props.metalPrice.shop_price , plastic: props.plasticPrice.shop_price})
            setLimit({  min: 10 , max: 80 });
        }
        else if ( cart_catigory === 'worker' ){
            setQuantity({paper: 80 , metal: 80 , plastic: 80 }) ;
            setPrice({ paper: props.paperPrice.workers_price , metal: props.metalPrice.workers_price , plastic: props.plasticPrice.workers_price})
            setLimit({ min: 80 , max: 200 });
        }else{
            setQuantity({ paper: 2 , metal: 2 , plastic: 2}) ;
            setPrice({ paper: props.paperPrice.home_price , metal: props.metalPrice.home_price , plastic: props.plasticPrice.home_price})
            setLimit({ min: 2 , max: 20 });
        }
    },[cart_catigory])

    const paperPrice   = price.paper*quantity.paper;
    const plasticPrice = price.plastic*quantity.plastic;
    const metalPrice   = price.metal*quantity.metal;
    const sum = paperPrice + plasticPrice + metalPrice;
   

    
    
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
            setNotValid(`${translation.first_validation}`)
            return false
        } 
        else if ( !lastName.value ||
                  lastName.value.match(pattern) ||
                  lastName.value.replace(/\s/g, "") === "" ) {

            not_valid.style.display = 'block'
            setNotValid(`${translation.last_validation}`)
            return false
        }
        else if ( phone.value.length !== 11 || phone.value[0] !== '0' || phone.value[1] !== '1' ){
            console.log('PHONE',phone.value.length,phone.value )
            not_valid.style.display = 'block'
            setNotValid(`${translation.phone_validation}`)
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
            setNotValid(`${translation.address_validation}`)
            return false
        }
        else {
            not_valid.style.display = 'none'
            return true
        }
    }


    // Axios Api
    const url = "http://127.0.0.1:8000/orders_api/"
    const user = useSelector(state => state.authReducer.user )
    const [data , setData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        city: 'Cairo',
        Address: '',
    })
    function inputsData (e){
        data[e.target.id] = e.target.value
        setData(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const valid = form_validation()
        console.log("USER",user, "Valid", valid )
        if (user !== null && valid){
            // console.log('VAAALID')
            const orderData = {
                first_name: data.firstName ,
                last_name: data.lastName ,
                phone: data.phone ,
                city: data.city ,
                address: data.Address ,
                paper_q: quantity.paper ,
                plastic_q: quantity.plastic ,
                metal_q: quantity.metal ,
                total_price: sum ,
                latitude: latitude || null ,
                longitude: latitude || null ,
                user_id:user.id,
                type:type
            }
            // console.log(orderData)
            axios.post(url,orderData)
            .then ( req => {
                // console.log(req.data)
                toast.success(`Your Order Was Sent Successfully`, {
                    position: "bottom-left",
                  });
                history.push('/success_order')
            })
            .catch((err) => {
                toast.error(`error in sending , please Try again`, {
                    position: "bottom-left",
                  });
                console.log(err)
                history.push('/error_404')
            })
        }else if(user === null){
            console.log('NOT VAL', valid)
            toast.warning(`Make sure you are logged to be able to send your order`, {
                position: "bottom-left",
              });
            not_valid.style.display = 'block'
            setNotValid("Make sure you are logged to be able to send your order")
        }
    }
    return(
        <>
            <section id="cart" className="container">
                <h3 className="border-top py-3 my-4" dir='ltr'>Start to <span className="text-danger"> Clean and Earn </span> </h3>
                <form action="" onSubmit={ (event) => handleSubmit(event)}  >
                    <div className="my-3 row ">
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6  ">
                            <label htmlFor="firstName" > {translation.first_name} </label>
                            <input className="w-50" onChange={(e) => inputsData(e) } type="text" id="firstName" name="firstName" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="lastName" >{translation.last_name} </label>
                            <input className="w-50" onChange={(e) => inputsData(e) }  type="text" id="lastName" name="lastName" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="phone" > {translation.phone} </label>
                            <input className="w-50" onChange={(e) => inputsData(e) } type="number" id="phone" name="phone" />
                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 col-sm-6 ">
                            <label htmlFor="city" > {translation.city} </label>
                            <select className="w-50" id="city" name="city" defaultValue='Cairo' onChange={(e) => inputsData(e) } >
                                <option value="Cairo"> {translation.cairo} </option>
                                <option value="Alexandria"> {translation.Alexandria} </option>
                                <option value="Minia"> {translation.Minia} </option>
                            </select>

                        </div>
                        <div className="d-flex flex-wrap justify-content-between my-2 col-12 ">
                            <label htmlFor="Address" > {translation.address} <span className="text-muted mx-2"> {translation.address_caption} </span> </label>
                            <textarea className="w-100" onChange={(e) => inputsData(e) } rows="5" id="Address" name="address" > </textarea>
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

                <table className="table text-center table-responsive-sm "  dir='ltr'>
                    <caption> {translation.table_caption} </caption>
                    <thead>
                        <tr >
                            <th scope="col"> {translation.material} </th>
                            <th scope="col"> {translation.quntity} </th>
                            <th scope="col"> {translation.price_per_kg} </th>
                            <th scope="col"> {translation.total} </th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        <tr>
                            <td> {translation.paper} </td>
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
                            <td> {translation.metal} </td>
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
                            <td> {translation.plastic} </td>
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
                            <td colSpan={3}> {translation.total} </td>
                            <td>
                                <input className="mx-2" value={sum.toFixed(2)} disabled />
                                <span>LE</span>    
                            </td>
                        </tr>
                    </tfoot>
                </table>
                
                <div className="my-4 text-center">
                    <button type="submit" className="btn btn-outline-success rounded-bill shadow-none"> {translation.button}  </button>
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
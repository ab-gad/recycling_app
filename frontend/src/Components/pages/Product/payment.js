import PageTitle from "../../page_title";
import React, { useEffect } from "react";
import {  useHistory,Redirect} from "react-router-dom";
import { API_URL } from "../../../config/index";
import { useDispatch } from "react-redux";
import {

    updateCart
  } from "../../../features/cartSlice";

import "./payment.css";

const Payment = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    // const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems, "ys");

    const finsh = () => {
        dispatch(updateCart([]));

        history.push("/success_order");
        // console.log()
        // <Redirect to="/success_order" />



    }

return (
      
    <div>
              <PageTitle title="Payment" description="Home/Cart/Payment" />
              <div className="row">
            <div className="col-lg-6 text-center">
            <img className="light" src={require('./img/cash.png')} alt="cash on Delivery" width={"35%"} /><br/>
                <button className="btn buttoncolorpayment"  onClick={() => finsh()}> Cash On Delivery</button>
            </div>
            <div className="col-lg-6 text-center">
            <img className="light" src={require('./img/card.png')} alt="payment by card" width={"35%"}/><br/>
            <form
                 action={`${API_URL}/api/stripe/create-checkout-session`}
                 method="POST"
            >
            <button className="btn buttoncolorpayment"type="submit" > Pay by card</button>
            </form>
                </div>

              </div>



  </div>
  );
};
export default Payment;

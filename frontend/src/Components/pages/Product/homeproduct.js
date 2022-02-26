import React,{useEffect} from 'react';
import {API_URL} from '../../../config/index';

const Homeproduct =()=>{

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
    
        if (query.get("success")) {
          console.log("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
            console.log(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

      return(
        <section>
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Stubborn Attachments"
          />
          <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
          </div>
        </div>
        <form action={`${API_URL}/api/stripe/create-checkout-session`} method="POST">
          <button type="submit">
            Checkout
          </button>
        </form>
      </section>
      )


};
export default Homeproduct;
import React, { useEffect } from "react";
import PageTitle from "../../page_title";
import "./homeproducts.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../../features/productsApi";
import { addToCart, updateCart } from "../../../features/cartSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Homeproduct = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  console.log(user, "ys");
  const cartItems = useSelector((state) => state.cart.cartItems);

  const history = useHistory();
  const handleAddToCart = (product) => {
    if(user!=null){
    dispatch(addToCart(product));
    }else{
      toast.error(`login in order to add product to cart`, {
        position: "top-center",
      });
      console.log("login????")
    }
    // const all = {};

    // if (user != null) {
    //   const user_id = user.id;
    //   all[user_id] = cartItems;
    //   localStorage.setItem("cartItems", JSON.stringify(all));
    // } else {
    //   const user_id = 0;
    //   all[user_id] = cartItems;
    //   localStorage.setItem("cartItems", JSON.stringify(all));
    // }

    // history.push("/Cart");
  };
  useEffect(() => {
    if (localStorage.getItem("cartItems") != [] && user != null) {
      const usercart = JSON.parse(localStorage.getItem("cartItems"));
      if (usercart[user.id]) {
        console.log(usercart, "cat");
        dispatch(updateCart(usercart[user.id]));
      }
    } else {
      dispatch(updateCart([]));
    }
  }, [user]);

  useEffect(() => {
    const all = {};

    if (user != null) {
      if (cartItems != []) {
        console.log("cart")
        const user_id = user.id;
        all[user_id] = cartItems;
        localStorage.setItem("cartItems", JSON.stringify(all));
      } else {
        const user_id = user.id;
        all[user_id] = cartItems;
        localStorage.setItem("cartItems", JSON.stringify(all));
      }
    } else {
      const user_id = 0;
      all[user_id] = cartItems;
      localStorage.setItem("any", JSON.stringify(all));
    }
  }, [cartItems]);
  return (
    <>
      <PageTitle title="Products" description="Home/Products" />

      <div className="container" id="homeproduct">
        {isLoading ? (
          <p>loading...</p>
        ) : error ? (
          <p>error occured</p>
        ) : (
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 " >
          {data?.map((product) => (
            <div key={product.id} className="col border">
                <div className="card h-100 shadow-sm"> <img src={product.image} className="card-img-top" alt={product.title}/>
                   <hr/>
                    <div className="card-body">
                        <div claclassNamess="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary"></span> <span class="float-end price-hp">{product.price}$</span> </div>
                        <h2 className="card-title text-center">{product.title}</h2>
                        <h5 className="">{product.description}.</h5>
                        <div className="text-center my-4"> <button   onClick={() => handleAddToCart(product)} class="btn1 btn-warning">Add To Cart</button> </div>
                    </div>
                </div>
            </div>

            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Homeproduct;

// import React,{useEffect} from 'react';
// import {API_URL} from '../../../config/index';
// import QueryString from 'query-string';
// import{useLocation}from'react-router-dom';
// const Homeproduct =()=>{

//     const location=useLocation();
//     useEffect(() => {
//         // Check to see if this is a redirect back from Checkout
//         const values = QueryString.parse(location.search);
//         console.log(values);

//         if (values.success) {
//           console.log("Order placed! You will receive an email confirmation.");
//         }

//         if (values.canceled) {
//             console.log(
//             "Order canceled -- continue to shop around and checkout when you're ready."
//           );
//         }
//       }, []);

//       return(
//         <section>
//         <div className="product">
//           <img
//             src="https://i.imgur.com/EHyR2nP.png"
//             alt="The cover of Stubborn Attachments"
//           />
//           <div className="description">
//           <h3>Stubborn Attachments</h3>
//           <h5>$20.00</h5>
//           </div>
//         </div>
//         <form action={`${API_URL}/api/stripe/create-checkout-session`} method="POST">
//           <button type="submit">
//             Checkout
//           </button>
//         </form>
//       </section>
//       )

// };
// export default Homeproduct;

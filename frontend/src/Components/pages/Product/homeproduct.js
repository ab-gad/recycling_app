import React, { useEffect } from "react";
import PageTitle from "../../page_title";
import "./homeproducts.css";
import Spinner from "../../../spinner/spinner";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../../features/productsApi";
import { addToCart, updateCart } from "../../../features/cartSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";

const Homeproduct = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  console.log(user, "ys");
  const cartItems = useSelector((state) => state.cart.cartItems);

  const history = useHistory();
  const handleAddToCart = (product) => {
    if (user != null) {
      dispatch(addToCart(product));
    } else {
      toast.error(`login in order to add product to cart`, {
        position: "top-center",
      });
      console.log("login????");
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
    if (localStorage.getItem("cartItems") && user != null) {
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
      if (!localStorage.getItem("cartItems")) {
        console.log("carttttt");
        const user_id = user.id;
        all[user_id] = cartItems;
        localStorage.setItem("cartItems", JSON.stringify(all));
      } else {
        const cart = JSON.parse(localStorage.getItem("cartItems"));

        const user_id = user.id;
        cart[user_id] = cartItems;
        // all[user_id] = cartItems;
        localStorage.setItem("cartItems", JSON.stringify(cart));
      }
    }
    //  else {
    //   const user_id = 0;
    //   all[user_id] = cartItems;
    //   localStorage.setItem("any", JSON.stringify(all));
    // }
  }, [cartItems]);
  return (
    <>
      <PageTitle title="Products" description="Home/Products" />

      <div className="container my-5" id="homeproduct">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>error occured</p>
        ) : (
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 ">
            {data?.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100 shadow">
                  {" "}
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <hr />
                  <div className="card-body productbodycolor">
                    <h2 className=" text-center">{product.title}</h2>
                    <h5 className="text-secondary">{product.description}.</h5>
                    <h4 className="text-center price-hp mb-2 fw-bold">
                      {product.price}$
                    </h4>
                    <div className="text-center">
                      {" "}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn1 btn-warning"
                      >
                        Add To Cart
                      </button>{" "}
                    </div>
                    {/*  */}
                    {/* <MyVerticallyCenteredModal
        show={modalShow}
        data={product}
        onHide={() => setModalShow(false)}
      /> */}
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

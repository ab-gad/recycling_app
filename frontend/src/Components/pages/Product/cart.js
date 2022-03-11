import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, Link, Redirect } from "react-router-dom";
import { API_URL } from "../../../config/index";
import QueryString from "query-string";
import PageTitle from "../../page_title";
import { TiMinus, TiPlus } from "react-icons/ti";
import { BsFillTrashFill } from "react-icons/bs";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
  updateCart,
} from "../../../features/cartSlice";
import "./homeproducts.css";
import "./cart.css";
import Footer from "../Footer/Footer";


const Wagon = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const location = useLocation();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const values = QueryString.parse(location.search);
    console.log(values);

    if (values.success) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (values.canceled) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

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
  }, [cartItems]);

  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // api post
  const history = useHistory();

  const checkout = (e) => {
    // e.preventDefault();
    if (user != null) {
      fetch("http://127.0.0.1:8000/order_product_api/OrderProductList/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: item,
          quantities: quantity,
          total_price: cart.cartTotalAmount,
          user: user.id,
        }),
      });
      const car = JSON.parse(localStorage.getItem("cartItems"));
      delete car[user.id];
      console.log(car, "cartIcarttems");
      localStorage.setItem("cartItems", JSON.stringify(car));
      history.push("/Payment");
    } else {
      history.push("/login");
    }
  };

  const item = [];
  const quantity = [];
  const total = 0;

  return (
    <div>
    {cart.cartItems.length === 0 ? (
      <div className="text-center" id="centeremptycart">
                <img src={require('./img/cart.png')} alt="Empty cart img" />

        <h3 className="text-capitalize">your cart is Empty </h3>
        <Link to="/">
          {" "}
          <span className="btn startshoping">Start Shopping</span>
        </Link>

      </div>
    ) : (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-headercartItem py-3">
                    <h5 className="mb-0">Cart Items</h5>
                  </div>
                  {cart.cartItems?.map((cartItem) => (
                    <div key={cartItem.id}>
                      <div className="visi">
                        {item.push(cartItem.title)}
                        {quantity.push(cartItem.cartQuantity)}
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      

                            <div
                  class="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={cartItem.image}
                    class="w-100 h-100"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                    ></div>
                  </a>
                </div>
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong><span className="">Name:</span>{cartItem.title}</strong>
                            </p>
                            <p><span className="">price:</span>{cartItem.price}</p>
                            <p></p>
                            <button
                              type="button"
                              onClick={() => handleRemoveFromCart(cartItem)}
                              className="btn btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                            >
                              <BsFillTrashFill className="BsFillTrashFill"/>
                            </button>
                     
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="d-flex mb-4">
                              <button
                                onClick={() => handleDecreaseCart(cartItem)}
                                className="btn px-3 me-2 test"
                              >
                                <TiMinus className="BsFillTrashFill"/>
                              </button>

                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={cartItem.cartQuantity}
                                  type="number"
                                  className="form-control"
                                />
                                <label className="form-label">Quantity</label>
                              </div>

                              <button
                                onClick={() => handleIncreaseCart(cartItem)}
                                className="btn px-3 ms-2 test"
                              >
                                <TiPlus className="BsFillTrashFill"/>
                              </button>
                            </div>

                            <p className="text-start text-md-center">
                              <strong>
                                Price:{cartItem.price*cartItem.cartQuantity}$
                              </strong>
                            </p>
                          </div>
                        </div>

                        <hr className="my-4" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                <button
                  type="button"
                  onClick={() => handleClearCart()}
                  className="btn btn-success btn-lg btn-block"
                >
                  Clear cart
                </button>
                </div>
                
                <hr></hr>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.3.2022 - 22.3.2022</p>
                  </div>
                </div>
                <div class="card mb-4 mb-lg-0">
          <div class="card-body">
            <p><strong>We accept</strong></p>
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            
          </div>
        </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>${cart.cartTotalAmount}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>${cart.cartTotalAmount}</strong>
                        </span>
                      </li>
                    </ul>
                    {/* <form
                      action={`${API_URL}/api/stripe/create-checkout-session`}
                      method="POST"
                    > */}
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block"
                        onClick={() => checkout()}
                      >
                        Checkout
                      </button> 
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )}
        <Footer />
  </div>
  );
};
export default Wagon;
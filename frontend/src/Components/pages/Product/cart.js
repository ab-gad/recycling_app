import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageTitle from "../../page_title";
import { useEffect } from "react";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "../../../features/cartSlice";

const Wagon = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
  return (
    <div>
      {cart.cartItems.length === 0 ? (
        <>
          <div>your cart is Empty </div>
          <Link to="/">
            {" "}
            <span>Start Shopping</span>
          </Link>
        </>
      ) : (
        <>
          <section class="h-100 gradient-custom">
            <div class="container py-5">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-8">
                  <div class="card mb-4">
                    <div class="card-headercartItem py-3">
                      <h5 class="mb-0">Cart - 2 items</h5>
                    </div>
                    {cart.cartItems?.map((cartItem) => (
                      <div key={cartItem.id}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              <div
                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={cartItem.image}
                                  className="w-100"
                                  alt={cartItem.title}
                                />
                                <a href="#!">
                                  <div className="mask"></div>
                                </a>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              <p>
                                <strong>{cartItem.title}</strong>
                              </p>
                              <p>{cartItem.description}</p>
                              <p></p>
                              <button
                                type="button"
                                onClick={() => handleRemoveFromCart(cartItem)}
                                className="btn btn-primary btn-sm me-1 mb-2"
                                data-mdb-toggle="tooltip"
                                title="Remove item"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                              {/* <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                    title="Move to the wish list">
                    <i className="fas fa-heart"></i>
                  </button> */}
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <div className="d-flex mb-4">
                                <button
                                  onClick={() => handleDecreaseCart(cartItem)}
                                  className="btn btn-primary px-3 me-2"
                                >
                                  <i className="fas fa-minus"></i>
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
                                  className="btn btn-primary px-3 ms-2"
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  ${cartItem.price * cartItem.cartQuantity}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleClearCart()}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Clear cart
                  </button>
                  <div className="card mb-4">
                    <div className="card-body">
                      <p>
                        <strong>Expected shipping delivery</strong>
                      </p>
                      <p className="mb-0">12.10.2020 - 14.10.2020</p>
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

                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default Wagon;

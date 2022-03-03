import _ from 'lodash'
import axios from 'axios'
import toastr from 'toastr'

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actionTypes'
import { clearShippingOptions } from './Shipping'
import { clearBillingOptions } from './Billing'
export const TOASTR_OPTIONS = {
    closeButton: true,
    preventDuplicated: true,
    positionClass: 'toast-bottom-left'
}

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product: product,
            quantity: quantity
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: id
        }
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const placeOrder = (items, shippingData, billingData) => {
    return dispatch => {
        let totalPrice = 0
        let productsArr = []
        let quantitiesArr = []

        _.forEach(items, (element) => {
            totalPrice += element.product.price * element.quantity
            productsArr.push(element.product.name)
            quantitiesArr.push(element.quantity)

            let updatedQuantity = element.product.quantity - element.quantity
            axios.put(`http://127.0.0.1:8000/cart/products/${element.product.id}/`, {category: element.product.category, name: element.product.name, price: element.product.price, quantity: updatedQuantity})
        })

        axios.post('http://localhost:8000/cart/orders/', {products: productsArr, quantities: quantitiesArr, total_price: totalPrice.toFixed(2), delivery_method: shippingData.deliveryMethod, payment_method: billingData.paymentMethod})
            .then((res) => {
                toastr.success("Placing order successfully.")
            })

        dispatch(clearCart())
        if (shippingData.rememberDetails !== true) {
            dispatch(clearShippingOptions())
        }

        dispatch(clearBillingOptions())
    }
}
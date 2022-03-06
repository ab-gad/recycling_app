import { USER_SELL_ORDERS } from "../actions/actionTypes";

const initialState = []

export default function sellOrders (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case USER_SELL_ORDERS:
            return payload
        default:
            return state
    }
}
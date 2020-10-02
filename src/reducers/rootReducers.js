import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { shopReducer } from "./shopReducer";

export const rootReducer = combineReducers({
    shop:shopReducer,
    cart:cartReducer
})
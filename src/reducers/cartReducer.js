import { types } from "../types/types";

const initState={
    products:[]
}

export const cartReducer=(state=initState,action)=>{
    switch (action.type) {
        case types.eventAddProductCart:
            return{
                ...state,
                products:[
                    // ...state.products,
                    ...action.payload
                ]

            }
        case types.eventClearCart:
            return{
                ...state,
                products:[]
            }
    
        default:
            return state;
    }
}
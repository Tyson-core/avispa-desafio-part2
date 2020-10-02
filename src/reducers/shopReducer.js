import { types } from "../types/types";

const initState={
    shops:[],
    shop:null,
    previousShop:null,
    products:[]
}

export const shopReducer = (state=initState,action) =>{
    switch (action.type) {
        case types.eventGetShops:
            return {
                ...state,
                shops:[...action.payload]
            };
        case types.eventGetProducts:
            return{
                ...state,
                shops:[],
                shop:action.payload.nameShop,
                products:action.payload.products,
            }
        case types.eventAddPreviousShop:
            return{
                ...state,
                previousShop:action.payload
            }
        case types.eventClearShops:
            return{
                ...initState
            }
        default:
            return state;
    }
}
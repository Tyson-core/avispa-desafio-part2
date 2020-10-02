import data from '../database/db.json'
import { types } from '../types/types';

export const startGetShops = ()=> {
    return(dispatch)=>{
        const shops = data.map(shop=> shop.Tienda)
        const clearShopName = [...new Set(shops)]
        dispatch({
            type:types.eventGetShops,
            payload:clearShopName
        })
    }
}

export const startGetProducts=(name)=>{
    return(dispatch)=>{
        const products = data.filter(store=> store.Tienda === name)
        dispatch({
            type:types.eventGetProducts,
            payload:{
                products,
                nameShop:name
            }
        })
    }
}

export const addPreviousShop=(previousShop)=>{
    return(dispatch)=>{
        dispatch({
            type:types.eventAddPreviousShop,
            payload:previousShop
        })
    }
}

export const startClearAllShops=()=>{
    return(dispatch)=>{
        dispatch({
            type:types.eventClearShops
        })
    }
}
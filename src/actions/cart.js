import { types } from "../types/types"

let data ={}
let dataDispatch=[]
export const startAddProductToCart=(product)=>{
    return(dispatch)=>{

        data= {...data,...product}
        dataDispatch = [...dataDispatch,{...data}]

        let repeatedItem={}
        dataDispatch.map(products=>{
            let productId = products.Id
            repeatedItem[productId] = repeatedItem[productId] ? (repeatedItem[productId]+1):1
            return products
        })

        repeatedItem = Object.keys(repeatedItem).map(item=>{
            const resultIdProduct = dataDispatch.find(res=> res.Id === parseInt(item))
            return { ...resultIdProduct,count: repeatedItem[item] };
         });

        dispatch({
            type:types.eventAddProductCart,
            payload:repeatedItem
        })

    }
}


export const clearCart=()=>{
    data ={}
    dataDispatch=[]
    return(dispatch)=>{
        dispatch({
            type:types.eventClearCart
        })
    }
}


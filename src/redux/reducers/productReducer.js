import { ActionType } from "../contants/ActionsType"


const initialState = {
    products: []
}

//All products
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {
                ...state, products: payload
            }

        case ActionType.FETCH_PRODUCTS:
            return {
                ...state, products: payload
            }


        default:
            return state;
    }
}


//Selected Product..
export const selectedProductReducer = (state = {}, { type, payload }) => {

    switch (type) {
        //selected product and show in page [/product/productId]
        case ActionType.SELECTED_PRODUCT:
            return {
                ...state, ...payload
            }

        //get info product for API using product id
        case ActionType.FETCH_PRODUCT:
            return {
                ...state, ...payload
            }

        //initial state befor change product..
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return {
                state
            }

    }

}
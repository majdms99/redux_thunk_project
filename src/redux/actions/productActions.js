import storeApi from "../../apis/storeApi";
import { ActionType } from "../contants/ActionsType";

export const fetchProducts = () => {

    return async function (dispatch) {

        const response = await storeApi.get('/products');

        dispatch({
            type: ActionType.FETCH_PRODUCTS,
            payload: response.data
        })
        console.log('response', response);

    }

}

export const fetchProduct = (id) => {

    return async function (dispatch) {

        const response = await storeApi.get(`/products/${id}`);

        dispatch({
            type: ActionType.FETCH_PRODUCT,
            payload: response.data
        })
        console.log('response', response);

    }

}

export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
}


export const removeSelectedProduct = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCT
    }
}
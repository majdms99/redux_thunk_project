import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const ProductListsing = () => {

    // const products = useSelector(state => state)
    const dispatch = useDispatch();
    // const fetchProducts = async () => {
    //     const response = await axios
    //         .get('https://fakestoreapi.com/products')
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //     // console.log('res', response.data);
    //     dispatch(setProducts(response.data));
    // };

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    // console.log(products);

    return (
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductListsing
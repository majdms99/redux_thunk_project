import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, fetchProduct } from '../redux/actions/productActions'


const ProductDetail = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const productId = params.id;
    // console.log(productId.id);
    const product = useSelector((state) => state.product);

    // const fetchProductDetail = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
    //         console.log(err)
    //     })
    //     dispatch(selectedProduct(response.data))
    //     // console.log('resp', response);
    // }

    useEffect(() => {
        if (productId && productId !== '')
            dispatch(fetchProduct(productId));

        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className='container mx-auto px-4'>
            {Object.keys(product).length === 0 ? (
                <div className="text-center">
                    <svg role="status" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
            ) :

                <div className="m-2 w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8" key={product.id}>
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                        <img src={product.image} alt={product.title} className="object-center object-cover bg-cover w-full		" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.title}</h2>
                        <h1 className="text-6xl m-4 font-bold text-indigo-600  sm:pr-12">{product.price}</h1>
                        <p className="text-base  text-gray-900 sm:pr-12">{product.description}</p>


                    </div>
                </div>
            }
        </div >
    )
}

export default ProductDetail
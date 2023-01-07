import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/Action_creators/ProductsActions';
import { ADDED_TO_CART, REMOVE_FROM_CART } from '../redux/Action_creators/CartActions';
import { useState } from 'react';
function ProductDetails() {
    let { id } = useParams();
    const product = useSelector(state => state?.products?.product)
    const [singleProduct, setProduct] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(id));
    }, [])

    useEffect(() => {
        if(product){
            product.quantity = 1
            setProduct({ ...product });
        }
    }, [product])
    const handleAddToCart = () => {
        console.log(singleProduct, 'before');
        dispatch(ADDED_TO_CART(singleProduct))
    }
    const changeQuantity = (type) => {
        let data = singleProduct
        if (type == 'inc') {
            data['quantity'] = data['quantity'] != undefined ? data['quantity'] + 1 : 1
            data.stock -= 1
            setProduct({ ...data })
        }
        else {
            if (data.quantity > 1) {
                data['quantity'] = data['quantity'] != undefined ? data['quantity'] - 1 : 1
                data.stock += 1
                console.log(data.stock);
                setProduct({ ...data })
            }
        }

    }

    return (
        <div className='react-container content ' data-testid='productCard'>
            <div className='row '>
                <div className='col-6 mt-3'>
                    <img src={singleProduct?.imageURL} data-testid='productImg' className='img' width='100%' height={'90%'} alt={singleProduct?.name} />
                </div>
                <div className='col-6 mt-3'>
                    <h6><strong data-testid='productName'>{singleProduct?.name}</strong></h6>
                    <p data-testid='productDesc'>{singleProduct?.description}</p>
                    <p><strong data-testid='productPrice'>MRP RS {singleProduct?.price}</strong></p>
                    <p>Stock : <strong data-testid='productStock'>{singleProduct?.stock}</strong> Units Remaining</p>
                    <p className='d-flex'><span className='quantity-btn' data-testid='productDecr' onClick={() => { changeQuantity('dec') }}>-</span><span data-testid='quantity'>{singleProduct.quantity}</span><span className='quantity-btn' data-testid='productInc' onClick={() => { changeQuantity('inc') }}>+</span>  </p>
                    <button className='btn btn-info' type='button' onClick={() => { handleAddToCart() }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
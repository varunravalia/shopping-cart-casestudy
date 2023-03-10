import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { ADDED_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from '../redux/Action_creators/CartActions';
const Cart = () => {
    const cartItems = useSelector(state => state?.cart?.cartItems);
    const dispatch = useDispatch()
    const total = () => {
        const sumall = cartItems.map(item => item.quantity * item.price).reduce((prev, curr) => prev + curr, 0);
        return sumall
    }

    const removeItem=(item)=>{
        dispatch(DELETE_ITEM(item))
    }

    return (
        <div className={cartItems?.length > 0 ? 'bg-gray cart-content' : 'bg-white'} >
            {
                cartItems?.length > 0 && (
                    <div className='cart-header bg-white p-3 mt-3'>
                        <h5>My Cart <small>({cartItems?.length} Items)</small></h5>
                    </div>
                )
            }
            {
                cartItems?.map(item => (
                    <div className='card mt-2 p-3' data-testid='cartCard' key={item?.id}>
                        <div className='d-flex'>
                            <div className='d-flex mr-2 ' onClick={()=>{removeItem(item)}}>
                                <strong><p data-testid='removeCart' className='text-danger cancel'>X</p></strong>
                            </div>
                            <img height='70px' data-testid='cartImg' src={item?.imageURL} alt={item.id} />
                            <div className='ml-3'>
                                <h6><strong data-testid='cartName'>{item?.name}</strong></h6>
                                <p className='d-flex'><span data-testid='decrementBtn' className='quantity-btn' onClick={() => { dispatch(REMOVE_FROM_CART(item)) }}>-</span><span data-testid='cartQty'>{item.quantity}</span><span className='quantity-btn' data-testid='incrementBtn' onClick={() => { dispatch(ADDED_TO_CART(item)) }}>+</span> <span className='ml-3 mr-3'>X</span> Rs{item.price} </p>
                            </div>
                            <div className='total ml-auto'>
                                <p>Rs {item?.quantity * item?.price}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
            {
                cartItems?.length > 0 ? (
                    <>
                        <div className='p-3 bg-white mb-5 cheaper-sec d-flex align-items-center mt-2' >
                            <img  data- testid='productImage' src='/static/images/lowest-price.png' alt='lowest' />
                            <span className='ml-3'>You won't find it cheaper anywhere</span>
                        </div>
                        <div className='checkout-footer mt-5  p-3'>
                            <p className='text-center'>Promo code can be applied on the payment page</p>
                            <div className='d-flex bg-danger align-items-center p-2'>
                                <div className='col-6 text-light'>Proceed to Checkout</div>
                                <div className='col-6 text-right text-light'>Rs {total()}  <i className='fas fa-angle-right'></i></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='cart-empty '>
                        <div className='empty-text'>
                            <h4><strong>No items in your cart</strong></h4>
                            <p>your favourite items are just a click away</p>
                        </div>
                        <div className='checkout-footer   '>
                            <div className='bg-danger  p-2'>
                                <NavLink to='/' className='text-light'>Start Shopping</NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
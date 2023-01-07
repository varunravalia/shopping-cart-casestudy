import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Logout } from '../redux/Action_creators/LoginActions';
import Cart from './Cart';
const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
let cartClick = false
const Navbar = () => {
    const navigate = useNavigate()
    const [width, setWidth] = useState(getWidth());
    const dispatch = useDispatch()
    const items = useSelector(state => state);
    const isLogin = useSelector(state => state.login.isLogin);
    
    const handleOpenCart = () => {
        if (cartClick) {
            if (width > 1200) {
                navigate('products')
                window.$('#myModal').modal();
            }
            else {
                window.$('#myModal').modal('hide');
                navigate('cart')
            }
        }
    }

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    const logout = () => {
        dispatch(Logout())
    }

    useEffect(() => {
        handleOpenCart()
    }, [width])

    useEffect(() => {
        if (isLogin == false) {
            navigate('/')
        }
    }, [isLogin])

    return (
        <div>
            <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top" >
                <div className='container'>
                    <NavLink to='/' className="navbar-brand" ><img src='/static/images/logo.png' alt='logo' /></NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item ml-2">
                                {
                                    isLogin && (
                                        <NavLink to="products">
                                            Products
                                        </NavLink>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                    {
                        !isLogin ? (
                            <div className="d-flex auth-sec">
                                <NavLink to="/" className='mr-2'>
                                    Login
                                </NavLink>
                                {/* <NavLink to="register" className='mr-2'>
                                    Register
                                </NavLink> */}
                            </div>
                        ) : (
                            <h6 className='mr-3 logout-cursor' onClick={() => { logout() }}>Logout</h6>
                        )

                    }
                    <a onClick={() => { cartClick = true; handleOpenCart() }} className="navbar-brand navbar-cart "><img src='/static/images/cart.svg' alt='cart' /> <span>{items?.cart?.cartItems?.length} Items</span></a>
                </div>
            </nav>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h6 className="modal-title">My Cart <small>({items?.cart?.cartItems?.length} items)</small></h6>
                            <button type="button" className="close text-white" onClick={() => { cartClick = false }} data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-gray">
                            <Cart />
                        </div>

                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>



    )
}

export default Navbar
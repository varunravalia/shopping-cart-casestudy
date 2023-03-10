import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAction } from '../redux/Action_creators/LoginActions';

const loginModel = {
    userName: '',
    password: ''
}

const Login = () => {
    const [user, setUser] = useState({ ...loginModel });
    const isLogin = useSelector(state => state?.login?.isLogin)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (type, value) => {
        let obj = user;
        obj[type] = value;
        setUser(obj)
    }

    useEffect(() => {
        if (localStorage.getItem('isLogin')=='true'){
            navigate('products');
        }
    }, [isLogin])

    const handleSubmit = async () => {
        try {
            dispatch(LoginAction(user));
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='react-container p-2' style={{ marginTop: '120px' }}>
            <div className='row justify-content-center ' >
                <div className='col-sm-4 mb-3'>
                    <h4><strong>Login</strong></h4>
                    <small><strong>Get access to your Orders ,Whishlist and Recomendations</strong></small>
                </div>
                <div className='col-sm-4 '>
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                        <div className='sec'>
                            <input type="text" data-testid='userName' onChange={(e) => { handleChange('userName', e.target.value) }} className="inputText" required />
                            <span className="floating-label">Email</span>
                        </div>
                        <div className='sec mt-4'>
                            <input type="password" data-testid='password' onChange={(e) => { handleChange('password', e.target.value) }} required />
                            <span className="floating-label">Password</span>
                        </div>
                        <button data-testid='login' className='btn btn-danger  mt-4 w-100'  >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
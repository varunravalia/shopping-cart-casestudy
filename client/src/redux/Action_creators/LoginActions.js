import axios from "../../utils/axios"
import { LoginActionTypes } from "../constants/loginAction_types"
export const LoginAction = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('login', data, { withCredentials: true });
            localStorage.setItem('isLogin', res.data.isLogin);
            dispatch({
                type: LoginActionTypes.LOGIN,
                payload: res.data.isLogin
            })
        } catch (error) {
            console.log(error);
        }

    }
}

export const Logout = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('logout');
            localStorage.setItem('isLogin', res.data.isLogin);
            dispatch({
                type: LoginActionTypes.LOGOUT,
                payload: res.data.isLogin
            })
        } catch (error) {
            console.log(error);
        }
    }
}
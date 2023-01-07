import { useNavigate } from "react-router-dom"
import { LoginActionTypes } from "../constants/loginAction_types"

const initialState={
    isLogin:false
}
export const LoginReducer=(state=initialState,{type,payload})=>{
    if(type==LoginActionTypes.LOGIN){
        return {...state, isLogin:payload}
    }
    else{
        return {...state , isLogin:payload} 
    }
}
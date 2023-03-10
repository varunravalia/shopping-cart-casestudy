import {combineReducers} from 'redux'
import { BannerReducer } from './BannerReducer'
import { CartReducer } from './CartReducer'
import { LoginReducer } from './LoginReducer'
import { ProductReducer } from './ProductReducer'
import { CategoriesReducer } from './Product_Category_Reducer'
import { RegisterReducer } from './RegisterReducer'
import { ScreenWidthReducer } from './ScreenWidthReducer'

 const reducers=combineReducers(
    {
        banner:BannerReducer,
        product_category:CategoriesReducer,
        products:ProductReducer,
        cart:CartReducer,
        screen:ScreenWidthReducer,
        register:RegisterReducer,
        login:LoginReducer
    }
)

export default (state,action)=>{
    return reducers (action.type === "LOGOUT" ? undefined : state, action)
}
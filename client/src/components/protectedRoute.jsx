import React from "react";
import { Navigate} from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.isLogin;
    return isAuthenticated=='true' ? <Component/> : <Navigate to="/" />;
}
export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export default function PrivateRoute({component: Component, redirectTo = '/' }){
    const isLoggeIn = useSelector(authSelectors.getIsLoggedIn)
    const isRefreshCurrent = useSelector(authSelectors.getIsRefreshCurrent)
    const should = isLoggeIn && isRefreshCurrent
return should ? <Navigate to={redirectTo} /> : <Component/>
} 

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export default function PublicRoute({component: Component, redirectTo = '/' }){
const isLoggeIn = useSelector(authSelectors.getIsLoggedIn)

return isLoggeIn ? <Navigate to={redirectTo} /> : <Component />
}



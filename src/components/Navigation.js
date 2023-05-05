import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import authSelectors from "redux/auth/auth-selectors";


const Navigation = () => {
    const {isLoggedIn} = useSelector(authSelectors.getIsLoggedIn)

    return (
        <nav>
        <NavLink to="/">
            Home
        </NavLink>
        {isLoggedIn && (
            <NavLink to="/contacts">
            Contacts
        </NavLink>
        )}
        
        {/* <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink> */}

    </nav>
    );
    
};
export default Navigation
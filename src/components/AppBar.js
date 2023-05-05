import AuthNav from "components/AuthNav"
import Navigation from "components/Navigation"
import UserMenu from "./UserMenu"
import { useSelector } from "react-redux"
import authSelectors from '../redux/auth/auth-selectors'

export const AppBar = () => {
    const {isLoggedIn} = useSelector(authSelectors.getIsLoggedIn)
    // console.log(isLoggedIn)
    return(
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/>: <AuthNav/>}

        </header>
    )
}

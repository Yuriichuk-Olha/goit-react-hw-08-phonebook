
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsRefreshCurrent = state => state.auth.isRefreshCurrent;

const authSelectors = { 
    getIsLoggedIn,
    getUserName,
    getIsRefreshCurrent,
}
export default authSelectors
















//  приклад кастомного хука 
// const useAuth = () =>{
//     return{
//         isLoggedIn:useSelector(selectIsLoggedIn),
//         isRefreshCurrent:useSelector(selectIsRefreshCurrent),
//         user:useSelector(selectUser)
//     }
// }
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import HomePage from "page/HomePage/HomePage";
import operations from '../redux/auth/auth-operations'
import authSelectors from "redux/auth/auth-selectors";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const ContactsPage = lazy(()=>import('../page/ContactsPage/ContactsPage'))
const LoginPage = lazy(()=>import('../page/LoginPage/LoginPage'))
const RegisterPage = lazy(()=>import('../page/RegisterPage/RegisterPage'))

  
export const App = () => {
  const getIsRefreshCurrent = useSelector(authSelectors.getIsRefreshCurrent)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(operations.fetchCurrentUser())
  },[dispatch])
  return (
    !getIsRefreshCurrent &&(

    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index element={<HomePage />}/>

      <Route path="/register" element={
        <PublicRoute component={<RegisterPage />} redirectTo="/contacts" />}
      />

      <Route path="/login" element={
        <PublicRoute component={<LoginPage />} redirectTo="/contacts" />}
      />

      <Route path="/contacts" element={
        <PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
      />

    </Routes>

    )
  
  );
};

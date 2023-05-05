import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from 'redux/auth/auth-operations'

export default function LoginPage(){
    const dispatch = useDispatch();
    const[email, setEmail] = useState('')
    const[password, setPassword]= useState('')

    const handleChange = ({target: {name , value}})=>{
        switch (name){
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
       const form = e.currentTarget;
        dispatch(operations.logIn({email:form.elements.email.value,
            password:form.elements.password.value}))
            // form.reset()
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <h1>Сторінка Login</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                Пошта
                <input type="email" name="email" value={email} onChange={handleChange} />                    
                </label>

                <label>
                Пароль
                <input type="password" name="password" value={password} onChange={handleChange}/>                    
                </label>
                <button  type="submit">Login
                </button>
            </form>
        </div>
    )
}
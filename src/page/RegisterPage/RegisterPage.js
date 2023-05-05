import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from 'redux/auth/auth-operations'

export default function RegisterPage(){
    const dispatch = useDispatch();
    const[name, setName]= useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword]= useState('')

    const handleChange = ({target: {name , value}})=>{
        switch (name){
            case 'name':
                return setName(value)
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
        const form = e.currentTarget
        dispatch(operations.register({name:form.elements.name.value, 
            email:form.elements.email.value,
            password:form.elements.password.value}))
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <h1>Сторінка Register</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                Name
                <input type="name" name="name" value={name} onChange={handleChange} />                    
                </label>

                <label>
                Пошта
                <input type="email" name="email" value={email} onChange={handleChange} />                    
                </label>

                <label>
                Пароль
                <input type="password" name="password" value={password} onChange={handleChange}/>                    
                </label>
                <button  type="submit">
            Register
          </button>
            </form>
        </div>
    )
}
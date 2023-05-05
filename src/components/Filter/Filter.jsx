import React from "react";
import { useDispatch } from "react-redux";
import css from '../Filter/Filter.module.css'
import { setFilter } from "redux/contacts/slice";


const Filter = () =>{
    const dispatch = useDispatch()
    // const filter = useSelector(state=>state.filter)

    const changeFilter = e =>{
        dispatch(setFilter(e.target.value))
    };
    
    return(
        <label htmlFor="name">Find contacts by name
        <input name="name" type="text"
        onChange={changeFilter} 
        // value={filter}
        className={css.input}                
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
        />
    </label>
    )
}


export default Filter;
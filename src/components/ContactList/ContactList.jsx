import { useDispatch, useSelector } from 'react-redux';
import css from 'components/ContactList/ContactList.module.css';
import { deleteContactsThunk } from 'redux/contacts/thunk';

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts  = useSelector(state=>state.items)
  // console.log(contacts)

  const filter = useSelector(state=>state.filter)
//  console.log(filter, 'filter')
  const contactS = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  

  return (
  <ul className={css.contactItem}>
    {contactS().map(({ id, name, number }) => (
      <li className={css.contactList} key={id}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
        <button className={css.button} 
        onClick={() => dispatch(deleteContactsThunk(id))}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  )
}

export default ContactList;
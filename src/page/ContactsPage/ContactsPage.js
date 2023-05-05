import ContactList from "components/ContactList/ContactList";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";

export default function ContactsPage(){
    return(
        <>
        <h1>Phonebook</h1>
        <Contacts />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        </>
    )
}
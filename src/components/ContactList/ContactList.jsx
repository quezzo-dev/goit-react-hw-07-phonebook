import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem/ContactListItem";
// import { deleteContact } from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getContacts, removeContact} from '../../redux/contacts/contacts-operations'
import {getContactsFromState, getFilterFromState} from '../../redux/contacts/contacts-selectors'
export default function ContactList() {
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector(getFilterFromState);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact)=> 
    contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
  const visibleContacts = getVisibleContacts();
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={() => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
}


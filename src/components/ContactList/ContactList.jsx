import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactListContainer}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={() => onDeleteContact(contact.id)}
            />
          );
        })}
    </div>
  );
};

export default ContactList;

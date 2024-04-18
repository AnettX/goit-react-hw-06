import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";

import initialContacts from "./contacts.json";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const stringifyContacts = localStorage.getItem("contacts");
  //   if (!stringifyContacts) return initialContacts;

  //   const parsedContacts = JSON.parse(stringifyContacts);
  //   return parsedContacts;
  // });

  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.contacts.filters.name);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalUsers = {
      ...formData,
      id: nanoid(),
    };

    const action = { type: "contacts/ADD_CONTACT", payload: finalUsers };
    dispatch(action);

    // setContacts([...contacts, finalUsers]);
  };

  const onDeleteContact = (contactId) => {
    const action = { type: "contacts/DELETE_CONTACT", payload: contactId };
    dispatch(action);
    // setContacts((prevContacts) =>
    //   prevContacts.filter((contact) => contact.id !== contactId)
    // );
  };

  const onChangeContact = (event) => {
    // setFilter(event.target.value);
    const action = {
      type: "contacts/SET_FILTER",
      payload: event.target.value,
    };
    dispatch(action);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onChangeContact={onChangeContact} filter={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;

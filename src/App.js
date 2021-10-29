import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

import { addToContacts, removeFromContacts,updateFilter } from "./redux/contacts/contacts-actions";
import "./App.css";

const App = () => {
  const contactsItems = useSelector((store) => store.contacts.items);
  const filterString = useSelector((store) => store.contacts.filter);

  const dispatch = useDispatch();

  const handleFilter = () => {
    const filteredContacts = contactsItems.filter((item) =>
      item.name.toLowerCase().includes(filterString.toLowerCase())
    );
    return filteredContacts;
  };

  const handleChange = ({ target }) => {
    const { value} = target;
    dispatch(updateFilter(value))
  };

  const handleSubmit = (newContact) => {
    const findDoubleContact = contactsItems.find(
      (contact) => contact.name === newContact.name
    );
    if (findDoubleContact) {
      alert(`${findDoubleContact.name} is already in contacts`);
    } else {
      const action = addToContacts(newContact);
      console.log(action)
      dispatch(action);
    }
  };

  const handleDelete = (id) => {
    dispatch(removeFromContacts(id));
  };

  return (
    <div className="App">
      <h1 className="App-header">Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <Filter onChange={handleChange} data={contactsItems} filter={filterString} />
      <ContactList data={handleFilter()} onDelete={handleDelete} />
    </div>
  );
};

export default App;

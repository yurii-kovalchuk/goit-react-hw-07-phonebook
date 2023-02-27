import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeValue } from 'components/redux/filterSlice';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { AppWrapper } from './App.styled';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'components/redux/selectors';
import {
  addContact,
  fetchContacts,
  deleteContact,
} from 'components/redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = (name, phone) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
    }
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const updateFilter = e => {
    dispatch(changeValue(e.target.value));
  };

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const vivsibleContacts = filteredContacts();

  return (
    <AppWrapper>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={updateFilter} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList contacts={vivsibleContacts} onDelete={deleteContacts} />
    </AppWrapper>
  );
};

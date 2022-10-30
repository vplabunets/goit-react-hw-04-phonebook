import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import {
  getlocalStorage,
  setLocalStorage,
} from '/projects/react/goit-react-hw-04-phonebook/src/utils/localStorage';
import { Filter } from '../Filter/Filter';
import phonedata from '/projects/react/goit-react-hw-04-phonebook/src/constants/phonedata.json';
import { AppWrap, PageTitle, SectionTitle } from './App.styled';
export const App = () => {
  const [contacts, setContacts] = useState(phonedata);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getlocalStorage(contacts, setContacts, 'localStorageData');
    setLocalStorage(contacts, 'localStorageData');
  }, [contacts]);

  const addContacts = contact => {
    const { name } = contact;
    // const zzz = { id: nanoid(), ...contact };
    for (const contactCard of contacts) {
      if (contactCard.name === name) {
        return alert(`${name} is already contacts.`);
      }
    }
    setContacts(previousState => {
      return [...previousState, { id: nanoid(), ...contact }];
    });
  };
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    let aaa = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return aaa;
  };

  const contactCleaner = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <AppWrap>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm onSubmit={addContacts}></ContactForm>
      <SectionTitle>Contacts</SectionTitle>
      <Filter changeFilter={changeFilter} filter={filter}></Filter>
      <ContactList
        contactCleaner={contactCleaner}
        contacts={filterContacts}
      ></ContactList>
    </AppWrap>
  );
};

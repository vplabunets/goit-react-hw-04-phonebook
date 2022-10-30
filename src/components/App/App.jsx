import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import phonedata from '../constants/phonedata.json';

import { getlocalStorage, setLocalStorage } from '../utils/localStorage';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
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

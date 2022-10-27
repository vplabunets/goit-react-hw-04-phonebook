import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrap, PageTitle, SectionTitle } from './App.styled';
// import axios from 'axios';
export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  // localStorage.setItem('contacts', JSON.stringify(contacts))
  //    if (JSON.parse(localStorage.getItem('contacts'))) {
  //     setContacts(JSON.parse(localStorage.getItem('contacts'))
  // }
  useEffect(() => {
    console.log('виконується ефект');
    //
    if (JSON.parse(window.localStorage.getItem('contactsData'))) {
      // console.log('виконується getItem');
      setContacts(JSON.parse(localStorage.getItem('contactsData')));
    }
    localStorage.setItem('contactsData', JSON.stringify(contacts));
    // console.log('виконується getItem');
    // console.log(contacts);
    return;
  }, []);

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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state !== prevState) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const changeFilter = event => {
    console.log(contacts);
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    console.log(contacts);
    // const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactCleaner = id => {
    console.log(contacts);
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

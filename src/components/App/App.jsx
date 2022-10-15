import { ContactForm } from '../ContactForm/ContactForm';
import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrap, PageTitle, SectionTitle } from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = contacts => {
    const { name, number } = contacts;
    const contact = { id: nanoid(), name, number };
    for (const contactCard of this.state.contacts) {
      if (contactCard.name === name) {
        return alert(`${name} is already contacts`);
      }
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  changeFilter = event => this.setState({ filter: event.currentTarget.value });

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  contactCleaner = id => {
    // console.log(event);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredList = this.filterContacts();
    return (
      <AppWrap>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm onSubmit={this.addContacts}></ContactForm>
        <SectionTitle>Contacts</SectionTitle>
        <Filter changeFilter={this.changeFilter} filter={filter}></Filter>
        <ContactList
          contactCleaner={this.contactCleaner}
          filter={filter}
          contacts={filteredList}
        ></ContactList>
      </AppWrap>
    );
  }
}

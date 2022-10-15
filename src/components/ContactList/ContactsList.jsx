import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
export const ContactList = ({ contacts, contactCleaner }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          contactCleaner={contactCleaner}
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

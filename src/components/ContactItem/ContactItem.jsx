import React from 'react';
import { ContactButton, ContactItemLi } from './ContactItem.styled';

export const ContactItem = ({ contact, contactCleaner }) => {
  const { name, number } = contact;

  return (
    <ContactItemLi>
      <span>{name}:</span>
      <span>{number}</span>
      <ContactButton
        contact={contact.id}
        type="button"
        onClick={() => contactCleaner(contact.id)}
        // onClick={contactCleaner(contact.id)}
      >
        Delete
      </ContactButton>
    </ContactItemLi>
  );
};

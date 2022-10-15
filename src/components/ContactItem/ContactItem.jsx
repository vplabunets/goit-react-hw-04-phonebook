import React from 'react';

export const ContactItem = ({ contact, contactCleaner }) => {
  const { name, number } = contact;

  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button
        contact={contact.id}
        type="button"
        onClick={() => contactCleaner(contact.id)}
        // onClick={contactCleaner(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

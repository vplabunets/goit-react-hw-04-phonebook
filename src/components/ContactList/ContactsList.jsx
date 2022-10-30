import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.Styled';
export const ContactList = ({ contacts, contactCleaner }) => {
  return (
    <List>
      {contacts().map(contact => (
        <ContactItem
          contactCleaner={contactCleaner}
          key={contact.id}
          contact={contact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  contactCleaner: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, contactCleaner }) => {
  const { name, number } = contact;
  return (
    <Wrapper>
      <span>{name}:</span>
      <span>{number}</span>
      <Button
        contact={contact.id}
        type="button"
        onClick={() => contactCleaner(contact.id)}
      >
        Delete
      </Button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  contactCleaner: PropTypes.func.isRequired,
};

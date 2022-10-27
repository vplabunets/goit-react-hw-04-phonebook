import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormEl,
  FormWrap,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.Styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const handleChange = evt => {
    evt.currentTarget.name === 'name' && setName(evt.target.value);
    evt.currentTarget.name === 'number' && setNumber(evt.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormWrap>
        <FormLabel>
          Name
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormWrap>
    </FormEl>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

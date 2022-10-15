import React, { Component } from 'react';
import {
  FormEl,
  FormWrap,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.Styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormEl onSubmit={this.handleSubmit}>
        <FormWrap>
          <FormLabel>
            Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </FormLabel>
          <FormLabel>
            Number
            <FormInput
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </FormWrap>
      </FormEl>
    );
  }
}

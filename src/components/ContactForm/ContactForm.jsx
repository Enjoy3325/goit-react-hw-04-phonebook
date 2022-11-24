import PropTypes from 'prop-types';
import {
  SectionForm,
  Form,
  LabelForm,
  Input,
  TextForm,
  ButtonForm,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export const INPUT_CONTACT = { name: '', number: '' };
export class ContactForm extends Component {
  state = { ...INPUT_CONTACT };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INPUT_CONTACT });
  };
  render() {
    const { name, number } = this.state;
    return (
      <SectionForm>
        <Form onSubmit={this.handleSubmit}>
          <LabelForm>
            <TextForm>Name</TextForm>
            <Input
              id={nanoid()}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </LabelForm>
          <LabelForm>
            <TextForm>Number</TextForm>
            <Input
              id={nanoid()}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </LabelForm>

          <ButtonForm type="submit">Add contact</ButtonForm>
        </Form>
      </SectionForm>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

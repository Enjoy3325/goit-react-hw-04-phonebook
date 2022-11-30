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
import { useState } from 'react';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <SectionForm>
      <Form onSubmit={handleSubmit}>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </LabelForm>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    </SectionForm>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

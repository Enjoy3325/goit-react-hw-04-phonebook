import { Wrapper } from './App.styled';
import { nanoid } from 'nanoid';
import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import React, { Component } from 'react';

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
  // Витягую данні з Локал сторедж setItem
  componentDidMount() {
    console.log('DidMount :>> ');
    const contacts = localStorage.getItem('contacts');

    const parseContacts = JSON.parse(contacts);
    console.log('parseContacts :>> ', parseContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  // Оновлюю локал сторедж на
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  //Додаю новий контакт
  getNewContact = dataValue => {
    if (this.checkContacts(dataValue.name)) {
      return alert(`${dataValue.name} is already in contacts`);
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { id: nanoid(), ...dataValue }],
      };
    });
    console.log('----> this.state', this.state);
  };
  checkContacts = contact => {
    return this.state.contacts.find(
      el => el.name.toLowerCase() === contact.toLowerCase()
    );
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handlDeleteContacts = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== id;
      }),
    });
  };

  filterContact = () => {
    const filterNormalized = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalized);
    });
  };
  render() {
    const { filter } = this.state;
    return (
      <Wrapper>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.getNewContact} />
        </div>

        <section>
          <div>
            <Filter value={filter} onChange={this.ChangeFilter} />
            <h2>Contacts</h2>
            <ListContacts
              contacts={this.filterContact()}
              handlDeleteContacts={this.handlDeleteContacts}
            />
          </div>
        </section>
      </Wrapper>
    );
  }
}

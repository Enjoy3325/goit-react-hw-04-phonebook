import { Wrapper } from './App.styled';
import { nanoid } from 'nanoid';
import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);
  useEffect(prevState => {
    if (contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, []);

  const getNewContact = dataValue => {
    if (checkContacts(dataValue.name)) {
      return alert(`${dataValue.name} is already in contacts`);
    }
    setContacts(contacts => [...contacts, { id: nanoid(), ...dataValue }]);
  };

  const checkContacts = contact => {
    return contacts.find(el => el.name.toLowerCase() === contact.toLowerCase());
  };

  const ChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handlDeleteContacts = id => {
    setContacts(
      contacts.filter(contact => {
        return contact.id !== id;
      })
    );
  };

  const filterContact = () => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalized);
    });
  };

  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={getNewContact} />
      </div>

      <section>
        <div>
          <Filter value={filter} onChange={ChangeFilter} />
          <h2>Contacts</h2>
          <ListContacts
            contacts={filterContact()}
            handlDeleteContacts={handlDeleteContacts}
          />
        </div>
      </section>
    </Wrapper>
  );
};

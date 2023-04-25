import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledContainer, StyledSubtitle, StyledTitle } from './App.styled';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmit = (name, number) => {
    const contact = { id: nanoid(), name, number };
    contacts.some(
      i =>
        i.name.toLowerCase() === contact.name.toLowerCase() ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <StyledContainer>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm onSubmit={formSubmit} />
      <StyledSubtitle>Contacts</StyledSubtitle>
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList contacts={findContacts()} deleteContact={deleteContact} />
    </StyledContainer>
  );
};

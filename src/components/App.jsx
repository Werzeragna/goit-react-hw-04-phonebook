import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledContainer, StyledSubtitle, StyledTitle } from './App.styled';


const LOCAL_STORAGE_KEY = 'contacts'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedContacts = JSON.parse(contacts)
    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contact) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.contacts))
    }
  }

  formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    this.state.contacts.some(
      i =>
        i.name.toLowerCase() === contact.name.toLowerCase() ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <StyledContainer>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm onSubmit={this.formSubmit} />
        <StyledSubtitle>Contacts</StyledSubtitle>
        <Filter filter={filter} changeFilterInput={this.changeFilterInput} />
        <ContactList
          contacts={this.findContacts()}
          deleteContact={this.deleteContact}
        />
      </StyledContainer>
    );
  }
}

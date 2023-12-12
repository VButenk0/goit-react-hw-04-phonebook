import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import styled from 'styled-components';

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

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('CONTACTS_DATA'));

    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'CONTACTS_DATA',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = contact => {
    const { name, number } = contact;

    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      ...contact,
      id: nanoid(),
      name,
      number,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredData = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <StyledContainer>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChangeFilter} />
        <ContactsList
          contacts={this.getFilteredData()}
          onDelete={this.handleDeleteContact}
        />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  padding-left: 20px;
`;

import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';
import { StyledContainer } from './Container.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsData = JSON.parse(
      window.localStorage.getItem('CONTACTS_DATA')
    );

    if (contactsData?.length) {
      setContacts(contactsData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('CONTACTS_DATA', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const { name, number } = contact;

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      ...contact,
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [...prev, newContact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredData = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <Form addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleChangeFilter} />
      <ContactsList
        contacts={getFilteredData()}
        onDelete={handleDeleteContact}
      />
    </StyledContainer>
  );
};

// export class App extends Component {
//   state = {
// contacts: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//     filter: '',
//   };

//   componentDidMount() {
// const contacts = JSON.parse(window.localStorage.getItem('CONTACTS_DATA'));

// if (contacts?.length) {
//   this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
// if (prevState.contacts.length !== this.state.contacts.length) {
//   window.localStorage.setItem(
//     'CONTACTS_DATA',
//     JSON.stringify(this.state.contacts)
//   );
//     }
//   }

// addContact = contact => {
//   const { name, number } = contact;

//   if (this.state.contacts.some(contact => contact.name === name)) {
//     return alert(`${name} is already in contacts.`);
//   }

//   const newContact = {
//     ...contact,
//     id: nanoid(),
//     name,
//     number,
//   };

//   this.setState(prev => ({
//     contacts: [...prev.contacts, newContact],
//   }));
// };

// handleChangeFilter = e => {
//   this.setState({ filter: e.target.value });
// };

// getFilteredData = () => {
//   return this.state.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//   );
// };

// handleDeleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };

//   render() {
//     const { filter } = this.state;

// return (
//   <StyledContainer>
//     <h1>Phonebook</h1>
//     <Form addContact={this.addContact} />

//     <h2>Contacts</h2>
//     <Filter filter={filter} onChange={this.handleChangeFilter} />
//     <ContactsList
//       contacts={this.getFilteredData()}
//       onDelete={this.handleDeleteContact}
//     />
//   </StyledContainer>
// );
//   }
// }

// const StyledContainer = styled.div`
//   padding-left: 20px;
// `;

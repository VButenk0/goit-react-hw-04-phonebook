import { Component } from 'react';
import { StyledForm, StyledInput, StyledButton } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <StyledInput
          onChange={this.handleChange}
          id="name"
          type="text"
          name="name"
          value={name}
          required
        />
        <br />
        <label htmlFor="number">Number</label>
        <br />
        <StyledInput
          onChange={this.handleChange}
          id="number"
          type="tel"
          name="number"
          value={number}
          required
        />
        <br />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

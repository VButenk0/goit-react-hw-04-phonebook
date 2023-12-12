import { StyledForm, StyledInput, StyledButton } from './Form.styled';
import { useState } from 'react';

export const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <StyledInput
        onChange={handleChangeName}
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
        onChange={handleChangeNumber}
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
};

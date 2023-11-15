import React, { useState } from 'react';
import '../App.css';

const RecebeComponent = ({ onNameChange }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    onNameChange(name);
    alert(`Nome digitado: ${name}`);
  };

  return (
    <div className="input-container">
      <label htmlFor="nameInput">Digite seu nome: </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleInputChange}
        className="input-field"
      />
      <button onClick={handleButtonClick} className="submit-button">
        Enviar
      </button>
    </div>
  );
};

export default RecebeComponent;

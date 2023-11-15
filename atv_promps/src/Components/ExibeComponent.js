import React from 'react';
import '../App.css';

const ExibeComponent = ({ name }) => {
  return (
    <div>
      <h2>Nome digitado:</h2>
      <p>{name}</p>
    </div>
  );
};

export default ExibeComponent;

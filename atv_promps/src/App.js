import React, { useState } from 'react';
import RecebeComponent from './Components/RecebeComponent';
import ExibeComponent from './Components/ExibeComponent';

function App() {
  const [userName, setUserName] = useState('');

  const handleNameChange = (name) => {
    setUserName(name);
  };

  return (
    <div className="container">
      <RecebeComponent onNameChange={handleNameChange} />
      <ExibeComponent name={userName} />
    </div>
  );
}

export default App;

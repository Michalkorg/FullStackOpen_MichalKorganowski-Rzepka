import { useState, useEffect } from 'react';
import Numbers from './components/Numbers';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newNumber, setNewNumber] = useState(''); // Stan dla nowego numeru
  const [filtered, setFiltered] = useState(''); // Stan dla filtrowania


  const handleChange = (event, type) => {
    switch (type) {
      case 'name':
        setNewName(event.target.value);
        break;
      case 'number':
        setNewNumber(event.target.value);
        break;
      case 'filtered':
        setFiltered(event.target.value);
        break;
      default:
        break;
    }
  };
  
  const refreshInputs = () => {
    setNewName('');
    setNewNumber('');
  };

  const duplicates = () => {
    
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter: <input />
        </div>
      </form>
      <Numbers {...{ persons, filtered }} />
    </div>
  );
};

export default App;
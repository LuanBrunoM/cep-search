import React from 'react';
import './styles/styles.css';
import api from './services/api'
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import AddressDetails from './components/AddressDetails';

const App = () => {
  const [input, setInput] = React.useState('');
  const [cep, setCep] = React.useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Preencha o campo com um CEP');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch {
      alert('Erro ao buscar o CEP. Tente novamente!');
      setInput('');
    }
  }

  function handleKeyDown(event) {
    event.key === "Enter" && handleSearch()
  }

  return (
    <div className='container'>
      <Header />
      <SearchForm
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />
      <AddressDetails cep={cep} />
    </div>
  )
}

export default App
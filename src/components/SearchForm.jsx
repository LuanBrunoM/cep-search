import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchForm = ({ input, setInput, handleSearch, handleKeyDown }) => {
  return (
    <div className='containerInput'>
      <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="buttonSearch"
        onClick={handleSearch}
      >
        <FiSearch size={25} color="#FFF" />
      </button>
    </div>
  );
};

export default SearchForm;

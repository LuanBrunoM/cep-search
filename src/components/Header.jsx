import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <h1 className='title'>
      CEP Search <FiSearch size={70} color="#FFF" />
    </h1>
  );
};

export default Header;

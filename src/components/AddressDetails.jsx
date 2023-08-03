import React from 'react';

const AddressDetails = ({ cep }) => {
  return cep.cep ? (
    <main className="main">
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Bairro: {cep.bairro}</span>
      <span>Cidade: {cep.localidade} - {cep.uf}</span>
      {cep.complemento === '' ? null : (<span>Complemento: {cep.complemento}</span>)}
    </main>
  ) : null;
};

export default AddressDetails;

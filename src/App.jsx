import React from 'react'
import { FiSearch } from 'react-icons/fi'

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>CEP Search</h1>

      <div className='containerInput'>
        <input
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>

        <main className="main">
          <h2>CEP: 79003222</h2>

          <span>Rua </span>
          <span>Complemento: </span>
          <span>Sertão do Maruim</span>
          <span>São José - SC</span>
        </main>
      </div>
    </div>
  )
}

export default App
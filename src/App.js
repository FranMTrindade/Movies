import React, { useEffect, useState } from 'react'
import { Container } from './styles.js'
import api from "./services/api";


function App() {

  const [filmes, setFilmes] = useState([])

  useEffect(() =>{

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
    }

    loadFilmes();

  },[])


  return (

  <Container>
    <div>
      {filmes.map(filme => (
        <div key={filme.id}>
          <h1>
            {filme.nome}
          </h1>
            <p>
            {filme.sinopse}
            </p>
            <img src={filme.foto}/>
        </div>
      ))}    
    </div>
  </Container>
  );
}

export default App;

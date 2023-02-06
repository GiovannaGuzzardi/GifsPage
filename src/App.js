import './App.css';
import React, { useState } from "react";
import Img from './componentes/ListGif/ListGif';
import LikeProvider from './context/curtidas';
import pokeball from '../src/pokeball.png'

function App() {

  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState("");


  const api = {
    key: "HqE5P3JKqV9FpldQJmbIIWW23vJg9z5s",
    acao: "search",
    busca: query,
    limite: 6,
  };




  const consumer = (evt) => {
    fetch(`//api.giphy.com/v1/gifs/${api.acao}?api_key=${api.key}&q=${api.busca}&limit=${api.limite}&offset=0&rating=g&lang=pt`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setGifs(result)
        setQuery("")
      })
  }

  return (
    <LikeProvider>
      <div className="app">
        <main className="main">
          <div className='navBar'>
            <div>
              <img className='iconPoke' src={pokeball} alt="icone" />
              <h1></h1>
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Pesquisa..."
              />
              <button onClick={consumer} type="button">Click Me!</button>
            </div>
          </div>
          {gifs.data && (
            <div className='listGif'>
              <Img arr={gifs.data} />
            </div>)
          }
        </main>
      </div >
    </LikeProvider>
  );
}
export default App;

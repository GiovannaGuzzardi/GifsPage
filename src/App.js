
import React, { useState } from "react";
import './App.css';
import Img from './componentes/ListGif/ListGif';
import LikeProvider from './context/curtidas';

function App() {

  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState("");
  const [status, setStatus] = useState(false)


  const api = {
    key: "HqE5P3JKqV9FpldQJmbIIWW23vJg9z5s",
    acao: "search",
    busca: query,
    limite: 27,
  };




  const consumer = (evt) => {
    if (status === false) {
      document.getElementById("Input").focus()
      setStatus(true)
    }
    else {
      if (query === "") {
        alert("Você buscou um fantama! não tem nada ai!")
        api.busca = "pokemon fantasma"
        api.limite = 3
      }
      console.log(api.busca)
      fetch(`//api.giphy.com/v1/gifs/${api.acao}?api_key=${api.key}&q=${api.busca}&limit=${api.limite}&offset=0&rating=g&lang=pt`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          setGifs(result)
          setQuery("")
        })
      setStatus(false)
    }
  }

  return (
    <LikeProvider>
      <div className="app">
        <main className="main">
          <div className='navBar'>
            <div className="flex">
              <img className='iconPoke' src="/pokeball.png" alt="icone" />
              <h1 className="titulo">PokeGif</h1>
            </div>
            <div className="flex">
              <input
                id="Input"
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Pesquisa..."
                className={status ? "Input" : "InputI"}
              />
              <button onClick={consumer} type="button" className="Button"> <i class="fa-solid fa-magnifying-glass Button"></i></button>
            </div>
          </div>
          {gifs.data ? (
            <div className='listGif'>
              <Img arr={gifs.data} />
            </div>)
            :
            <div className="inicial">
              <img className="gifPoke" src="https://media3.giphy.com/media/42wQXwITfQbDGKqUP7/giphy-downsized.gif?cid=318e1caazy8qswujarimtxn0q694ej20sghuap5c4khb366t&amp;rid=giphy-downsized.gif&amp;ct=g" alt="animation film GIF by POKÉMON Detective Pikachu" />
              <h2> Bem-vindo a este divertido mundo de gifs.</h2>
              <h2> Pesquise o que você quiser</h2>

            </div>
          }
        </main>
      </div >
    </LikeProvider>
  );
}
export default App;

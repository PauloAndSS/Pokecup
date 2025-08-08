import './App.css';
import {allMovesAPI, ItensAPI, MovesAPI, PokemonAPI} from './ts/API/PokemonAPI';
import RespositorioGeral from './ts/controller/RepositorioGeral';
import Pokemon from './ts/model/Pokemon';
import Movimento from './ts/model/Movimento';
import { useEffect, useState } from 'react';
import ElementoPokemon from './ts/model/ElementoPokemon';
import SearchElementoPoke from './ts/controller/SearchElementoPoke';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import VGC from './pages/VGC/VGC';
import TeamBuilder from './pages/VGC/TeamBuilder/TeamBuilder';

function App() {
  return(
    <html>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home()}/>
          <Route path='/VGC' element={VGC()}/>
          <Route path='/VGC/TeamBuilder' element={TeamBuilder()}/>
        </Routes>
      </BrowserRouter>
    </html>
  )
}

export default App;

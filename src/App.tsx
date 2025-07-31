import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import BuilderTeam from './pages/VGC/BuilderTeam/BuilderTeam';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home()}/>
        <Route path='/VGC' element={Home()}/>
        <Route path='/VGC/TeamBuilder' element={BuilderTeam()}/>
        <Route path='/Login' element={Home()}/>
        <Route path='/Register' element={Home()}/>
        <Route path='*' element={Home()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

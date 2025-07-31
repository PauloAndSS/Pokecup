import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import BuilderTeam from './pages/VGC/BuilderTeam/BuilderTeam';
import VGC from './pages/VGC/VGC';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home()}/>
        <Route path='/VGC' element={VGC()}/>
        <Route path='/VGC/TeamBuilder' element={BuilderTeam()}/>
        <Route path='/Login' element={Login()}/>
        <Route path='/Register' element={Register()}/>
        <Route path='*' element={PageNotFound()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import VGC from './pages/VGC/VGC';
import TeamBuilder from './pages/VGC/TeamBuilder/TeamBuilder';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PageNotWorking from './pages/PageNotWorking/PageNotWorking';
import { JSX } from 'react';

function App():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home()}/>
        <Route path="/TCG" element={PageNotWorking()}/>
        <Route path="/TCG/DeckBuilder" element={PageNotWorking()}/>
        <Route path="/VGC" element={VGC()}/>
        <Route path="/VGC/TeamBuilder" element={TeamBuilder()}/>
        <Route path="/Login" element={Login()}/>
        <Route path="/Register" element={PageNotWorking()}/>
        <Route path="*" element={PageNotFound()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

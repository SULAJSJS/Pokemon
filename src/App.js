import './App.css';
import React from 'react';
import 'macro-css';
import { Routes, Route } from "react-router-dom";


import NavBar from './pages/NavBar/NavBar';
import Catalog from './pages/Catalog/Catalog';
import Footer from './pages/Footer/Footer';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <div className="App">
      <NavBar />



      <Routes>
        <Route path='/' element={<Catalog />}/>
        <Route path='/pokemon/:id' element={<PokemonPage />}/>
      </Routes>

      
      <Footer />
    </div>
  );
}



export default App;


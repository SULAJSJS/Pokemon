import './App.css';
import React from 'react';
import 'macro-css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from 'react-bootstrap';

import NavBar from './pages/NavBar/NavBar';
import Catalog from './pages/Catalog/Catalog';
import Footer from './pages/Footer/Footer';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
      <Router>
        <NavBar />
        <Container>
          <Route exact path='/' component={Catalog} />
          <Route path='/pokemon/:id' component={PokemonPage}/>
        </Container>
        <Footer />
       </Router>
  );
}



export default App;


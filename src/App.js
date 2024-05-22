import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import LaFerme from './components/Pages/LaFerme';
import LeConcept from './components/Pages/LeConcept';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer';
import Politiques from './components/Pages/Politiques';
import MentionLegales from './components/Pages/MentionLegales';
import ReseauxSociaux from './components/ReseauxSociaux';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar/>
    <Routes>
      <Route path='/Home' exact Component={Home}/>
      <Route path='/LaFerme' Component={LaFerme}/>
      <Route path='/LeConcept' Component={LeConcept}/>
      <Route path='/Contact' Component={Contact}/>
      <Route path='/MentionLegales' Component={MentionLegales}/>
      <Route path='/PolitiquesDeConfidentialite' Component={Politiques}/>
    </Routes>
    <ReseauxSociaux/>
    <Footer></Footer>
    </Router>
    </>
  );
}


export default App;

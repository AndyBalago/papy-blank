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
import CookieConsent from "react-cookie-consent";



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Home' exact Component={Home} />
          <Route path='/LaFerme' Component={LaFerme} />
          <Route path='/LeConcept' Component={LeConcept} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/MentionLegales' Component={MentionLegales} />
          <Route path='/PolitiquesDeConfidentialite' Component={Politiques} />
        </Routes>
        <ReseauxSociaux />
        <Footer></Footer>
        <CookieConsent
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              // triggered if user scrolls past threshold
              alert("Accept was triggered by user scrolling");
            } else {
              alert("Accept was triggered by clicking the Accept button");
            }
          }}
          enableDeclineButton
          onDecline={() => {
            alert("OK!");
          }}
          debug={true}
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Ce site Web utilise des cookies pour améliorer l'expérience utilisateur.{" "}
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>
      </Router>

    </>
  );
}


export default App;

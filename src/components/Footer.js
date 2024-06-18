import React, { useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import '../components/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);


  return (
    <div className='footer-container'>
      <div className='infos-footer-container'>
        <div className='footer-infos-essentiels'>
          <h3>Adresse</h3>
          <a href='https://g.co/kgs/gKsu4jN' target="_blank" rel="noreferrer">
          <p>368 Rue de l'Église,</p>
          <p>59320 Erquinghem-le-Sec</p>
          </a>
        </div>
        <div className='footer-reseaux'>
          <h3>Suivez nous!</h3>
          <a href='https://www.facebook.com/profile.php?id=100093728487557'><FaFacebook className='icons-footer-reseaux' /></a>
          <a href='https://www.instagram.com/papyblank?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><FaInstagram className='icons-footer-reseaux' /></a>
          <a href='mailto:papyblank@gmail.com'><FaEnvelope className='icons-footer-reseaux' /></a>
        </div>
        <div className='footer-reservation'>
          <h3>Commandes</h3>
          <p><a href='tel:+33661752886'>+33 6 61 75 28 86</a></p>
          <a href="mailto:papyblank@gmail.com">papyblank@gmail.com</a>
        </div>
      </div>
      <div className='footer-politiques'>
      <Link to="/MentionLegales">Mention légales</Link>
      <Link to="/PolitiquesDeConfidentialite">Politique de confidentialité</Link>
      </div>
      <div className='copyright'>
        <p>&copy;Tous droits réserves Papy Blank {currentYear}</p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react';
import { FaFacebook, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";
import './ReseauxSociaux.css';

const ReseauxSociaux = () => {
    return (
        <div className="social-media-module">
            <a href="https://www.facebook.com/profile.php?id=100093728487557" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Facebook">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/papyblank/" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Instagram">
                <FaInstagram />
            </a>
            <a href="mailto:papyblank@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Twitter">
                <FaEnvelope />
            </a>
            <a href="tel:+33661752886" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Teléfono">
                <BsFillTelephoneFill />
            </a>
        </div>
    );
}

export default ReseauxSociaux;

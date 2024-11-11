// BannerSection.js
import React, { useState } from 'react';
import { Button } from './Button';
import './BannerSection.css';
import { MdDeliveryDining } from "react-icons/md";
import ModalCommander from './ModalCommander';

const BannerSection = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='banner-container'>
            <div className='video-overlay'></div>
            <video className='background-video' autoPlay loop muted>
                <source src="/Videos/Intro_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='cont-banner-descript'>
                <h3 className='sous-titre-banner'>Bienvenue chez</h3>
                <img className='logo_banner_home' src="./Images/logo_banner.png" alt="" />
                <h4 className='texte-antespara'>Bruncher, Déjeuner, Gouter</h4>
                <p className='para-banner'>"Des fruits et légumes cultivés et cuisinés sur place dans la ferme familiale"</p>
                <div className='banner-btns'>
                    <Button
                        className='btns button-banner-commander'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={openModal}
                    >
                        Commander <MdDeliveryDining className='moto-icon' />
                    </Button>
                </div>
            </div>

            {/* Utilizar ModalCommande */}
            <ModalCommander showModal={showModal} closeModal={closeModal} />
        </div>
    )
}

export default BannerSection;

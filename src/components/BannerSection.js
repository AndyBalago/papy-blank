import React from 'react'
import { Button } from './Button'
import './BannerSection.css'
import { FaShoppingCart } from "react-icons/fa";

const BannerSection = () => {
  return (
    <div className='banner-container'>
    <div className='video-overlay'></div>
    <video className='background-video' autoPlay loop muted>
        <source src="/Videos/Intro_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className='banner-decript'>
        <h3 className='sous-titre-banner'>Bienvenue chez</h3>
        <h2 className='titre-banner'>Papy Blank</h2>
        <p className='para-banner'>La ferme directment au resto</p>
        <div className='banner-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Reservation
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Boutique <FaShoppingCart className='shop-cart'/>
            </Button>
        </div>
    </div>
</div>

  )
}

export default BannerSection
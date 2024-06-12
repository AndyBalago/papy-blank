import React from 'react'
import { Button } from './Button'
import './BannerSection.css'
import { MdDeliveryDining } from "react-icons/md";

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
        {/* <h2 className='titre-banner'>Papy Blank</h2> */}
        <img className='logo_banner_home' src="./Images/logo_banner.png" alt=""/>
        <p className='para-banner'>La ferme directment au resto</p>
        <div className='banner-btns'>
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Reservation
            </Button> */}
            <Button className='btns button-banner-commander' buttonStyle='btn--primary' buttonSize='btn--large'>
                <a className='vinculo-commander-banner' href='https://papyblank.byclickeat.fr/store/entrypoint'>Commander</a> <MdDeliveryDining className='shop-icon'/>
            </Button>
        </div>
    </div>
</div>

  )
}

export default BannerSection
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
                <div className='cont-banner-descript'>
                    <h3 className='sous-titre-banner'>Bienvenue chez</h3>
                    <img className='logo_banner_home' src="./Images/logo_banner.png" alt="" />
                    <h4 className='texte-antespara'>Bruncher, Déjeuner, Gouter</h4>
                    <p className='para-banner'>"Des fruits et légumes cultivés et cuisinés sur
                    place dans la ferme familiale"</p>
                    <div className='banner-btns'>
                        <Button className='btns button-banner-commander' buttonStyle='btn--primary' buttonSize='btn--large'>
                            <a className='vinculo-commander-banner' href='https://papyblank.byclickeat.fr/store/entrypoint'>Commander</a> <MdDeliveryDining className='moto-icon' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BannerSection
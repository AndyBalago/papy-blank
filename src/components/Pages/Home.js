import React, { useEffect } from 'react';
import '../../App';
import BannerSection from '../BannerSection';
import './Home.css';
import { Link } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import GallerieEvents from '../GallerieEvents';

function Home() {
    useEffect(() => {
        const closeLightboxOnOutsideClick = (event) => {
            if (event.target.classList.contains('overlay')) {
                window.location.hash = "#!";
            }
        };

        document.addEventListener('click', closeLightboxOnOutsideClick);

        return () => {
            document.removeEventListener('click', closeLightboxOnOutsideClick);
        };
    }, []);


    return (
        <div className="homepage">
            <BannerSection />
            <div className='homepage-content'>
                {/* <div class="skew-cc"></div> */}
                <section className='home-description section'>
                    <div className='home-text'>
                        <h2 className='titre-descrp titre-descr'> PAPY BLANK C'EST QUOI ?</h2>
                        <p className='paragraphe-home para-descr'>Papy Blank est un concept unique : Nous transformons des
                            produits cultivés dans la ferme familiale pour vous concocter
                            des brunchs, déjeuner ou goûter</p>
                    </div>
                    <figure className='images-home descr-img'>
                        <img className='images-sections imagen-home-descr' src='/Images/Brunch5.jpeg' alt='Home' />
                    </figure>
                </section>
                <div class="section-divider"></div>
                <section className='home-histoire section'>
                    <figure className='images-home histoire-img'>
                        <img className='images-sections imagen-hist' src='/Images/Ferme-histoire.png' alt='Home' />
                    </figure>
                    <div className='home-text-histoire'>
                        <h2 className='titre-descrp titre-hist'> PAPY BLANK, UNE HISTOIRE FAMILIALE</h2>
                        <p className='paragraphe-home para-hist'>
                            Mélange de plusieurs savoir-
                            faire, mes parents agriculteur cultivent des fruits et légumes à

                            quelques kilomètre de Lille.<br />
                            Moi, professionnel de la
                            restauration, je les transforme pour les sublimer.
                        </p>
                    </div>
                </section>
                {/* <div class="skew-c"></div> */}
                <section className='home-mots-createur section'>
                    <div className='home-text-createur'>
                        <h2 className='titre-descrp'>MOTS DU CRÉATEUR:</h2>
                        <p className='paragraphe-home mots'>
                            “Après de multiples expériences en
                            restauration en France et à l'étranger, je
                            voulais rentrer dans le nord et créer un
                            concept qui me ressemble. Une offre
                            mettant en avant mon savoir faire et celui
                            de mes parents”
                        </p>
                        <p className='paragraphe-home signature-chef mots'>Mathieu</p>
                        {/* <img className='foto-chef' src="./Images/foto_chef2.jpg" alt=""></img> */}
                    </div>
                </section>
                <section className='home-bottom section'>
                    <div className='container-concept-home'>
                        <div className='text-concept-home'>
                            <p className='paragraphe-bottom-home un'>
                                Papy blank s'adapte en fonction des fruits et
                                légumes récoltés afin de vous proposez une offre
                                aussi bien sucrée que salée.
                            </p>
                            <span className='cont-buttons'><button className='button-home buttom-concept-home'><Link to='/leconcept' className='link-concept'>LE CONCEPT</Link></button></span>
                        </div>
                        <div className='gallerie-concept-home thumbs'>
                            <a href="#target1">
                                <img src='/Images/Cultivo1.jpg' alt='' /></a>
                            <a href="#target2">
                                <img src='/Images/Cultivo3.jpg' alt='' /></a>
                            <a href="#target3">
                                <img src='/Images/Fruits1.jpg' alt='' /></a>
                            <a href="#target4">
                                <img src='/Images/Cultivo2.JPG' alt='' /></a>
                        </div>
                        <div class="lightbox">
                            <div className="overlay" onClick={() => window.location.hash = "#!"}></div>
                            <div class="target" id="target1">
                                <span>
                                </span>
                                <div class="content">
                                    <img src='/Images/Cultive2.jpg' alt='' />
                                </div>
                                <a href="#target2" class="nav" title="next"><FaArrowAltCircleRight /></a>
                            </div>
                            <div class="target" id="target2">
                                <a href="#target1" class="nav" title="previous"><FaArrowAltCircleLeft /></a>
                                <div class="content"><img src='/Images/sale-plat.jpg' alt='' /></div>
                                <a href="#target3" class="nav" title="next"><FaArrowAltCircleRight /></a>
                            </div>
                            <div class="target" id="target3">
                                <a href="#target2" class="nav" title="previous"><FaArrowAltCircleLeft /></a>
                                <div class="content"><img src='/Images/Fruits1.jpg' alt='' /></div>
                                <a href="#target4" class="nav" title="next"><FaArrowAltCircleRight /></a>
                            </div>
                            <div class="target" id="target4">
                                <a href="#target3" class=" nav" title="previous"><FaArrowAltCircleLeft /></a>
                                <div class="content"><img src='/Images/Dessert2.JPG' alt='' /></div>
                                <span>
                                </span>
                            </div>
                            <a href="#!" class="close nav"><IoMdCloseCircle /></a>
                        </div>

                    </div>
                    <hr></hr>
                    <div className='container-brunchs-home'>
                        <div className='gallerie-brunch-home thumbs'>
                            <a href="#target5">
                                <img src='/Images/Brunch1.jpeg' alt='' /></a>
                            <a href="#target6">
                                <img src='/Images/Brunch2.jpeg' alt='' /></a>
                            <a href="#target7">
                                <img src='/Images/Brunch2.jpg' alt='' /></a>
                            <a href="#target8">
                                <img src='/Images/Brunch4.jpeg' alt='' /></a>
                        </div>
                        <div class="lightbox">
                            <div className="overlay" onClick={() => window.location.hash = "#!"}></div>
                            <div class="target" id="target5">
                                <span>
                                </span>
                                <div class="content">
                                    <img src='/Images/Brunch1.jpeg' alt='' />
                                </div>
                                <a href="#target6" class="nav" title="next"><FaArrowAltCircleRight /></a>
                            </div>
                            <div class="target" id="target6">
                                <a href="#target5" class="nav" title="previous"><FaArrowAltCircleLeft /></a>
                                <div class="content"><img src='/Images/Brunch2.jpeg' alt='' /></div>
                                <a href="#target7" class="nav" title="next"><FaArrowAltCircleRight /></a>
                            </div>
                            <div class="target" id="target7">
                                <a href="#target6" class="nav" title="previous"><FaArrowAltCircleLeft /></a>
                                <div class="content"><img src='/Images/Brunch3.jpeg' alt='' /></div>
                                <a href="#target8" class="nav" title="next"><FaArrowAltCircleRight /></a>
                            </div>
                            <div class="target" id="target8">
                                <a href="#target7" class=" nav" title="previous"><FaArrowAltCircleLeft /></a>
                                <div class="content"><img src='/Images/Brunch4.jpeg' alt='' /></div>
                                <span>
                                </span>
                            </div>
                            <a href="#!" class="close nav"><IoMdCloseCircle /></a>
                        </div>
                        <div className='text-brunch-home'>
                            <p className='paragraphe-bottom-home deux'>
                                Nous vous proposons des box brunch sucré,
                                salé ainsi que des plats et des desserts pour vos déjeuner dans
                                les Weppes et ses alentours livré à domicile
                            </p>
                            <span className='cont-buttons'><button className='button-home'><a className="vinculo-commander-home" href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button></span>
                        </div>
                    </div>
                </section>
                <section className='events-section'>
                    <div className='container-event-home'>
                        <div className='text-concept-home'>
                            <h1 className='titre-event'>Personnalisez vos événements...</h1>
                            <p className='paragraphe-event-home'>
                                Nous pouvons vous accompagner dans vos événements
                                familiaux <span className='event-negrita'>(anniversaires, communions, baptêmes, rebonds de
                                mariage, vin d’honneur)</span> afin de vous préparer un buffet
                                personnalisé, mais aussi dans vos événements professionnels
                                <span className='event-negrita'>(livraison de petit-déjeuner sucré/salé, buffet brunch, plateaux
                                repas, départ en retraite).</span><br /><br /> Nos prestations sont réalisées selon
                                vos envies, avec des produits locaux, des fruits et légumes
                                cultivés à la ferme et de la cuisine faite maison.
                            </p>
                            <span className='cont-buttons'>
                                <button className='button-event'>
                                <Link to='/contact' className='link-event'>CONTACTEZ-NOUS</Link>
                                </button>
                            </span>
                        </div>
                        <div className='gallery-events'>
                            <GallerieEvents></GallerieEvents>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Home;
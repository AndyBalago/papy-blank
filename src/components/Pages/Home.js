import React from 'react';
import '../../App';
import BannerSection from '../BannerSection';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="homepage">
            <BannerSection />
            <div className='homepage-content'>
                <section className='home-description section'>
                    <div className='home-text'>
                        <h2 className='titre-descrp'> PAPY BLANK C'EST QUOI ?</h2>
                        <p className='paragraphe-home'>Papy Blank c'est un concept unique : nous transformons
                            les produits cultivés dans la ferme familiale pour concocter
                            des plats et desserts pour vos brunchs, déjeuners ou goûters.</p>
                    </div>
                    <figure className='images-home'>
                        <img className='images-sections' src='/Images/woman-holding-basket-full-vegetables-close-up.jpg' alt='Home' />
                    </figure>
                </section>
                <section className='home-histoire section'>
                    <figure className='images-home histoire'>
                        <img className='images-sections' src='/Images/Ferme-histoire.png' alt='Home' />
                    </figure>
                    <div className='home-text-histoire'>
                        <h2 className='titre-descrp'> PAPY BLANK EST UNE HISTOIRE FAMILIALE</h2>
                        <p className='paragraphe-home'>
                            Mélange de plusieurs savoir faire, mes parents agriculteurs
                            cultivent des fruits et légumes qui ont du goût à quelques kilomètres de Lille.<br />
                            Moi, professionnelle de la restauration, je les transforme pour les sublimer.
                        </p>
                    </div>
                </section>
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
                        <p className='paragraphe-home mots'>Mathieu</p>
                    </div>
                </section>
                <section className='home-bottom section'>
                   
                        <p className='paragraphe-bottom-home un'>
                        Papy blank s'adapte en fonction des fruits et 
                        légumes récoltés afin de vous proposez une offre
                         aussi bien sucréeque salée.
                        </p>
                        <Link to='/leconcept' className='button-home link-concept'>LE CONCEPT</Link>
                        <hr></hr>
                        <p className='paragraphe-bottom-home deux'>
                        Découvrez nos box brunch sucrées salées, 
                        notre offre déjeuner, nos desserts pour vosévénements 
                        familiaux ou professionnels mais aussi nos paniers de légumes.
                        </p>
                        <button className='button-home'>COMMANDER</button>
                </section>
            </div>
        </div>
    );
}

export default Home;
import React from 'react'
import './LaFerme.css'
import { CookiesProvider, useCookies } from 'react-cookie';

const LaFerme = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['miCookie']);


  return (
    <div  className='la-ferme-container'>
      <section className='ferme-cont section-ferme'>
        <h2 className='titre-descr-ferme titres-ferme'><span>LA FERME</span></h2>
        <div className='descr-ferme-div'>
          <p className='paragraphe-descr-ferme  ferme-paragraphe'>
            Située à Erquinghem-le-sec à quelques kilomètres de Lille,
            la ferme est en mutation avec pour objectif de passer d'une 
            agriculture conventionnelle à une agriculture plus locale, 
            plus maîtrisée en transformant les produits cultivés.
          </p>
          <div className='map-cont'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.8037154475687!2d2.932588540819562!3d50.6121847510932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd2a461a04d70f%3A0x6293f03d0ddbc82b!2s368%20Rue%20de%20l&#39;%C3%89glise%2C%2059320%20Erquinghem-le-Sec!5e0!3m2!1ses-419!2sfr!4v1717002666205!5m2!1ses-419!2sfr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map Ferme PapyBlank'/>
          </div>
        </div>
      </section>
      <section className='histoire-cont section-ferme'>
        <h2 className='titre-histoire-ferme titres-ferme'><span>L'HISTOIRE</span></h2>
        <p className='histoire-paragraphe ferme-paragraphe'>
        La ferme est destinée à l'agriculture familiale depuis plus de 4 générations, elle a connu de nombreuses mutations.<br/><br/>
        Au départ, elle était destinée à une agriculture traditionnelle avec pour objectif de nourrir la famille. Dans les années 60, 
        elle est passée d'une agriculture traditionnelle à une agriculture plus conventionnelle spécialisée dans les grandes cultures et à l'élevage porcin.<br/><br/>
        Mon père, qui a repris l'exploitation familiale, a pris conscience de l'impact que peut avoir l'agriculture intensive, notamment sur le vivant dans les sols.
        Il s'est intéressé à la revalorisation des sols afin de remettre du vivant dans les terres.<br/><br/>
        Depuis plusieurs années, la ferme se métamorphose, elle passe d'un système où la productivité est l'objectif principal en raison de la dépendance sur 
        les prix à un système plus vertueux où les produits sont cultivés pour être transformés.
        </p>
      </section>
      <section className='legumes-cont section-ferme'>
        <h2 className='titre-legumes-ferme titres-ferme'> <span>LES LÉGUMES CULTIVÉS</span></h2>
        <p className='legumes-paragraphe ferme-paragraphe'>
        Une grande variété de légumes sont cultivés en fonction des saisons. 
        Des légumes traditionnels connus de tous mais aussi des variétés 
        plus anciennes ou plus méconnues afin de découvrir de nouvelles saveurs.
        </p>
      </section>
      <section className='fruits-cont section-ferme'>
        <h2 className='titre-fruits-ferme titres-ferme'><span>LES FRUITS CULTIVÉS</span></h2>
        <p className='fruits-paragraphe ferme-paragraphe'>
        Nous avons favorisé des arbres fruitiers et des arbustes de variétés anciennes et biologiques.
         Des variétés qui n'ont pas besoin de pesticide, qui produisent des fruits aux saveurs authentiques.
        </p>
      </section>

    </div>
  )
}

export default LaFerme
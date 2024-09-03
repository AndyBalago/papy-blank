import React from 'react'
import './LeConcept.css'

const LeConcept = () => {
  return (
    <div className='leConcept-container'>
      <section className='description-concept section'>
        <div className='container-sections description-div'>
          <h2 className='titre-concept'>LE CONCEPT</h2>
          <h3 className='sous-titre-descr'>De la ferme à chez vous</h3>
          <p className='paragraphe-descr'>Tout commence par ce nom....Papy Blank <br /><br />
            <span className='negrita-exp-concept'>“Papy”</span> pour
            mettre en avant les produits cultivés par mon père qui
            est aussi grand père, mais aussi pour le coté humain,
            convivial et chaleureux du concept,
            <br /><br />et <span className='negrita-exp-concept'>"Blank"</span> en l’honneur de notre nom et des liens familiaux du
            concept.
          </p>
        </div>
      </section>
      <section className='vision section'>
        <div className='container-sections'>
          {/* <h2 className='titres titre-vision'>LA VOLONTÉ DE METTRE EN AVANT LE SAVOIR-FAIRE FAMILIAL</h2> */}
          <div className='wrapper-vision'>
            <div className='vision-container contains'>
              <h3 className='sous-titres'>LA VISION</h3>
              <p className='paragraphe-vision para-vision'>Papy Blank a pour volonté de cultiver, de transformer et
                de vendre des produits issus d’une agriculture raisonnée.
                Une agriculture qui favorise les nutriments dans les sols
                afin de produire des fruits et légumes qui ont du goût.
              </p>
            </div>
            <div className='cuisine-container contains'>
              <h3 className='sous-titres'>LA CUISINE</h3>
              <p className='paragraphe-cuisine para-vision'>Notre volonté est de vous proposer un large choix de
                produits sucré et salé. L’offre varie en fonction des
                saisons et des produits cultivés, notre but est de vous
                proposer une cuisine équilibrée et gourmande.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='le-sale section'>
          <div className='descr-sale'>
            <h2 className='titres titre-sale'>Les brunchs</h2>
            <p className='paragraphe-sale paragraphes'>
              Pour les brunchs, différentes options sont disponibles : <span className='negrita-text-sucre'>“La box brunch à personnaliser”</span> Vous composez vous-même votre box
              en sélectionnant vos produits préférés selon notre offre. Une offre flexible qui s’adapte à vos envies.<br/><br/>
              <span className=' color-verde'> “Les box brunch” Vous n’avez rien à faire ! </span>Dans la box brunch, vous avez un brunch complet pour une ou deux personnes,
              avec des plats simples mais surtout savoureux, mettant en avant les fruits et légumes de la ferme, comme la tartine du
              moment, les légumes du moment, le granola aux fruits de saison...
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>

          </div>
          <figure className='img-container img-sale'>
            <img src='/Images/brunch-concept.jpg' alt='Le salé' />
          </figure>
      </section>
      <section className='la-pause section'>
       
          <figure className='img-container img-pause'>
            <img src='/Images/pause-gouter.jpg' alt='Le salé' />
          </figure>
          <div className='descr-pause'>
            <h2 className='titres titre-pause '>Une pause goûter ?</h2>
            <p className='paragraphe-pause paragraphes'>Composez votre box de gaufres liégeoises, des gaufres savoureuses au levain naturel, grâce à la farine de la ferme.
              <br/><br/>Disponibles à l’unité, en coffrets de 10 ou 20, avec pour agrémenter : du caramel fait maison, du coulis de fruits de saison,
              de la sauce au chocolat, mais aussi un cake qui change en fonction des fruits récoltés, et l’incontournable cheesecake.
              <br /><br />
              <span className='negrita-text-sucre subrayado'>LES BRUNCHS ET LES GOUTER SONT DISPONIBLES LA SEMAINE ET LE WEEKEND « du mercredi au dimanche inclus »</span>
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>
          </div>
        
      </section >
      <section className='le-sucre section'>
        

          <div className='descr-sucre'>
            <h2 className='titres titre-sucre'>Les Déjeuners</h2>
            <p className='paragraphe-sucre paragraphes'>
              Ne perdez plus de temps à vous déplacer pour vos déjeuners : nous vous proposons vos déjeuners livrés chez vous ou sur votre lieu de
              travail. Notre offre flexible s’adapte à vos envies, avec des plats disponibles à la carte ainsi qu'en menus.<br/><br/>
              Nos recettes mettent à l'honneur les fruits et légumes récoltés à la ferme, comme le potage de saison ou les pommes de terre rattes.<br/><br/>
              <span className='negrita-text-sucre'>L’offre déjeuner est disponible du mercredi au vendredi, pendant les horaires du déjeuner.</span><br/><br/>
              <span className=' color-verde'>Laissez-vous tenter par la simplicité et le goût, et faites de votre pause déjeuner un moment de plaisir !</span>
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>
          </div>
          <figure className='img-container img-sucre'>
            <img src='/Images/pause-dej.jpg' alt='Le sucré' />
          </figure>
        
      </section>
      <section className='les-produits section'>
        <div className='container-sections div-produits'>
          <h2 className='titres'>LES PRODUITS</h2>
          <p className='paragraphe-produits paragraphes'>
            Les fuits et légumes cultivés dans la ferme familliale à Erquinghem-le-sec. Les autres produits proviennent
            de fermes et de pisciculture de la région. Par exemple le porc provient de la ferme du Crussobeau,
            la truite de la pisciculture d'Anzin, la farine du moulin des Weppes.
          </p>
        </div>
      </section>
    </div >
  )
}

export default LeConcept
import React from 'react'
import './LeConcept.css'

const LeConcept = () => {
  return (
    <div className='leConcept-container'>
      <section className='description-concept section'>
        <div className='container-sections description-div'>
          <h2 className='titres titre-concept'>LE CONCEPT</h2>
          <h3 className='sous-titre-descr'>De la ferme à chez vous</h3>
          <p className='paragraphe-descr paragraphes'>Tout commence par ce nom....Papy Blank <br /><br />
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
          <h2 className='titres'>LA VOLONTÉ DE METTRE EN AVANT LE SAVOIR-FAIRE FAMILIAL</h2>
          <div className='wrapper-vision'>
            <div className='vision-container contains'>
              <h3 className='sous-titres'>LA VISION</h3>
              <p className='paragraphe-vision paragraphes'>Papy Blank a pour volonté de cultiver, de transformer et
                de vendre des produits issus d’une agriculture raisonnée.
                Une agriculture qui favorise les nutriments dans les sols
                afin de produire des fruits et légumes qui ont du goût.
              </p>
            </div>
            <div className='cuisine-container contains'>
              <h3 className='sous-titres'>LA CUISINE</h3>
              <p className='paragraphe-cuisine paragraphes'>Notre volonté est de vous proposer un large choix de
                produits sucré et salé. L’offre varie en fonction des
                saisons et des produits cultivés, notre but est de vous
                proposer une cuisine équilibrée et gourmande.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='le-sale section'>
        <div className='container-sections div-sale'>
          <div className='descr-sale'>
            <h2 className='titres'>Le salé</h2>
            <p className='paragraphe-sale paragraphes'>
              Des plats simples mais surtout savoureux mettant en avants les légumes de la ferme.
              Des plats incontournables pour vos brunchs ou vos déjeuners avec un seul objectif: <span className='negrita-text-sucre'>le goût.</span>
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>
          </div>
          <figure className='img-container img-sale'>
            <img src='/Images/tartines-sal.jpg' alt='Le salé' />
          </figure>
        </div>
      </section>
      <section className='le-sucre section'>
        <div className='container-sections div-sucre'>
          <figure className='img-container img-sucre'>
            <img src='/Images/sucres.jpg' alt='Le sucré' />
          </figure>
          <div className='descr-sucre'>
            <h2 className='titres'>Le sucré</h2>
            <p className='paragraphe-sucre paragraphes'>
            <span className='negrita-text-sucre'>Brioche, babka, cookie, muffin, cheesecake, gaufre et autres</span>, des
              desserts gourmands avec un ingrédient secret du levain naturel mélange de farine de la ferme et d'eau.
              Il permet une fermentation naturelle des aliments et apporte une note acidulée aux desserts.<br /><br />
              Ces desserts sont mis en avant par différentes préparations grâce aux fruits
              de la ferme <span className='negrita-text-sucre'>(pommes, poires, mirabelles, coings, fraises, framboises, groseilles,...)</span>
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>
          </div>
        </div>
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
    </div>
  )
}

export default LeConcept
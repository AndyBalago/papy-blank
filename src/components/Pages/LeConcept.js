import React from 'react'
import './LeConcept.css'

const LeConcept = () => {
  return (
    <div className='leConcept-container'>
      <section className='description-concept section'>
        <div className='container-sections description-div'>
          <h2 className='titres titre-concept'>LE CONCEPT</h2>
          <h3 className='sous-titre-descr'>de la ferme à l'assiette</h3>
          <p className='paragraphe-descr paragraphes'>Tout commence par ce nom....Papy Blank <br/><br/>
           “Papy” pour
            mettre en avant les produits cultivés par mon père qui
            est aussi grand père, mais aussi pour le coté humain,
            convivial et chaleureux du concept, 
            <br/><br/>et "Blank" en
            l'honneur de notre nom et de la famille.
          </p>
        </div>
      </section>
      <section className='vision section'>
        <div className='container-sections'>
          <h2 className='titres'>LA VOLONTÉ DE METTRE EN AVANT LE SAVOIR-FAIRE FAMILIAL</h2>
          <div className='wrapper-vision'>
          <div className='vision-container contains'>
            <h3 className='sous-titres'>LA VISION</h3>
            <p className='paragraphe-vision paragraphes'>Papy Blank a pour volonté de produire et de transformer des produits qui ont
              du goût. De mettre en avant une agriculture raisonnée favorisant les nutriments
              dans les sols. Une agriculture à échelle humaine où les produits sont cultivés,
              transformés et vendus.
            </p>
          </div>
          <div className='cuisine-container contains'>
            <h3 className='sous-titres'>LA CUISINE</h3>
            <p className='paragraphe-cuisine paragraphes'>Notre volonté est d'offrir un large choix de plats sucrés et salés.
              Une offre variant en fonction des saisons et des produits cultivés pour vous offrir une cuisine
              équilibrée et gourmande.
            </p>
          </div>
          </div>
        </div>
      </section>
      <section className='le-sucre section'>
        <div className='container-sections div-sucre'>
          <figure className='img-container img-sucre'>
            <img src='/Images/sucre-deux.jpg' alt='Le sucré' />
          </figure>
          <div className='descr-sucre'>
            <h2 className='titres'>Le sucré</h2>
            <p className='paragraphe-sucre paragraphes'>
              Brioche, babka, cookie, muffin, cheesecake, gaufre et autres, des
              desserts gourmands avec un ingrédient secret du levain naturel mélange de farine de la ferme et d'eau.
              Il permet une fermentation naturel des aliments et apporte une note acidulée aux desserts.<br /><br />
              Ces desserts sont mis en avant par différents préparations grâce aux fruits
              de la ferme (pommes, poires, mirabelles, coings, fraises, framboises, groseilles,...)
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>
          </div>
        </div>
      </section>
      <section className='le-sale section'>
        <div className='container-sections div-sale'>
          <div className='descr-sale'>
            <h2 className='titres'>Le salé</h2>
            <p className='paragraphe-sale paragraphes'>
              Des plats simples mais surtout savoreux mettant en avants les légumes de la ferme.
              Des plats inconturnables pour vos brunchs ou vos déjeuners avec un seul objectif: le goût.
            </p>
            <button className='button-concept'><a className='vinculo-commander-concept' href='https://papyblank.byclickeat.fr/store/entrypoint'>COMMANDER</a></button>
          </div>
          <figure className='img-container img-sale'>
            <img src='/Images/tartines-sal.jpg' alt='Le salé' />
          </figure>
        </div>
      </section>
      <section className='les-produits section'>
        <div className='container-sections div-produits'>
          <h2 className='titres'>LES PRODUITS</h2>
          <p className='paragraphe-produits paragraphes'>
            Les fuits et légumes cultivés dans la ferme familliale à quelques
            kilométres de Lille à Erquinghem-le-sec. Les autres produits proviennent
            de fermes et de pscicultures de la région. Par exemple le proc provient de la ferme du Crussobeau,
            la truite de la pisciculture d'Anzin, les fromage blanc de la ferme Wattelle, la farine du molin des Weppes.
          </p>
        </div>
      </section>
    </div>
  )
}

export default LeConcept
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Button } from '../Button'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !sujet || !message || !consent) {
      setError('Por favor, complete todos los campos y acepte el tratamiento de datos.');
      return;
    }

    setError('');
    const templateParams = {
      name,
      email,
      sujet,
      message,
    };

    emailjs.send(
      'service_qnped8a',
      'template_tir4sj8',
      templateParams,
      'p8BQg3mBAA4PXk3v2'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess('Message envoyé avec succès!');
        setName('');
        setEmail('');
        setSujet('');
        setMessage('');
        setConsent(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('On a eu un problème, réessayez plus tard.');
      });
  };

  return (
    <div className='contact-cont'>
      <section className='tittre-principal-contact'>
        <h1>CONTACTEZ PAPY BLANK</h1>
      </section>
      <div className='titre-contact-corp'>
      <h1>CONTACTEZ NOUS</h1> 
      </div>
      <section className='section-form-contact'>
        <div className='form-cont-global'>
        <h2 className='titres-block-contact'>ÉCRIS-NOUS</h2>
        <hr className='ligne-contact-separation'/>
        <div className='form-container'>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nom*"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email*"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sujet"></label>
              <input
                type="text"
                id="sujet"
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
                required
                placeholder="Sujet*"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" />
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message*"
              ></textarea>
            </div>
            <div className="form-group">
            <p>* Ces champs sont obligatoires</p>
              <label className='case-termes-contact'>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <span>En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées dans le strict cadre de ma demande.</span>
              </label>
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <Button className='button-envoyer btns' type="submit" buttonStyle='btn--primary' buttonSize='btn--large'>Envoyer</Button>
          </form>
          <p className='traitement-donnees-cont'>Nous nous engageons à ce que la collecte et le traitement de vos données 
            effectuées à partir du présent site internet soit conforme à la loi informatique 
            et libertés et au règlement général sur la protection des données personnelles (RGPD). 
            Afin d’exercer vos droits, notamment d’accès, de correction ou de retrait de vos données personnelles collectées via ce formulaire, consultez notre Politique de confidentialité.</p>
        </div>
        </div>
        <div className='cont-coordones-contact'>
          <h2 className='titres-block-contact'>PAPY BLANK</h2>
          <hr className='ligne-contact-separation'/>
          <div className='infos-coordones-contact'>
            <h3 className='addresse-contact-form'>Adresse</h3>
            <p>368 Rue de l'Église,</p>
            <p>59320 Erquinghem-le-Sec</p>
            <p>Tel: <a href='tel:+33661752886'>+33 6 61 75 28 86</a> </p>
            <p>Email: <a href="mailto:papyblank@gmail.com">papyblank@gmail.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
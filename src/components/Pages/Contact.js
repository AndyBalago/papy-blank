import React from 'react'
import { Button } from '../Button'

const Contact = () => {
  return (
    <div className='form-container'>
      <p>Nous contacter</p>
    <form>
      <input type='text' name='nom' placeholder='Votre Nom'/>
      <input type='text' name='email' placeholder='Votre email'/>
      <input type="text" size="30" placeholder='Votre commentaire'></input>
      <Button buttonStyle='btn--primary'>Envoyer</Button>
    </form>
    </div>
  )
}

export default Contact
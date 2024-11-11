import { useState } from 'react'
import React from 'react'
import '/ModuleMenu.css'

const ModuleMenu = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

  return (
    <div>
 {/* Módulo emergente */}
 {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>
                            &times;
                        </span>
                        <p>Este es el texto dentro del módulo.</p>
                        <div className='modal-buttons'>
                            <button onClick={() => alert('Botón 1 Presionado')}>Déjeuner</button>
                            <button onClick={() => alert('Botón 2 Presionado')}>Brunch</button>
                        </div>
                    </div>
                </div>
            )}    </div>
  )
}

export default ModuleMenu
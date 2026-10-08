import React from 'react';
import './ModalCommander.css';

const ModalCommander = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div className='modal' onClick={closeModal}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <span className='close' onClick={closeModal}>&times;</span>
                <img src='/Images/femme-pensé.webp' alt='Femme' />
                <h1>Que voulez-vous manger?</h1>
                <div className='modal-buttons'>
                    <a
                        href='https://papy-blank-dejeuner.c.obypay.com/v-v5.39.7/i-iC92z2LnIo-1/onboarding'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Plats Cuisinés</button>
                    </a>
                    <a
                        href='https://papy-blank-brunch.c.obypay.com/v-v5.39.7/i-yYjsf6px2G-1/onboarding'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Traiteur/Brunch</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalCommander;

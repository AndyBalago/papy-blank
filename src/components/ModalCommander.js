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
                        href='https://papyblank.byclickeat.fr/?sid=1faa30bf-6020-4710-8336-b1af5d805a8c&mode=menu'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Déjeuner</button>
                    </a>
                    <a
                        href='https://papyblank.byclickeat.fr/?sid=d67e9735-54c6-4966-8b0e-7163e6b34f55&mode=menu'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Brunch</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalCommander;

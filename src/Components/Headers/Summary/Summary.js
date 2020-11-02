import React from 'react';
import './Summary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import ModalForm from '../../Contact/ModalForm/ModalForm';

const Summary = () => {

    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleModalForm = () => {
        openModal();
    }

    return (
        <div>
            <div className='summary-link'>
                <a href="https://drive.google.com/file/d/1Lbkc13MSWPl6-s5EmmDgNcBHoOGEffVS/view?usp=sharing"><p>Resume</p></a>
                <p onClick={ handleModalForm }>Contact me</p>
                <ModalForm modalIsOpen = {modalIsOpen} closeModal = {closeModal}></ModalForm>
            </div>
            <div className = 'd-flex justify-content-center'>
                <a className = 'm-3 icon' href="https://github.com/sftmaruf"><FontAwesomeIcon icon={faGithub} /></a>
                <a  className = 'm-3 icon'  href="https://www.linkedin.com/in/shafayet-maruf/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
    );
};

export default Summary;
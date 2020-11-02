import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './ModalForm.scss';
import emailjs from 'emailjs-com';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: ' rgb(18, 18, 18)',
        borderRadius: '10px'
    }
};

Modal.setAppElement('#root');

const ModalForm = ({modalIsOpen, closeModal}) => {

    const { register, handleSubmit, watch, errors } = useForm();

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
              if (result.status === 200) {
                e.target.reset();
                closeModal();
              }
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <button onClick={closeModal}>close</button> */}
                <form onSubmit={sendEmail}>
                    <div className='modal-form p-3'>
                        <div className='d-flex justify-content-between'>
                            <div className = 'mr-2'>
                            <input className='form-control bg-dark' name="name" ref={register({ required: true })} placeholder='Full name*' />
                                {errors.name && <span>This field is require</span>}
                            </div>
                            <div>
                                <input className='form-control bg-dark' name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Email*' />
                                {errors.email && <span>This field is require</span>}
                            </div>
                        </div>

                        <input className='form-control bg-dark mt-2 mb-2' name="subject" ref={register({ required: true })} placeholder='Subject*' />
                        {errors.subject && <span>This field is require</span>}

                        <textarea className='form-control bg-dark mb-2' name="message" ref={register({ required: true })} placeholder='Message*' />
                        {errors.message && <span>Leave a message for me</span>}

                        <div className='d-flex justify-content-center'>
                            <input className='submit-button' type="submit" value='Send' />
                        </div>

                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ModalForm;
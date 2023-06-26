import React from 'react';
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaDribbble,
    FaGithub,
    FaLinkedin

} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './Contact.css'
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy !</h3>

                    <p className="contact__description">
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className="info__title">Mail me</span>
                                <h4 className="info__desc">sakibhasan4772@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">(+880) 01626384772</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <Link to="https://www.facebook.com/profile.php?id=100035207767398" target="_blank" className="contact__social-link">
                            <FaFacebookF />
                        </Link>

                        <Link to="https://github.com/sakibhasan997" target="_blank" className="contact__social-link">
                            <FaGithub />
                        </Link>

                        <Link to="https://www.linkedin.com/in/sakib-hasan-9a0286229/" target="_blank" className="contact__social-link">
                            <FaLinkedin />
                        </Link>
                        {/* <Link to="https://www.facebook.com/profile.php?id=100035207767398" className="contact__social-link">
                        <FaDribbble/>
                    </Link> */}
                    </div>
                </div>

                <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" placeholder='Your Name' className="form__control" />
                        </div>

                        <div className="form__input-div">
                            <input type="email" placeholder='Your Email' className="form__control" />
                        </div>

                        <div className="form__input-div">
                            <input type="text" placeholder='Your Subject' className="form__control" />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea placeholder='Your Message' className="form__control textarea"></textarea>
                    </div>

                    <button className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
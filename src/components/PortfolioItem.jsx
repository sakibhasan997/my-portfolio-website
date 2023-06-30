import React, { useState } from 'react';
import Close from "../assets/close.svg"
import Aos from 'aos';
import 'aos/dist/aos.css'

const PortfolioItem = ({ img, title, details, modal_img }) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };

    Aos.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div className="portfolio__item">
            <img  className='portfolio__img' data-aos="zoom-in-up" src={img} alt="" />

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio__modal" data-aos="zoom-in-up">
                    <div className="portfolio__modal-content">
                        <img className='modal__close' src={Close} alt="" onClick={toggleModal} />

                        <h3 className="modal__title">{title}</h3>

                        <ul className="modal__list ">
                            {details.map(({ icon, title, desc }, index) => {
                                return (
                                    <li className="modal__item" key={index} >
                                        <span className="item__icon">{icon}</span>


                                        <span className="item__title">{title}</span>
                                        <div className=" item__details">{desc}</div>

                                    </li>
                                )
                            })}
                        </ul>

                        <img src={img} className='modal__img' alt="" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioItem;
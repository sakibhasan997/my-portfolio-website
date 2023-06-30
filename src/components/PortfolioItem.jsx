import React, { useState } from 'react';
import Close from "../assets/close.svg"

const PortfolioItem = ({ img, title, details, modal_img }) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };

    return (
        <div className="portfolio__item">
            <img className='portfolio__img' src={img} alt="" />

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio__modal">
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
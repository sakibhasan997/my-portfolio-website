import React from 'react';
import Profile from "../../assets/sakib1.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from "react-icons/fa";
import './Home.css'
import CV from "../../assets/Sakib Hasan front-end web developer (5).pdf"
import { TypeAnimation } from 'react-type-animation';
import About from '../About/About';

const Home = () => {
    return (
        <>
            <section className="home section grid">
                <img src={Profile} alt="" className="home__img" />

                <div className="home__content">
                    <div className="home__data">
                        <h1 className="home__title"><span>I'm Sakib Hasan.</span>
                            
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'I am a Rect Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'I am a FrontEnd Developer',
                                    1000,
                                    'I am a FullStack Developer',
                                    1000,
                                    'I am a Web Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '30px', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            </h1>

                        <p className="home__description">
                            I'm a Bangladeshi web developer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                        </p>

                        {/* <Link to='/about' className='button'>
                            More About Me {' '}
                            <span className='button__icon'>
                                <FaArrowRight />
                            </span>
                        </Link> */}
                        <a href={CV} download='' className="button">MY RESUME <span className="button__icon"><FaDownload /> </span> </a>
                    </div>
                </div>

                <div className="color__block"></div>
            </section>
        </>
    );
};

export default Home;
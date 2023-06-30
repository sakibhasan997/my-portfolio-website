import React from 'react';
import Profile from "../../assets/sakib1.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from "react-icons/fa";
import './Home.css'
import CV from "../../assets/Sakib Hasan front-end web developer (5).pdf"
import { TypeAnimation } from 'react-type-animation';
import About from '../About/About';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Fade, Slide } from 'react-awesome-reveal';

const Home = () => {

    Aos.init({
        // Global settings:
        disable: false, 
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50, 
        throttleDelay: 99, 


       
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <>
            <section className="home section grid">
                
                <img src={Profile} data-aos="fade-right" alt="" className="home__img" />

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
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <p className="home__description">
                                I'm a Bangladeshi web developer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                            </p>
                        </Fade>

                        {/* <Link to='/about' className='button'>
                            More About Me {' '}
                            <span className='button__icon'>
                                <FaArrowRight />
                            </span>
                        </Link> */}
                        <Slide>
                            <a href={CV} download='' className="button">MY RESUME <span className="button__icon"><FaDownload /> </span> </a>
                        </Slide>
                    </div>
                </div>

                <div className="color__block"></div>
            </section>
        </>
    );
};

export default Home;
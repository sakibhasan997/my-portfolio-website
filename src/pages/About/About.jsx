import React from 'react';
import Info from '../../components/Info';
import { FaArrowRight, FaDownload } from "react-icons/fa";
import CV from "../../assets/Sakib Hasan front-end web developer (5).pdf"
import Stats from '../../components/Stats';
import './About.css'
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Infos</h3>

                        <ul className="info__list grid">
                            <Info />
                        </ul>

                        <Link to='/portfolio' className='button'>
                            My Projects {' '}
                            <span className='button__icon'>
                                <FaArrowRight />
                            </span>
                        </Link>
                        {/* <a href={CV} download='' className="button">MY RESUME <span className="button__icon"><FaDownload /> </span> </a> */}
                    </div>

                    <div className="">
                        {/* <Stats /> */}
                        <p>I am a full-Stack web developer. I have trained in a full stack web development course from the programming hero platform. And i have created many project of front end and back end. I have experience in database management using HTML, CSS, JavaScript, React.JS, Node.JS, and mongoDB.</p>
                        <br />
                        <p>
                            As a Full-Stack web developer my goal is to make an attractive and appropriate website by which users can get higher experience. I am interested in enhancing my skill and discovering new technology. And I love working together. Because I think if we work together, no matter how difficult it is, it can be done very quickly.  
                        </p>
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="skills">
            <h2 className="section__title">
                    My <span>Skills</span>
                </h2>

                <div className="skills__container grid">
                    <Skills />
                </div>
            </section>

            {/* <div className="separator"></div> */}

            {/* <section className="resume">
                <h3 className="section__subtitle subtitle__center">Experience & Education</h3>

                <div className="resume__container grid">
                    <div className="resume__data">
                        {resume.map((val) =>{
                            if(val.category === 'experience'){
                                return <ResumeItem key={val.id} {...val} />
                            }
                        })}
                    </div>

                    <div className="resume__data">
                        {resume.map((val) =>{
                            if(val.category === 'education'){
                                return <ResumeItem key={val.id}  {...val} />
                            }
                        })}
                    </div>
                </div>
            </section> */}
        </main>
    );
};

export default About;
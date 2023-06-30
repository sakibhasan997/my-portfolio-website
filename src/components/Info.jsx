import React from 'react';
import { personalInfo } from '../data'
import { Fade } from 'react-awesome-reveal';

const Info = () => {
    return (
        <>
            {personalInfo.map(({ title, description }, index) => {
                return (
                    <li className="info__item" key={index}>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <span className="info__title">{title}</span>
                            <span className="info__description">{description}</span>
                        </Fade>
                    </li>
                )
            })}
        </>
    );
};

export default Info;
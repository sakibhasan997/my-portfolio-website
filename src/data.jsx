import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/modify1.png';
import Work2 from './assets/modify2.png';
import Work3 from './assets/modify3.png';
import Work4 from './assets/modify4.png';
import Work5 from './assets/modify5.png';
import Work6 from './assets/modify6.png';

import modal1 from './assets/modal1.png'
import modal2 from './assets/modal2.png'
import modal3 from './assets/modal3.png'

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import skill1 from './assets/html.png'
import skill2 from './assets/css-3.png'
import skill3 from './assets/js.png'
import skill4 from './assets/react.png'
import skill5 from './assets/express-js.png'
import skill6 from './assets/Node.js.png'
import skill7 from './assets/tailwind.jpg'
import skill8 from './assets/bootstrap.png'
import skill9 from './assets/github.png'
import skill10 from './assets/Mongo-DB.jpg'
import skill11 from './assets/firebase.png'
import skill12 from './assets/figma.jpg'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sakib',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Hasan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladesh',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Khulna, Bangladesh',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '(+880) 1626384772',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'sakibhasan4772@gmail.com',
  },

  {
    id: 8,
    title: 'Languages : ',
    description: 'Bangla, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    img: skill1,
  },

  {
    id: 2,
    title: 'CSS',
    img: skill2,
  },

  {
    id: 3,
    title: 'JAVASCRIPT',
    img: skill3,
  },

  {
    id: 4,
    title: 'REACT.JS',
    img: skill4,
  },

  {
    id: 5,
    title: 'EXPRESS.JS',
    img: skill5,
  },

  {
    id: 6,
    title: 'NODE.JS',
    img: skill6,
  },

  {
    id: 7,
    title: 'TAILWIND',
    img: skill7,
  },

  {
    id: 8,
    title: 'BOOTSTRAP',
    img: skill8,
  },
  {
    id: 9,
    title: 'GITHUB',
    img: skill9,
  },
  {
    id: 10,
    title: 'MONGO-DB',
    img: skill10,
  },
  {
    id: 11,
    title: 'FIREBASE',
    img: skill11,
  },
  {
    id: 12,
    title: 'FIGMA',
    img: skill12,
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    modal_img: modal1,
    title: 'Martial Arts',
    details: [
      {
        icon: <FaCode />,
        title: 'Project :',
        desc: 'FullStack',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://assignment-12-5eb27.web.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    modal_img: modal2,
    title: 'Toy marketplace ',
    details: [
      {
        icon: <FaCode />,
        title: 'Project :',
        desc: 'FullStack',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://assignment-11-705cf.web.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    modal_img: modal3,
    title: 'Chef Recipe',
    details: [
      {
        icon: <FaCode />,
        title: 'Project :',
        desc: 'FrontEnd',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://assignment-10-clinet-site.web.app',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'PSD TO HTML',
    details: [
      {
        icon: <FaCode />,
        title: 'Project :',
        desc: 'Pst to Html',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://transcendent-sopapillas-df6034.netlify.app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Bootstrap Project',
    details: [
      {
        icon: <FaCode />,
        title: 'Project :',
        desc: 'Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dynamic-beignet-0fa014.netlify.app',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'React Router',
    details: [
      {
        icon: <FaCode />,
        title: 'Project :',
        desc: 'React router',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://incredible-babka-88befd.netlify.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

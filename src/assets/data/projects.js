import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'FortiCryptX',
    desc: 'A powerful and user-friendly cybersecurity tool for encrypting and decrypting files using industry-standard algorithms.',
    img: UTrackerImg,
    link: 'https://github.com/Brahamanbtp/FortiCryptX',
  },
  {
    id: uuidv4(),
    name: 'React Portfolio',
    desc: 'A sleek, responsive developer portfolio built using React to showcase projects, skills, and contact information.',
    img: GreenCtgImg,
    link: 'https://github.com/Brahamanbtp/react-portfolio',
  },
  {
    id: uuidv4(),
    name: 'Student Management System',
    desc: 'A role-based student management system to manage admissions, exams, library, hostel, and more with modern UI features.',
    img: CoinTrackerImg,
    link: 'https://github.com/Brahamanbtp/Student-Management-System',
  },
  {
    id: uuidv4(),
    name: 'KeyCrypt Shield',
    desc: 'An advanced encryption and password manager app designed to securely store and manage sensitive user credentials.',
    img: ProjectImg,
    link: 'https://github.com/Brahamanbtp/KeyCrypt-Shield',
  },
  {
    id: uuidv4(),
    name: 'SecuraMind',
    desc: 'AI-powered secure code assistant that detects and fixes vulnerabilities using LLMs like Mistral, deployed with Gradio + Modal.',
    img: ProjectImg,
    link: 'https://github.com/Brahamanbtp/SecuraMind',
  },
  {
    id: uuidv4(),
    name: 'DevQR Card',
    desc: 'DevQRCard is a beautifully designed platform for developers to create, customize, and share their digital identity cards with integrated QR codes, profiles, and portfolios.',
    img: ProjectImg,
    link: 'https://github.com/Brahamanbtp/devqr-card',
  },
];

export default projects;

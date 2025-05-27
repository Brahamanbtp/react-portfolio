import { v4 as uuidv4 } from 'uuid';
import img1 from '../images/blogs/blog-1.png';
import img2 from '../images/blogs/blog-2.png';
import img3 from '../images/blogs/blog-3.png';

const blogs = [
  {
    id: uuidv4(),
    name: 'The Art of Clean Code: Tips for Developers',
    desc: 'Discover practical techniques for writing clean, maintainable code. From naming conventions to code structure, this article covers everything you need to elevate your programming standards.',
    img: img1,
  },
  {
    id: uuidv4(),
    name: 'Why Responsive Design Matters in 2025',
    desc: 'Explore the importance of responsive design in modern web development. Learn how mobile-first strategies and accessibility improvements can enhance user experience across all devices.',
    img: img2,
  },
  {
    id: uuidv4(),
    name: 'Introduction to Artificial Intelligence for Beginners',
    desc: 'Curious about AI? This guide breaks down complex concepts into simple, digestible insights — perfect for those getting started in artificial intelligence and machine learning.',
    img: img3,
  },
  {
    id: uuidv4(),
    name: 'Building a Personal Portfolio with React',
    desc: 'A walkthrough on creating an interactive and visually stunning portfolio website using React. Ideal for developers looking to showcase their skills and projects effectively.',
    img: img2,
  },
  {
    id: uuidv4(),
    name: 'Cybersecurity Fundamentals: Protecting Your Digital Life',
    desc: 'Learn the basics of cybersecurity, from strong passwords to avoiding phishing attacks. Essential tips for anyone concerned about their online safety and data protection.',
    img: img1,
  },
  {
    id: uuidv4(),
    name: 'Understanding Frontend vs Backend Development',
    desc: 'Unpack the differences between frontend and backend development, and find out which path suits your interests and skills in the world of web development.',
    img: img2,
  },
];

export default blogs;

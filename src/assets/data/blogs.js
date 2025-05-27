import { v4 as uuidv4 } from 'uuid';
import img1 from '../images/blogs/blog-1.png';
import img2 from '../images/blogs/blog-2.png';
import img3 from '../images/blogs/blog-3.png';

const blogs = [
  {
    id: uuidv4(),
    title: 'How to Build a Personal Portfolio Website with React',
    description:
      'Learn how to create a modern, responsive personal portfolio using React, showcasing your skills, projects, and contact info with best practices.',
    image: img1,
    date: 'May 10, 2025',
  },
  {
    id: uuidv4(),
    title: 'Top 10 Tips for Landing Your First Web Development Job',
    description:
      'From improving your GitHub profile to preparing for technical interviews, here are ten actionable tips to kickstart your dev career.',
    image: img2,
    date: 'May 15, 2025',
  },
  {
    id: uuidv4(),
    title: 'Understanding React Hooks: useState and useEffect',
    description:
      'Hooks revolutionized how we write React components. This guide explains useState and useEffect with real-world use cases.',
    image: img3,
    date: 'May 20, 2025',
  },
  {
    id: uuidv4(),
    title: 'Design Principles for Developers: Making UIs That Pop',
    description:
      'Great UI is more than colors and fonts. Learn layout, hierarchy, contrast, and whitespace to build visually appealing applications.',
    image: img2,
    date: 'May 22, 2025',
  },
  {
    id: uuidv4(),
    title: 'A Beginner’s Guide to JavaScript Performance Optimization',
    description:
      'Your website doesn’t have to be slow. Discover how to improve performance with code splitting, lazy loading, and DOM optimizations.',
    image: img1,
    date: 'May 25, 2025',
  },
  {
    id: uuidv4(),
    title: 'Deploying React Apps with Vercel and Netlify',
    description:
      'Walk through the steps to deploy your React projects quickly and securely using Netlify and Vercel — ideal for portfolios and prototypes.',
    image: img2,
    date: 'May 27, 2025',
  },
];

export default blogs;

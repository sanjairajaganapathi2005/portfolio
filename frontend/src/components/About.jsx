import '../styles/about.css';
import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section" id="about" ref={aboutRef}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I'm a passionate Artificial Intelligence and Data Science student with expertise in 
          Machine Learning, MERN Stack development, and Data Analysis. I have published 
          research papers in IEEE and have hands-on experience with Generative AI and Data Engineering.
        </p>
        <div className="interests">
          <h3>Areas of Interest</h3>
          <ul>
            <li>Machine Learning</li>
            <li>MERN Stack</li>
            <li>Data Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
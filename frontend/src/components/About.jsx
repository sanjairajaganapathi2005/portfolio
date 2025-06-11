import '../styles/about.css'; 

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I'm a passionate Artificial  Intelligence and Data Science student with expertise in 
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
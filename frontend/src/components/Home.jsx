import '../styles/home.css';
import profileImage from '../public/profile.jpg'; 

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <h1>Sanjai R</h1>
        <h2>Artificial Intelligence and Data Science</h2>
        <div className="social-links">
          <a href="https://github.com/sanjairajaganapathi2005" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sanjairajaganapathi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/sanjairajaganapathi2005" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="Sanjai R" />
      </div>
    </div>
  );
};

export default Home;
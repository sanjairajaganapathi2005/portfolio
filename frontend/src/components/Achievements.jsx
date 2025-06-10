import '../styles/achievements.css';

const Achievements = () => {
  return (
    <div className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        <div className="achievement-card">
          <h3>Secure 1st prize in AI Conclave 1.0</h3>
          <p>
            Developed a machine learning-based recommendation system for Farm2Bag. 
            Enhanced customer engagement with personalized product suggestions.
          </p>
        </div>
        <div className="achievement-card">
          <h3>Leadership Roles</h3>
          <ul>
            <li>AI Coding Club Joint Secretary (2024-25)</li>
            <li>AI Association Technical Head (2023-24)</li>
            <li>AI Coding Club Executive Member (2023-24)</li>
          </ul>
        </div>
        <div className="achievement-card">
          <h3>Certification</h3>
          <p>MongoDB Associate Developer in NodeJS</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
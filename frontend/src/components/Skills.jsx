const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>C</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Back-end</h3>
          <ul>
            <li>Flask</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Technology</h3>
          <ul>
            <li>Microsoft PowerBI</li>
            <li>Tableau</li>
            <li>GitHub</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
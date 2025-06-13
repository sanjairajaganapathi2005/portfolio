import '../styles/skills.css';
import { useEffect } from 'react';

const Skills = () => {
  // Skill logos from CDN
  const SKILL_LOGOS = {
    // Languages
    c: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    
    // Front-end
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    
    // Back-end
    flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    
    // Database
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    
    // Tools
    powerbi: 'https://img.icons8.com/color/512/power-bi-2021.png',
    tableau: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    
    // AI Tools
    scikitlearn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
  };

  // Category icons
  const CATEGORY_ICONS = {
    languages: '💻',
    frontend: '🎨',
    backend: '⚙️',
    database: '🗄️',
    tools: '🛠️',
    ai: '🧠'
  };

  useEffect(() => {
    const animateCards = () => {
      const skillCards = document.querySelectorAll('.skill-category');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
            }, index * 100);
          }
        });
      }, { threshold: 0.1 });

      skillCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
      });
    };

    animateCards();
  }, []);

  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {/* Languages */}
        <div className="skill-category">
          <h3>
            <span className="category-icon">{CATEGORY_ICONS.languages}</span>
            Languages
          </h3>
          <ul>
            <li>
              <img src={SKILL_LOGOS.c} alt="C" className="skill-icon" />
              C
            </li>
            <li>
              <img src={SKILL_LOGOS.python} alt="Python" className="skill-icon" />
              Python
            </li>
            <li>
              <img src={SKILL_LOGOS.java} alt="Java" className="skill-icon" />
              Java
            </li>
          </ul>
        </div>

        {/* Front-end */}
        <div className="skill-category">
          <h3>
            <span className="category-icon">{CATEGORY_ICONS.frontend}</span>
            Front-end
          </h3>
          <ul>
            <li>
              <img src={SKILL_LOGOS.html} alt="HTML" className="skill-icon" />
              HTML
            </li>
            <li>
              <img src={SKILL_LOGOS.css} alt="CSS" className="skill-icon" />
              CSS
            </li>
            <li>
              <img src={SKILL_LOGOS.javascript} alt="JavaScript" className="skill-icon" />
              JavaScript
            </li>
            <li>
              <img src={SKILL_LOGOS.react} alt="React" className="skill-icon" />
              React
            </li>
          </ul>
        </div>

        {/* Back-end */}
        <div className="skill-category">
          <h3>
            <span className="category-icon">{CATEGORY_ICONS.backend}</span>
            Back-end
          </h3>
          <ul>
            <li>
              <img src={SKILL_LOGOS.flask} alt="Flask" className="skill-icon" />
              Flask
            </li>
            <li>
              <img src={SKILL_LOGOS.nodejs} alt="NodeJS" className="skill-icon" />
              NodeJS
            </li>
          </ul>
        </div>

        {/* Database */}
        <div className="skill-category">
          <h3>
            <span className="category-icon">{CATEGORY_ICONS.database}</span>
            Database
          </h3>
          <ul>
            <li>
              <img src={SKILL_LOGOS.mysql} alt="MySQL" className="skill-icon" />
              MySQL
            </li>
            <li>
              <img src={SKILL_LOGOS.mongodb} alt="MongoDB" className="skill-icon" />
              MongoDB
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3>
            <span className="category-icon">{CATEGORY_ICONS.tools}</span>
            Tools
          </h3>
          <ul>
            <li>
              <img src={SKILL_LOGOS.powerbi} alt="PowerBI" className="skill-icon" />
              PowerBI
            </li>
            <li>
              <img src={SKILL_LOGOS.tableau} alt="Tableau" className="skill-icon" />
              Tableau
            </li>
            <li>
              <img src={SKILL_LOGOS.github} alt="GitHub" className="skill-icon" />
              GitHub
            </li>
            <li>
              <img src={SKILL_LOGOS.linux} alt="Linux" className="skill-icon" />
              Linux
            </li>
          </ul>
        </div>

        {/* AI Tools - New Category */}
        <div className="skill-category">
          <h3>
            <span className="category-icon">{CATEGORY_ICONS.ai}</span>
            AI Tools
          </h3>
          <ul>
            <li>
              <img src={SKILL_LOGOS.scikitlearn} alt="Scikit-learn" className="skill-icon" />
              Scikit-learn
            </li>
            <li>
              <img src={SKILL_LOGOS.tensorflow} alt="TensorFlow" className="skill-icon" />
              TensorFlow
            </li>
            <li>
              <img src={SKILL_LOGOS.opencv} alt="OpenCV" className="skill-icon" />
              OpenCV
            </li>
            <li>
              <img src={SKILL_LOGOS.pandas} alt="Pandas" className="skill-icon" />
              Pandas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
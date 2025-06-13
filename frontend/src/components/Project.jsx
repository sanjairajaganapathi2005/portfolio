import '../styles/project.css';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects', 'hackathons', or 'publications'

  const projects = [
    {
      title: "Plant Disease Prediction and Recommendation System",
      description: "Web-based solution for predicting plant diseases in real-time, enhancing agricultural decision making.",
      technologies: "ReactJS, Flask, Deep Learning, MongoDB, NodeJS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYa_kOojSDb-GwuUdPfx8ONGA1ta6WZ8ohOA&s"
    },
    {
      title: "Air Quality Prediction System",
      description: "Predicting Air Quality Levels for Healthier Environments through Our Web Application",
      technologies: "Flask, Machine Learning, PySpark",
      image: "https://img.freepik.com/free-vector/air-quality-monitor-abstract-concept-illustration_335657-1884.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Employee Manager Web Application",
      description: "A web application for managing and tracking employee production records and assigning tasks.",
      technologies: "ReactJS, NodeJS, MongoDB",
      image:"https://www.sourcecodester.com/sites/default/files/images/Hadiprasetyo/management_data_employe.jpg"
    },
    {
      title: "Import-Export Data Analysis (India)",
      description: "Designed a Power BI dashboard to analyze and visualize trade trends, supporting decision-making.",
      technologies: "Power BI, MS Excel",
      image: "https://rikkeisoft.com/wp-content/uploads/2023/03/ceo-dashboard-powerbi.png"
    }
  ];

  const hackathonProjects = [
    {
      title: "Construction Monitoring System",
      description: "Monitoring and Reporting the Construction Progress through Our Web Application",
      technologies: "Flask, Deep Learning, MongoDB, ReactJS, NodeJS, OpenCV, AWS",
      image: "https://www.shutterstock.com/image-photo/smart-construction-project-management-system-600nw-2281829875.jpg"
    },
    {
      title: "Farm2Bag ML Recommendation System (AI Conclave 1.0 Winner)",
      description: "Developed a machine learning-based recommendation system. Enhanced customer engagement with personalized product suggestions.",
      technologies: "Machine Learning, Flask, MongoDB",
      image: "https://www.farm2bag.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2FFarm2bag%20Banner.jpg&w=1080&q=100"
    }
  ];

  const publications = [
    {
      title: "Integrating Machine Learning in Air Quality Prediction Systems",
      publisher: "IEEE",
      link: "#"
    },
    {
      title: "Leveraging Deep Learning for Comprehensive Plant Disease Classification",
      publisher: "IEEE",
      link: "#"
    },
    {
      title: "Fake News Detection in Dravidian Languages Using Machine Learning",
      publisher: "ACL",
      link: "#"
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">Projects & Publications</h2>
      
      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={`tab-button ${activeTab === 'hackathons' ? 'active' : ''}`}
          onClick={() => setActiveTab('hackathons')}
        >
          Hackathons
        </button>
        <button 
          className={`tab-button ${activeTab === 'publications' ? 'active' : ''}`}
          onClick={() => setActiveTab('publications')}
        >
          Publications
        </button>
      </div>

      <div className="content-container">
        {activeTab === 'projects' && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    <span>Technologies:</span>
                    <div className="tech-tags">
                      {project.technologies.split(', ').map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'hackathons' && (
          <div className="projects-grid">
            {hackathonProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    <span>Technologies:</span>
                    <div className="tech-tags">
                      {project.technologies.split(', ').map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'publications' && (
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div className="publication-card" key={index}>
                <div className="pub-icon">📄</div>
                <div className="pub-content">
                  <h4>{pub.title}</h4>
                  <div className="pub-meta">
                    <span className="publisher">{pub.publisher}</span>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">
                      View Publication →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

const Projects = () => {
  const projects = [
    {
      title: "Construction Monitoring System",
      description: "Monitoring and Reporting the Construction Progress through Our Web Application",
      technologies: "Flask, Deep Learning, MongoDB, ReactJS, NodeJS, OpenCV, AWS (for deployment)"
    },
    {
      title: "Plant Disease Prediction and Recommendation System",
      description: "Developed a web-based solution for predicting plant diseases in real-time, enhancing agricultural decision making.",
      technologies: "ReactJS, Flask, Deep Learning, MongoDB, NodeJS"
    },
    {
      title: "Air Quality Prediction System",
      description: "Predicting Air Quality Levels for Healthier Environments through Our Web Application",
      technologies: "Flask, Machine Learning, PySpark"
    },
    {
      title: "Employee Manager Web Application",
      description: "A web application for managing and tracking employee production records and assigning tasks.",
      technologies: "ReactJS, NodeJS, MongoDB"
    },
    {
      title: "Import-Export Data Analysis (India)",
      description: "Designed a Power BI dashboard to analyze and visualize trade trends, supporting decision-making.",
      technologies: "Power BI, MS Excel"
    }
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
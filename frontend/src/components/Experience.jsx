const Experience = () => {
  const experiences = [
    {
      role: "Generative AI Intern",
      company: "Generative AI Consortium & SystimaNX IT Solutions Pvt Ltd (Remote)",
      description: "Documented Deep Learning concepts and developed a Python based Generative AI solution using a synthetic dataset."
    },
    {
      role: "Data Engineering Intern",
      company: "Centillion Labs (Remote)",
      description: "Learned Scala and PySpark concepts while working on data processing tasks. Gained hands-on experience with AWS resources like EC2 and S3."
    }
  ];

  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
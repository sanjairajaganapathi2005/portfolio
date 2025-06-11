import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Generative AI Intern",
      company: "Generative AI Consortium & SystimaNX IT Solutions Pvt Ltd (Remote)",
      description: "Documented Deep Learning concepts and developed a Python-based Generative AI solution using a synthetic dataset."
    },
    {
      role: "Data Engineering Intern",
      company: "Centillion Labs (Remote)",
      description: "Learned Scala and PySpark concepts. Hands-on experience with AWS EC2 and S3."
    }
  ];

  const leadership = [
    "AI Coding Club Joint Secretary (2024-25)",
    "AI Association Technical Head (2023-24)",
    "AI Coding Club Executive Member (2023-24)"
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

      <h3 className="subsection-title">Leadership</h3>
      <ul className="leadership-list">
        {leadership.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

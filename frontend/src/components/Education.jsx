import '../styles/education.css'; 

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      specialization: "Artificial Intelligence and Data Science",
      institution: "Kongu Engineering College, Perundurai",
      details: "CGPA: 7.81 (till 5th Semester)"
    },
    {
      degree: "Higher Secondary",
      institution: "Sri Vidyaa Mandhir Matric Hr. Sec. School, Nachipatti, Vennandur(Po), Namakkal(Dt) - 637505",
      details: "Percentage: 91.16%"
    },
    {
      degree: "SSLC",
      institution: "Sri Venkateswaraa Matric Hr. Sec. School, Vennandur, Namakkal(Dt) - 637505",
      details: "Percentage: 93.2%"
    }
  ];

  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            {edu.specialization && <p className="specialization">{edu.specialization}</p>}
            <p className="institution">{edu.institution}</p>
            <p className="details">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
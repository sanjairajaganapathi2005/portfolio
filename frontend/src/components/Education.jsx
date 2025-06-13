import '../styles/education.css';
import { useEffect, useRef } from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      specialization: "Artificial Intelligence and Data Science",
      institution: "Kongu Engineering College, Perundurai",
      details: "CGPA: 7.81 (till 5th Semester)",
      year: "2022 - 2026",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary",
      institution: "Sri Vidyaa Mandhir Matric Hr. Sec. School, Namakkal",
      details: "Percentage: 91.16%",
      subjects: "Mathematics, Physics, Chemistry, Computer Science, English, Tamil",
      year: "2021 - 2022",
      icon: "📚"
    },
    {
      degree: "SSLC",
      institution: "Sri Venkateswaraa Matric Hr. Sec. School, Namakkal",
      details: "Percentage: 93.2%",
      subjects: "Mathematics, Science, English, Tamil, Social Science",
      year: "2019 - 2020",
      icon: "📖"
    }
  ];

  const certifications = [
    { 
      title: "MongoDB Associate Developer in NodeJS", 
      issuer: "MongoDB University",
      year: "2025",
      icon: "📜"
    },
    { 
      title: "AI Certification Salesforce", 
      issuer: "Salesforce Trailhead",
      year: "2025",
      icon: "🏅"
    },
    { 
      title: "Oracle Certified Foundations Associate", 
      issuer: "Oracle University",
      year: "2024",
      icon: "🔖"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="education-certifications-section" id="education-certifications" ref={sectionRef}>
      {/* Education Section */}
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          <div className="timeline-connector-line"></div>
          
          {education.map((edu, index) => (
            <div className="timeline-items" key={index}>
              <div className="timeline-marker">
                <div className="timeline-icon">{edu.icon}</div>
              </div>
              <div className="education-card">
                <div className="card-header">
                  <h3>{edu.degree}</h3>
                  <span className="year-badge">{edu.year}</span>
                </div>
                {edu.specialization && <p className="specialization">{edu.specialization}</p>}
                <p className="institution">
                  <span className="institution-icon">🏛️</span> {edu.institution}
                </p>
                <p className="details">
                  <span className="details-icon">📊</span> {edu.details}
                </p>
                {edu.subjects && (
                  <div className="subjects">
                    <span className="subjects-icon">📝</span>
                    <span className="subjects-text">{edu.subjects}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <div className="cert-footer">
                  <span className="year">{cert.year}</span>
                  <button className="view-button">View Credential</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

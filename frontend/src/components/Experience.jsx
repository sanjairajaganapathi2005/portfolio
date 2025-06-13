import '../styles/experience.css';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Generative AI Intern",
      company: "Generative AI Consortium & SystimaNX IT Solutions Pvt Ltd (Remote)",
      description: "Documented Deep Learning concepts and developed a Python-based Generative AI solution using a synthetic dataset.",
      duration: "Feb 2024 - Apr 2024",
      skills: ["Python", "Deep Learning", "Generative AI"]
    },
    {
      role: "Data Engineering Intern",
      company: "Centillion Labs (Remote)",
      description: "Learned Scala and PySpark concepts. Hands-on experience with AWS EC2 and S3.",
      duration: "jun 2024 - oct 2024",
      skills: ["Scala", "PySpark", "AWS"]
    }
  ];

  const leadership = [
    {
      role: "AI Association Technical Head",
      organization: "Kongu Engineering College",
      duration: "2023-24",
    },
    {
      role: "AI Coding Club Executive Member",
      organization: "Kongu Engineering College",
      duration: "2023-24",
    },
    {
      role: "AI Coding Club Joint Secretary",
      organization: "Kongu Engineering College",
      duration: "2024-25",
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
    <div className="experience-section" id="experience" ref={sectionRef}>
      <h2 className="section-title">Experience & Leadership Journey</h2>
      
      <div className="split-layout">
        {/* Experience Column (65%) */}
        <div className="experience-column">
          <h3 className="column-title">
            <span className="icon">💼</span>
            Professional Experience
          </h3>
          <div className="experience-cards">
            {experiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                <div className="card-header">
                  <h4>{exp.role}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
                <p className="company">{exp.company}</p>
                <p className="description">{exp.description}</p>
                <div className="skill-container">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Roadmap (30%) */}
        <div className="leadership-roadmap">
          <h3 className="roadmap-title">
            <span className="icon">🚀</span>
            Leadership Path
          </h3>
          <div className="timeline">
            {leadership.map((role, index) => (
              <div className="timeline-itemss" key={index}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{role.role}</h4>                  
                  <span className="organization-icon">🏢</span>
                  <span className="organization-name">{role.organization}</span>
                  <h6 className="timeline-duration">{role.duration}</h6>
                  
                </div>
              </div>
            ))}
            <div className="timeline-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

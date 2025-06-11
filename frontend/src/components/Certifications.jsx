import '../styles/certifications.css';

const Certifications = () => {
  const certifications = [
    { title: "MongoDB Associate Developer in NodeJS" },
    { title: "AI Certification – Salesforce" },
    { title: "Oracle Certified Foundations Associate" }
  ];

  return (
    <div className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

const Publications = () => {
  const publications = [
    {
      title: "Integrating Machine Learning in Air Quality Prediction Systems",
      publisher: "IEEE"
    },
    {
      title: "Leveraging Deep Learning for Comprehensive Plant Disease Classification: A Pathway to Sustainable Agriculture",
      publisher: "IEEE"
    },
    {
      title: "Fake News Detection in Dravidian Languages Using Machine Learning",
      publisher: "ACL"
    }
  ];

  return (
    <div className="publications-section">
      <h2 className="section-title">Publications</h2>
      <div className="publications-container">
        {publications.map((pub, index) => (
          <div className="publication-card" key={index}>
            <h3>{pub.title}</h3>
            <p className="publisher">{pub.publisher}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
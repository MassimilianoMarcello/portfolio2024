

const TechnologiesUsed = ({ technologies }) => {
  return (
    <div>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesUsed;

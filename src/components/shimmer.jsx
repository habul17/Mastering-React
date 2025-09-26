const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;

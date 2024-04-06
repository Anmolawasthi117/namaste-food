const Shimmer = () => {
  return (
    <div className="shimmer-cont">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-location"></div>
            <div className="shimmer-cusines"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

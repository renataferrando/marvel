import "./_results.scss";

const Results = ({ query, clear }) => {
  return (
    <div className="results">
      <span>Results for:</span> "<span className="query">{query}</span>"
      <p className="clear" onClick={clear}>
        Clear filter
      </p>
    </div>
  );
};

export default Results;

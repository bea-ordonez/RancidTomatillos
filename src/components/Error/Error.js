import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Error</h1>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button className="go-home-button">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;

import './Error.css'
import {Link}  from "react-router-dom";

const Error = () => {
  return (
      <div className="error-page">
        <h1>Error</h1>
        <h2>Page Not Found</h2>
        <Link to="/">
          <button className='go-home-button'>Go Home</button>
        </Link>
      </div>
  )
}


export default Error
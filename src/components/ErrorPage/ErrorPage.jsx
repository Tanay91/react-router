import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div>
      <h2>OPPS!!</h2>
      <p>{error.statusText || error.message}</p>
      {
        error.status===404 && <div>
            <h3>Page not Found</h3>
           <Link to="/"><button className="btn">Home</button></Link>
        </div>
      }
    </div>
  )
}

export default ErrorPage

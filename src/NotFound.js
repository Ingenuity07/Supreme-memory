import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="blog-details">
        <h2>Sorry</h2>
        <p>Error 404 Page Not Found</p>
        <Link  to="/" ><button  >Home</button></Link>
    </div> );
}
 
export default NotFound;
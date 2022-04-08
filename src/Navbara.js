import { Link } from "react-router-dom";

const Navbar = (props) => {
    return ( 
    <nav className='navbar'>
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to="/" onClick={()=>props.setEditId(-1)} >Home</Link>
            <Link to="/create" onClick={()=>props.setEditId(-1)}>New Blog</Link>
        </div>
    </nav> 
    );
}
 
export default Navbar;
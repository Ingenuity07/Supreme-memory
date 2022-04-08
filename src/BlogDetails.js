import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const BlogDetails = (props) => {
    
    const { id } =useParams();
   const{data:blog,error,isPending} =useFetch('http://localhost:8000/blogs/'+ id)
   
   
   const history=useHistory();
    const handleClick =()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <hr />
                    <p>Written By {blog.author}</p>
                    <button onClick={handleClick}>Delete</button>
                    <Link to='/create'><button  onClick={()=>props.setEditId(blog)}>Edit</button></Link>
                </article>
            )

            }
        </div>
     );
}

// const mapStateToProps=(state,ownProps)=>{
    
//     return {
//         post:state.posts
//     }
// }

 
export default BlogDetails;
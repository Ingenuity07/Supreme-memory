//import { useState ,useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import { connect } from "react-redux";

const Home = () => {

  const{data:blogs,error,isPending} =useFetch('http://localhost:8000/blogs')

  

  return (
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>Loading...</div> }
      {blogs&&<BlogList blogs={blogs} title='All Blogs'/>}
    </div>
  );
}

// const mapStateToProps = (state) =>{
//   return {
//     blogs:state.blogs
//   }
// }


export default Home;
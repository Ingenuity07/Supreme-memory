import { useState,useEffect } from "react";
import { connect } from "react-redux";

const useFetch = (props) => {

    const [data, setData] = useState(null); 
    const [isPending,setIsPending] = useState(false);
    const [error,setError]=useState(null);
    const url=props
    console.log(data)

  useEffect(()=>{

    const abortCont = new AbortController();
      
        
    setTimeout(() => {
      
    fetch(url,{signal: abortCont.signal})
    .then(res => {
    
      if(!res.ok){
        throw Error('Could not fetch data');
      }
      return res.json();})
    .then(data => {
      setData(data);
      setError(null);
      setIsPending(false);
    }).catch(err=>{

      if(err.name==='AbortError')
      {
          console.log('fetch aborted');
      }
      else
      {
      setIsPending(false);
      setError(err.message);
      }
      })
    }, 1000);

    
    return ()=>{abortCont.abort();}
    
  },[url]);

  return {data,isPending,error};
}

// const mapStateToProps = (state) =>{
//   return {
//     blogs:state.blogs
//   }
// }


export default useFetch
import React from 'react'
import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import '../index.css'
import YouTube from 'react-youtube'



const Subcards=()=>{
    let location=useLocation();
    let specificMovie=location.state.x;
    let[trailers,setTrailers]=useState("")
    
    async function Trailer(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=59fba8ee5eaf0049a783c5bfbfd175d3`)
        .then(x=>x.json())
        .then(x=>{
          console.log(x);
          setTrailers(x.results[0].key)})
        .catch(()=>console.log("Api failed")
        )
      }

      
      

return(
      <div>
    
        <h3>{specificMovie.title}</h3>
        <p>(original Movie:{specificMovie.original_title})</p>
        <img src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} alt=""/>
        <h4>{specificMovie.overview}</h4>
        <p>Rating:{specificMovie.vote_average}</p>

       <button onClick={()=>Trailer(specificMovie.id)}>click for detailes</button>
       <div>
     {trailers && <YouTube videoId={trailers}/>}
     </div>
     </div>

    )
}


export default Subcards
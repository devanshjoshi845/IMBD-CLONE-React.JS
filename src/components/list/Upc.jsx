import { useEffect, useState } from "react";
import Cards from "../card/card";
function Up(){
 let [movielist,setmovielist]=useState([])
 useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
  .then(res=>res.json())
  .then(data=>setmovielist(data.results))
 })
 return(
  <div className="movie__list">
  <h2 className="list__title">UPCOMING</h2>
  <div className="list__cards">
      {
          movielist.map(movie => (
              <Cards movie={movie} />
          ))
      }
  </div>
</div>
 )
}
export default Up;

import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.css'
import MovieList from '../list/Pop';

import { Link } from "react-router-dom";
function Home(){
 let [popularmovies,setpopularmovies]=useState([])
 useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
  .then(res=>res.json())
  .then(data=>setpopularmovies(data.results))
 },[])
 return(
  <div className="home-carousel">
<Carousel 
showThumbs={false}
autoPlay={true}
transitionTime={3}
infiniteLoop={true}
showStatus={false}
>
 {
  popularmovies.map((movie)=>{
   return(
    <Link className='carousel' style={{textDecoration:"none" ,color:"white"}} to={`/movie/${movie.id}`}>
     <div className='carousel-poste'>
      <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" className='carousel-img' />
     </div>
     <div className='carousel-content'  >
       <div className='carousel-title'>{movie?  movie.original_title : ""}</div>
       <div className='carousel-date'>{movie?  movie.release_date : ""}</div> 
       <div className='carousel-vote'><span>{movie? movie.vote_average:""}</span> <i className="fas fa-star" />{" "} </div>
       <div className='carousel-overview'>{movie ? movie.overview: " "}</div>
     </div>
    
    </Link>
   )
  })
 }
</Carousel>
<MovieList/>
  </div>
 )
}
export default Home;
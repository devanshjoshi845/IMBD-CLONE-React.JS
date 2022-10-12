import React, {useEffect, useState} from "react"
import "./list.css"

import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
   

  

  useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
   .then(res => res.json())
   .then(data => setMovieList(data.results))
  },[])

  

    return (
        <div className="movie__list">
            <h2 className="list__title">POPULAR</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;
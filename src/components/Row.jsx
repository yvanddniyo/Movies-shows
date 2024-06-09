import React, { useEffect, useState } from 'react'
import axios from "../configs/axios"
import "../components/Row.css"

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const Base_url = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
     },[fetchUrl])
     console.log(movies)
  return (
    <div className='row '>
    <h2>{title}</h2>
    <div className="row__posters">
        {
            movies.map((movie, index) => 
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <div className="">
                        <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={index}
                        src={`${Base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                        <div className="row__details">
                        <h2 className='row__name'>{movie.name}</h2>
                        <h3 className='row__rate'>Rate: {movie.vote_average}</h3>
                        </div>
                    </div>
                )
            )
        }
        
    </div>
    </div>
  )
}

export default Row
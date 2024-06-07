import  { useState, useEffect } from 'react'
import "./Banner.css"
import axios from "../configs/axios"
import requests from '../configs/Request'


const Banner = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request
        }
        fetchData()
    },[])
    const truncate = (string, n) => {
        return string?.length > n? string.substr(0, n - 1) + ". . .": string
    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">{movies?.title || movies?.name || movies.original_name
}</h1>
            <div className="banner__buttons">
                <button  className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
           <h1 className='banner__description'>
            {truncate(movies?.overview, 180)}</h1>
        </div> 
        <div className="banner__fadeBottom" />
    </header>
  )
} 

export default Banner
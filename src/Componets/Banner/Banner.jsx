import {useState, useEffect} from 'react'
import axios from "../../Utils/axios.js"
import requests from "../../Utils/request.js"
import "../Banner/Banner.css"
function Banner() {
const [movie, setMovie] = useState({})
useEffect(() => {
const movieFun = async () => {
    try {
      const request = await axios.get(requests.fetchNetflixOriginals) 
      console.log(request);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ])
     
    } 
    catch (error) {
      console.log("error", error.response || error.message);  
    }
}
movieFun();
}, [])

function truncate (str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-reapet",
        }}
      >
        <div className="bannerContent">
          <h1 className="bannerTitle">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
        </div>
        <div className="bannerButton">
          <button className="play">Play</button>
          <button className="list">My List</button>
        </div>
        <div>
          <p className="overview">{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
    </>
  );
}

export default Banner

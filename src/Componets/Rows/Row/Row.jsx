import { useEffect, useState } from "react";
import "../Row/Row.css";
import axios from "../../../Utils/axios.js";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        if (!url) {
          console.log("Trailer not found for:", movie?.title);
          return;
        }

        const urlParams = new URLSearchParams(new URL(url).search);
        const videoId = urlParams.get("v");
        setTrailerUrl(videoId);
      })
      .catch((error) => {
        console.log("Trailer search error:", error);
      });
  };
const opts = {
    height : '390',
    width : '100%',
    playerVars : {
        autoplay : 1,
    },

}
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
          {movies?.map((movie, index) => {
            const imgPath = isLargeRow
              ? movie.poster_path
              : movie.backdrop_path;
            if (!imgPath) return null;

            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${base_url}${imgPath}`}
                alt={movie.name}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              />
            );
          })}
        </div>
        <div style={{ marginTop : '20px'}}>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Row;

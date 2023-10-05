import { useEffect, useState } from "react"
import { Movie } from "../types/Movie";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function loadMovies() {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=pt-BR'
      const response = await axios.get(
        url,
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_MOVIEDB_JWT_TOKEN}`,
            "accept": "application/json"
          }
        }
      )

      setMovies(response.data.results);
    }

    loadMovies()
  }, [])

  return (
    <div>
      <h1>Lista filmes e séries</h1>
      <button onClick={() => setCurrent(current - 1)}>{"<"}</button>
      <button onClick={() => setCurrent(current + 1)}>{">"}</button>
      {movies.map((movie, index) => (
        <div key={movie.id} style={{
          display: index === current ? 'block' : 'none'
        }}>
            <img width={500} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Movies

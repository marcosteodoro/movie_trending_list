import { Movie } from "../types/Movie";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Movies() {
  const { data: movies, isFetching } = useFetch<Movie[]>('/trending/movie/day?language=pt-BR');
  const [current, setCurrent] = useState(0);

  if (isFetching) {
    return <h1>Carregando a lista de filmes...</h1>
  }

  return (
    <div>
      <h1>Lista filmes</h1>
      <button onClick={() => setCurrent(current - 1)}>{"<"}</button>
      <button onClick={() => setCurrent(current + 1)}>{">"}</button>
      {movies?.map((movie, index) => (
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

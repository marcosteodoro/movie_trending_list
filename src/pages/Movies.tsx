import { Movie } from "../types/Movie";
import { useState } from "react";
import { useQuery } from "react-query";
import api from "../services/api";

function Movies() {
  const { data: movies, isFetching } = useQuery<Movie[]>('movie', async () => {
    const response = await api.get('/trending/movie/day?language=pt-BR');
    return response.data.results;
  }, {
    staleTime: 1000 * 60 // 1 minuto
  })
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

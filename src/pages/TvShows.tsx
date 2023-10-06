import { useState } from "react"
import { TvShow } from "../types/TvShow";
import { useFetch } from "../hooks/useFetch";

function TvShows() {
  const { data: tvShows, isFetching } = useFetch<TvShow[]>('/trending/tv/day?language=pt-BR');
  const [current, setCurrent] = useState(0);

  if (isFetching) {
    return <h1>Carregando a lista de séries...</h1>
  }

  return (
    <div>
      <h1>Lista séries</h1>
      <button onClick={() => setCurrent(current - 1)}>{"<"}</button>
      <button onClick={() => setCurrent(current + 1)}>{">"}</button>
      {tvShows?.map((tvShow, index) => (
        <div key={tvShow.id} style={{
          display: index === current ? 'block' : 'none'
        }}>
            <img width={500} src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} />
            <h2>{tvShow.name}</h2>
            <p>{tvShow.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default TvShows

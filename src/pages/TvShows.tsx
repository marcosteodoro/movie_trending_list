import { useState } from "react"
import { TvShow } from "../types/TvShow";
import { useQuery } from "react-query";
import api from "../services/api";

function TvShows() {
  const { data: tvShows, isFetching } = useQuery<TvShow[]>('tvShows', async () => {
    const response = await api.get('/trending/tv/day?language=pt-BR');
    return response.data.results;
  }, {
    staleTime: 1000 * 60, // 1 minuto
    refetchOnWindowFocus: "always",
  })
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

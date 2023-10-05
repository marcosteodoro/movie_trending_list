import { useEffect, useState } from "react"
import { TvShow } from "../types/TvShow";
import axios from "axios";

function TvShows() {
  const [tvShows, setTvShows] = useState<TvShow[]>([]);
  const [current, setCurrent] = useState(0);

  console.log(import.meta.env.VITE_MOVIEDB_JWT_TOKEN);

  useEffect(() => {
    async function loadTvShows() {
      const url = 'https://api.themoviedb.org/3/trending/tv/day?language=pt-BR'
      const response = await axios.get(
        url,
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_MOVIEDB_JWT_TOKEN}`,
            "accept": "application/json"
          }
        }
      )

      setTvShows(response.data.results);
    }

    loadTvShows()
  }, [])

  return (
    <div>
      <h1>Lista séries</h1>
      <button onClick={() => setCurrent(current - 1)}>{"<"}</button>
      <button onClick={() => setCurrent(current + 1)}>{">"}</button>
      {tvShows.map((tvShow, index) => (
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

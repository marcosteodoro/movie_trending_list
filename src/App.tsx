import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Link to="/movies"><button>Filmes</button></Link>
      <Link to="/tv-shows"><button>Séries</button></Link>
    </div>
  )
}

export default App

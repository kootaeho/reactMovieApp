import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return <div>
    {loading ? <h1>Loading...</h1> : (movies.map((movie) => 
    <Movie 
    id={movie.id}
    key={movie.id}
    title={movie.title} 
    coverimg={movie.medium_cover_image} 
    summary={movie.summary}
    genres={movie.genres} />))
    }
  </div>;

}


export default Home;
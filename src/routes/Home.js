import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
   
  };
  
  useEffect(() => {
    getMovies();
  }, []);
  return (
  <div className= {styles.parent}>
  <div className = {styles.grid}>
    {loading ? <h1>Loading...</h1> : (movies.map((movie) => 
    <Movie
    id={movie.id}
    key={movie.id}
    title={movie.title}
    coverimg={movie.medium_cover_image}
    summary={movie.summary}
    genres={movie.genres} />))
    }
  </div>
  </div>
  );
}


export default Home;
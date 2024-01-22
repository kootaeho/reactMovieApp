import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const[movies,setmovies] = useState([]);

    const getMovie = async () =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setmovies(json.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, [])

    const backgroundImg = movies.background_image;
    const poster = movies.medium_cover_image;
    const title = movies.title;
    const summary = movies.summary;
    const genre = movies.genres;
    const rating = movies.rating;
    const year = movies.year;
    console.log(movies);
    return (
        <div style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            minHeight: '100vh', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div>
                <div>
                    <img src={poster} alt="Movie Poster" />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{summary}</p>
                    <p>장르: {genre}</p>
                    <p>평점: {rating}</p>
                    <p>출시년도: {year}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;
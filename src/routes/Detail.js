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

    return (
        <div style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            minHeight: '100vh', // 최소 높이를 화면 높이로 설정
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        </div>
    );
}

export default Detail;
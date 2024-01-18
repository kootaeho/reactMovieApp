import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './Movie.module.css';

function Movie({id,title, coverimg, summary, genres}){
    return (
    <div className = {styles.con} >  
        <img className = {styles.movie__img} src={coverimg} alt={title}/>
        <h2>
          <Link to = {`/movie/${id}`}>{title}</Link>
          </h2>
        <p>{summary.length > 400 ? `${summary.slice(0, 400)}...`: summary}</p>
        <ul>
          {genres.map(g => <li key = {g}>{g}</li>)}
        </ul>
      </div>
      );
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;

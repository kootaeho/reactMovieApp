import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Movie({title, coverimg, summary, genres}){

    return (<div>
        <h2>
          <Link to = "/movie">{title}</Link>
          </h2>
        <img src={coverimg} alt={title}/>
        <p>{summary}</p>
        <ul>
          {genres.map(g => <li key = {g}>{g}</li>)}
        </ul>
        </div>);
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;

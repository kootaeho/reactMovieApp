import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './Movie.module.css';

function Movie({id,title, coverimg, summary, genres}){
  const [isHover, setHover] = useState(false);
  const onMouse = () =>{
    setHover(true);
  };

  const onMouseleave = () =>{
    setHover(false);
  };


  return (
    <div
    className =  {`${styles.con} ${isHover ? styles.hovered : ''}`}
    onMouseEnter={onMouse}
    onMouseLeave={onMouseleave}
    >
    <img src={coverimg} alt={title}/>
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

import React from 'react';
import {Link} from "react-router-dom";

import "./FilmCard.css"
import "../Films/Films.css"
// import {useSelector} from "react-redux";

const FilmCard = ({film}) => {
    const {id, title, overview, release_date, runtime, poster_path} = film;
    const img_path = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="all_films_cards">
            <div className="film_card">
                <img src={img_path + poster_path} alt={`${title} poster`}/>
                <h1><b>{title}</b></h1>
                <p>{overview}</p>
                {/*<StarsRating/>*/}
                {/*{genres}*/}
                {/*<p>{genre_ids?.filter().map(id => genres.filter((genres)=>genres.id===id))}</p>*/}
                <p>released: {release_date}</p>
                {/*runtime: {runtime}*/}
                <Link to={`/movie/${id}`}>film details</Link>
            </div>
        </div>
    );
};

export default FilmCard;
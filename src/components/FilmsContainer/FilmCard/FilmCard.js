import React from 'react';
import {Link} from "react-router-dom";

import "./FilmCard.css"
import "../Films/Films.css"
// import {useSelector} from "react-redux";

const FilmCard = ({film}) => {
    console.log("hello FilmCard")
    const {id, title, overview, release_date, runtime, poster_path} = film;
    const img_path = 'https://image.tmdb.org/t/p/w300';

    return (
        <div className="all_films_cards">
            <div className="film_card">
                <Link to={`/movie/${id}`}>
                    <img src={img_path + poster_path} alt={`${title} poster`}/>
                </Link>
                <Link to={`/movie/${id}`} className="link_title_card_preview">
                    <h1 className="title_card_preview">
                        <b>{title}</b>
                    </h1>
                </Link>
                {/*<p>{overview}</p>*/}
                {/*<StarsRating/>*/}
                {/*{genres}*/}
                {/*<p>{genre_ids?.filter().map(id => genres.filter((genres)=>genres.id===id))}</p>*/}
                {/*<p>released: {release_date}</p>*/}
                {/*runtime: {runtime}*/}
                {/*<button><Link to={`/movie/${id}`}>film details</Link></button>*/}
            </div>
        </div>
    );
};

export default FilmCard;
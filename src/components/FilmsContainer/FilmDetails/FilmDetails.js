import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {StarsRating} from "../../StarsRating";

import {filmsActions} from "../../../redux";
import {useLocation} from "react-router-dom";
import "./FilmDetails.css"


const FilmDetails = () => {
    // const [trigger, setTrigger] = useState();
    const dispatch = useDispatch();
    const {title, overview, genres, release_date, runtime, poster_path} = useSelector(state => state.films.film);

    const location = useLocation();
    const filmId = +location.pathname.split("/").pop();

    const img_path = 'https://image.tmdb.org/t/p/w500';
    // const {genres:AllGenres} = useSelector(state => state.genres);
    // const currFilmGenres = AllGenres.filter(genre => genre.id===genres)

    useEffect(() => {
        dispatch(filmsActions.getFilmInfo(filmId))
    }, [])

    return (
        <div className="film_details_page">
            <div className="film_img">
                <img src={img_path + poster_path} alt={`${title} poster`}/>
            </div>
            <div className="film_text_info">
                <div className="film_title">
                {title}</div>
                <br/>
                <div className="film_overview">{overview}</div>
                {/*<StarsRatingM/>*/}<br/>
                {/*{genres.map(genre => genre.join(","))}*/}<br/>
                release: {release_date}<br/><br/>
                runtime: {runtime}<br/><br/>
            </div>
        </div>
    );
};

export default FilmDetails;
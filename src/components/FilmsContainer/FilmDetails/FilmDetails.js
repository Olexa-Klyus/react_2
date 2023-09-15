import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {StarsRating} from "../../StarsRating";

import {filmsActions} from "../../../redux";
import {useLocation} from "react-router-dom";
// import {useLocation} from "react-router-dom";


const FilmDetails = () => {
    // const [trigger, setTrigger] = useState();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const {title, overview, genres, release_date, runtime, poster_path} = useSelector(state => state.film);
    // }, [dispatch])

    const location = useLocation();
    const filmId = +location.pathname.split("/").pop();

    const img_path = 'https://image.tmdb.org/t/p/w500';
    // const {genres:AllGenres} = useSelector(state => state.genres);
    // const currFilmGenres = AllGenres.filter(genre => genre.id===genres)

    useEffect(() => {
        dispatch(filmsActions.getFilmInfo(filmId))
    }, [])

    return (
        <div>
            Film
            {/*<img src={img_path + poster_path} alt={`${title} poster`}/>*/}
            {/*{title}*/}
            {/*{overview}*/}
            {/*/!*<StarsRatingM/>*!/*/}
            {/*{genres.map(genre => <a>{genre}</a>)}*/}
            {/*release: {release_date}*/}
            {/*runtime: {runtime}*/}

        </div>
    );
};

export default FilmDetails;
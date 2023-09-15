import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import FilmCard from "../FilmCard/FilmCard";
import "./Films.css"
import {filmsActions} from "../../../redux";

const Films = () => {
    const {films} = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsActions.getAllFilms())
    }, [])

    return (
        <div className="all_films_cards">
            {films?.map(film => <FilmCard key={film.id} film={film}/>)}
        </div>
    );
};

export default Films;
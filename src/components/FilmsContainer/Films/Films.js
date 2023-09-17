import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import FilmCard from "../FilmCard/FilmCard";
import "./Films.css"
import {filmsActions} from "../../../redux";
import {useSearchParams} from "react-router-dom";

const Films = () => {
    const {films} = useSelector(state => state.films);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:"1", size:"10"})

    useEffect(() => {
        dispatch(filmsActions.getAllFilms({page:+query.get("page"), size:+query.get("size")}))
    }, [query.get("page"), query.get("size")])

    return (
        <div className="all_films_cards">
            {films?.map(film => <FilmCard key={film.id} film={film}/>)}
        </div>
    );
};

export default Films;
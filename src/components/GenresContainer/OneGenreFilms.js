import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

// import genre from "./Genre/Genre";
import FilmCard from "../FilmsContainer/FilmCard/FilmCard";
import {genresActions} from "../../redux/slices/genresSlice";

const OneGenreFilms = () => {
    const {arrayResult} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const location = useLocation();
    const id = +location.pathname.split("/").pop();
    // const currentGenre = genres.filter(()=> genres.id===id)[0]

    useEffect(() => {
            dispatch(genresActions.oneGenreFilms(id))
        }, []
    );

    return (
        <div>
            <div className="genreName">
                {/*{currentGenre.name && <h1>{currentGenre.name}</h1>}*/}
            </div>
            <div className="all_films_cards">
                {arrayResult?.map(film => <FilmCard key={film.id} film={film}/>)}
            </div>
        </div>
    );
};

export {OneGenreFilms};
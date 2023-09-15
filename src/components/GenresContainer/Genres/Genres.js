import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresActions} from "../../../redux/slices/genresSlice";
import Genre from "../Genre/Genre";
import "./Genres.css"

const Genres = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(genresActions.getGenres())
        }, []
    );

    return (
        <div className="genres_container">
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;
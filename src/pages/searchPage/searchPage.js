import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import FilmCard from "../../components/FilmsContainer/FilmCard/FilmCard";
import {searchActions} from "../../redux/slices/searchSlice";

const SearchPage = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    // const [trigger, setTrigger] = useState(null);

    const {films} = useSelector(state => state.films)

    const search = (str) => {
        dispatch(searchActions.searchThunk(str["search_input_request"]))
        reset()
    };

    return (
        <div>
            <div>
                SearchPage
                <form onSubmit={handleSubmit(search)}>
                    <div>
                        <input type="text"
                               placeholder={"I'm searching..."} {...register("search_input_request", {required: true})}/>
                    </div>
                    <button>search</button>
                </form>
            </div>
            {films.map(film => <FilmCard key={film.id} film={film}/>)}
        </div>
    );
};

export default SearchPage;
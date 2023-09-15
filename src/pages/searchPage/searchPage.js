import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {searchActions} from "../../redux/slices/searchSlice";
import FilmCard from "../../components/FilmsContainer/FilmCard/FilmCard";

const SearchPage = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const {films} = useSelector(state => state.films)

    const search = (str) => {
        // const str = obj
        // console.log(str)
        console.log(str)
        dispatch(searchActions.searchThunk(str))
    };

    return (
        <div>
            <div>
                SearchPage
                <form onSubmit={handleSubmit(search)}>
                    <div><input type="text" placeholder={"I'm searching..."} {...register("search_input_request")}/>
                    </div>
                    <button>search</button>
                </form>
            </div>
            {films?.map(film => <FilmCard key={film.id} film={film}/>)}
        </div>
    );
};

export default SearchPage;
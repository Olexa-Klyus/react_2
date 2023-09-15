import React from 'react';

import "./Genre.css"
import {useNavigate} from "react-router-dom";

const Genre = ({genre}) => {
    const navigate = useNavigate();
    const showGenreFilms = (id) => {
        // navigate(`/discover/movie?with_genres=${id}`)
        navigate(`${id}`)

        // navigate(`/jgj=5`)

        // return `/discover/movie?with_genres=${id}`

        // return <Link to={`/discover/movie?with_genres=${id}`}></Link>
        // navigate(`${urls.films.byGenre(id)}`, { replace: true })
        //     return <div><Link to={}{`${urls.films.byGenre(id)}`></Link></div>
    }

    return (
            <button className="genre_name_title" onClick={() => showGenreFilms(genre.id)}> {genre.name}

                {/*// <button className="genre_name_title" onClick={()=><oneGenreFilms key={genre.id} genre={genre}/>}>*/}

                {/*// <button className="genre_name_title" onClick={<OneGenreFilms key={genre.id} genre={genre}/>}>*/}

                {/*// </button>*/}
                {/*<button className="genre_name_title">*/}
                {/*<Link to={`${urls.films.byGenre(genre.id)}`}>{genre.name}</Link>*/}
            </button>

    );
};

export default Genre;
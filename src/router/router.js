import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import FilmsPage from "../pages/filmsPage/filmsPage";
import GenresPage from "../pages/genresPage/genresPage";
import SearchPage from "../pages/searchPage/searchPage";
import {OneGenreFilms} from "../components/GenresContainer/OneGenreFilms";
import FilmDetails from "../components/FilmsContainer/FilmDetails/FilmDetails";


const router = createBrowserRouter([
    {
        path:"",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={`movies`}/>
            },
            {
                // path:`${urls.films.all}`,
                path: `movies`,
                element:<FilmsPage/>,
            },
            {
                // path:`${urls.genres.base}`,
                path:`genres`,
                element:<GenresPage/>,
            },
            {
                path:`genres/:id`,
                element: <OneGenreFilms/>
            },
            {
                // path:`${urls.search.byStr}`,
                path: "search",
                element:<SearchPage/>
            },
            {
                path:`movie/:id`,
                element:<FilmDetails/>
            },
            {
                // path: `${urls.genres.byGenre}`,
                // path:  `discover/movie?with_genres=:id`,
                // path: `jgj=5`,
                // path: `genre/movie/list/discover/movie?with_genres=:id`,
                // element: <OneGenreFilms/>
                //loader: genresActions.oneGenreFilms
            }
        ]
    },
    {}
]);

export {router};
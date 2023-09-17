import React from 'react';

import Films from "../../components/FilmsContainer/Films/Films";
import {Pagination} from "@mui/material";
import Pagination2 from "../../components/Pagination2/Pagination2";

const FilmsPage = () => {
    return (
        <div className="films_page">
            <Films/>
            <Pagination2/>
            <Pagination/>
        </div>
    );
};

export default FilmsPage;
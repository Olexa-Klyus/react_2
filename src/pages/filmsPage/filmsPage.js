import React from 'react';

import Films from "../../components/FilmsContainer/Films/Films";
import {Pagination} from "@mui/material";

const FilmsPage = () => {
    return (
        <div className="films_page">
            <Films/>
            <Pagination/>
        </div>
    );
};

export default FilmsPage;
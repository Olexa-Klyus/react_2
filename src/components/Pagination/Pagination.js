import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {TablePagination} from "@mui/material"

const Pagination = () => {
    const {total_pages} = useSelector(state => state.films);
    const [query, setQuery] = useSearchParams({page: "1", size: "10"})
    const handleChangePage = (page) => {
        setQuery(prev => {
            prev.set("page", (page + 1).toString())
            return prev
        })
    };

    const handleChangeRowsPerPage = (e) => {

        console.log("hhhhhh", e.target.value);
    }

    return (
        <>
            {
                total_pages && (
                    <TablePagination
                        component="div"
                        count={total_pages}
                        page={+query.get("page")}
                        onPageChange={handleChangePage}
                        rowsPerPage={+query.get("size")}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[10, 20]}
                    />
                )
            }
        </>
    );
};

export {Pagination};
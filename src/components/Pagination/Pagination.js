import React from 'react';
// rsf
import {Link, NavLink, useParams } from "react-router-dom"
import { Button } from '@mui/material';

const Pagination = ({newsPerPage, totalNews, searchResult, pageNumber, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <NavLink style={{marginRight: '10px'}} key={number} 
                        to={`../search/page/${number}/${searchResult}`}
                        onClick={() => paginate(number)}
                        >
                            <Button size="small"variant={number === +pageNumber ? "contained" : "outlined"}>
                                {number}
                            </Button>
                        </NavLink>
                    ))
                }
            </ul>
        </>
    );
}

export default Pagination;
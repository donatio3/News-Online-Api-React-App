import React from 'react';
import { Button } from '@mui/material';
import { Link, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const Pagination = ({news}) => {
    const {searchResult} = useParams()
    const {pageNumber} = useParams()

    const [news, setNews] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage, setNewsPerPage] = useState(20)

    
    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex) 
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const totalNews = news.length
    const totalPageNumbers = Math.ceil(news.length / newsPerPage)
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
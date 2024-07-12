import React from 'react';
import { Button } from '@mui/material';
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const Pagination = ({news, currentPage, setCurrentPage, totalPageNumbers, categories, urlProps, searchResult}) => {
    const {pageNumber} = useParams()
    const navigate = useNavigate()

    // const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage, setNewsPerPage] = useState(10)

    // const lastNewsIndex = currentPage * newsPerPage
    // const firstNewsIndex = lastNewsIndex - newsPerPage
    // const currentNews = news.slice(firstNewsIndex, lastNewsIndex) 
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // const totalPageNumbers = Math.ceil(news.length / newsPerPage)
    const pageNumbers = []

    for (let i = 1; i <= totalPageNumbers; i++) {
        pageNumbers.push(i)
    }

    

    return (
        <>
            <ul className="pagination">
                {
                    pageNumbers.map((number, i) => {
                        let url
                        switch (urlProps) {
                            case 'search':
                                url = `../${urlProps}/page/${i + 1}/${searchResult}`
                                break;
                            case categories:
                                url = `../${urlProps}/page/${i + 1}`
                                break;
                            default:
                                break;
                        }

                        return (
                            <NavLink style={{marginRight: '10px'}} key={number}
                            to={`${url}`}
                            onClick={() => paginate(number)}>
                                <Button size="small"variant={number === +pageNumber ? "contained" : "outlined"}>
                                    {number}
                                </Button>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Pagination;
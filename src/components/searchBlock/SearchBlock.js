import { Link, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import NavigationBlock from "../navigationBlock/NavigationBlock"
import NewsService from "../../services/NewsService"
import AppHeader from "../appHeader/AppHeader"

import Button from '@mui/material/Button';

import facebook from '../../resourse/icons/facebook.svg'
import vector from '../../resourse/icons/Group.svg'
import linkedin from '../../resourse/icons/linkedin.svg'
import instagram from '../../resourse/icons/instagram.svg';

import './searchBlock.scss'
import { TextField } from "@mui/material"
import Spinner from "../spiner/Spinner"
import AsideBlock from "../asideBlock/AsideBlock"
import Pagination from "../Pagination/Pagination"

const SearchBlock = () => {
    const {searchResult} = useParams()
    const {pageNumber} = useParams()


    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage, setNewsPerPage] = useState(20)


    const {process, setProcess, error, getNewsByWord, getRandomNews, getPopularNews, getScienceNews} = NewsService()

    useEffect(() => {
        loadNews()
    }, [pageNumber])


    const loadNews = () => {
        getNewsByWord(searchResult, pageNumber)
        .then(res => {
            setNews(res)
        })
        .then(()=> setProcess('confirmed'))
    }


    console.log(news, 'NEWS MASS')

    const setContent = (state, Component, data) => {
        switch (state) {
            case 'waiting':
                return null
            case 'loading':
                return <Spinner/>
            case 'confirmed': 
                return Component
            default:
                return null;
        }
    }

    return (
        <>
            <AppHeader searchBlock={true} />
            <section className="singleNewsBlog">
                {setContent(process, <View setCurrentPage={setCurrentPage} currentPage={currentPage} newsPerPage={newsPerPage} searchResult={searchResult} news={news} pageNumber={pageNumber}/>, )}
            </section>

        </>
    )
}

const View = (props) => {

    const {searchResult, news, pageNumber, currentPage, newsPerPage, setCurrentPage} = props

    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex) 
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const totalPageNumbers = Math.ceil(news.length / newsPerPage)


    return (
            <>
                <NavigationBlock navigation={searchResult} type="search"/>

                <div className="container">
                    <div className="content__wrapper">
                        <div className="site-main">
                            <div className="technology__post">

                                <NewsPosts searchResult={searchResult} news={currentNews}/>


                                <div className="pages__buttons">

                                    
                                    <Link to={`../search/page/1/${searchResult}`}>
                                        <button style={{display: +pageNumber === 1 ? 'none' : 'block'}}  onClick={() => setCurrentPage(currentPage => currentPage -1)} className="page-firstLast">
                                            <svg style={{transform: 'rotate(180deg)'}} class="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"></path></svg>
                                        </button>
                                    </Link>
                                    

                                    <Pagination 
                                    paginate={paginate}
                                    newsPerPage={newsPerPage}
                                    totalNews={news.length}
                                    searchResult={searchResult}
                                    pageNumber={pageNumber}/>

                                    <Link to={`../search/page/${totalPageNumbers}/${searchResult}`}>
                                        <button style={{display: +pageNumber === +totalPageNumbers ? 'none' : 'block', transform: 'rotate(180deg)'}} onClick={() => setCurrentPage(currentPage => currentPage + 1)} className="page-firstLast">
                                            <svg class="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"></path></svg>
                                        </button>
                                    </Link>

                                   
                                    
                                </div>
                            </div>   
                        </div>

                        <AsideBlock/>
                                    
                    </div>
                </div>
            </>
    )
}

const NewsPosts = ({news, searchResult}) => {

    return (
        news.map((elem, i) => {
                return (
                    <Link style={{textDecoration: 'none'}} to={`../../${searchResult}/${i}`}>
                        <div key={i} className="post__items">

                            <div className="content">

                                <div className="entry-title">
                                    <a href="">{elem.title}</a>
                                </div>
                            

                                <div className="entry-content">
                                    <p>{elem.description}</p>
                                </div>

                                <footer class="entry-footer">
                                    <a id="read-more" style={{textDecoration: 'none', fontSize: '15px', marginRight: '5px'}} href="">Read More</a>
                                    <svg style={{height: '30px', cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="10" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/></g></g></svg>	
                                </footer>
                            </div>
                        </div>
                    </Link>

                )
        })
    )
}

export default SearchBlock
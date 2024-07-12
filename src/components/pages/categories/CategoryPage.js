import AppHeader from "../../appHeader/AppHeader"
import NavigationBlock from "../../navigationBlock/NavigationBlock"
import AsideBlock from "../../asideBlock/AsideBlock"

import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from "../../spiner/Spinner"
import Pagination from '../../Pagination/Pagination.js'

const CategoryPage = (props) => {

    const {loading, setCurrentPage, currentPage, setLoading, loadNewPage, categories, news} = props
    const {pageNumber} = useParams()

    const navigate = useNavigate()
    
    useEffect(() => {
        // navigate(`../${categories}/page/${currentPage}`)
    }, [currentPage])

    const newsPerPage = 10
    const totalPageNumbers = Math.ceil(news.length / newsPerPage)

    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

    return (
        <>
            <AppHeader searchBlock={true} />

            <section className="newsBlog">
                <NavigationBlock navigation={categories} type="categories"/>

                <div className="container">

                    <div className="content__wrapper">
                        <div className="site-main">

                            <div className="news__post">
                                {loading ? <Spinner/> : <View pageNumber={pageNumber} currentNews={currentNews} totalPageNumbers={totalPageNumbers} setCurrentPage={setCurrentPage} categories={categories} news={news}/>}
                            </div> 
                        </div>

                        <AsideBlock/>
                                    
                    </div>
                </div>
            </section>

        </>
    )
}
 
const View = ({currentNews, news, categories, setCurrentPage, totalPageNumbers, pageNumber}) => {

    return (
        <>
            {currentNews.map((elem, i) => {
                    return (
                        <div key={i} className="post__item">
                            <Link style={{textDecoration: 'none'}} to={`../${categories}/${i}`}>
                                <div className="post__img">
                                    <img src={elem.urlToImage} alt={elem.title}  />
                                </div>
                            </Link>
        
                            <div className="post__content">
                            
                                <Link style={{textDecoration: 'none'}} to={`../${categories}/${i}`}>
                                    <div className="entry-header">
                                        <div className="entry-data">
                                            <a href="">{elem.publishedAt}</a>
                                        </div>
                                        <div className="entry-title">
                                            <a href="">{elem.title}</a>
                                        </div>
                                    </div>
        
                                    <div className="entry-content">
                                        <p>{elem.description}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
            })}

            <div className="pages__buttons">
                <Link to={`../${categories}/page/1`}>
                    <button style={{display: +pageNumber === 1 ? 'none' : 'block'}}  onClick={() => setCurrentPage(currentPage => currentPage -1)} className="page-firstLast">
                        <svg style={{transform: 'rotate(180deg)'}} class="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"></path></svg>
                    </button>
                </Link>

                <Pagination 
                    categories={categories}
                    news={news}
                    totalPageNumbers={totalPageNumbers}
                    setCurrentPage={setCurrentPage}
                    urlProps={`${categories}`}/>

                <Link to={`../${categories}/page/${totalPageNumbers}`}>
                    <button style={{display: +pageNumber === +totalPageNumbers ? 'none' : 'block', transform: 'rotate(180deg)'}} onClick={() => setCurrentPage(currentPage => currentPage + 1)} className="page-firstLast">
                        <svg class="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"></path></svg>
                    </button>
                </Link>
            </div>
        </>

    )
}

export default CategoryPage
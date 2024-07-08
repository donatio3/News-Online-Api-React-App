import AppHeader from "../../appHeader/AppHeader"
import NavigationBlock from "../../navigationBlock/NavigationBlock"
import AsideBlock from "../../asideBlock/AsideBlock"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from "../../spiner/Spinner"

const CategoryPage = (props) => {

    const {loading, setLoading, loadNewPage, categories, news} = props

   
    const handleScroll = () => {
        console.log('scrol')
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return function () {document.removeEventListener('scroll', handleScroll)}
    }, [])


    return (
        <>
            <AppHeader searchBlock={true} />

            <section className="newsBlog">
                <NavigationBlock navigation={categories} type="categories"/>

                <div className="container">

                    <div className="content__wrapper">
                        <div className="site-main">

                            <div className="news__post">
                                {loading ? <Spinner/> : <View news={news}/>}
                            </div> 
                        </div>

                        <AsideBlock/>
                                    
                    </div>
                </div>
            </section>

        </>
    )
}

const View = ({news}) => {
    return (
        <>
            {news.map((elem, i) => {
                return (
                    <div key={i} className="post__item">
                        <Link style={{textDecoration: 'none'}} to={`../allNews/${i}`}>
                            <div className="post__img">
                                <img src={elem.urlToImage} alt={elem.title}  />
                            </div>
                        </Link>
    
                        <div className="post__content">
    
                            <Link style={{textDecoration: 'none'}} to={`../allNews/${i}`}>
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
        </>
    )
}

export default CategoryPage
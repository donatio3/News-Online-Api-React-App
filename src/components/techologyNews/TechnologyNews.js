import HeaderTitle from "../headerTitle/HeaderTitle";
import  './technologyNews.scss';
import { useState, useEffect } from "react";

import NewsService from "../../services/NewsService";
import { Link } from "react-router-dom";

const TechnologyNews = ({news}) => {
    // const [news, setNews] = useState([])
    
    // const {loading, error, getGeneralNews, getTopNews} = NewsService()

    // useEffect(() => {
    //     loadNews()
    // }, [])

    // const loadNews = () => {
    //     getTopNews()
    //     .then(res => setNews(res))
    // }

    console.log('news props', news)
    return (
        <section className="technologyNews">
            <div className="container">
                <HeaderTitle>TECHNOLOGY</HeaderTitle>

                <div className="technology__post">
                        {news.map((elem, i) => {
                                if (i < 6) {
                                    return (
                                        <div key={i} className="post__item">
                                            <Link style={{textDecoration: 'none'}} to={`technologyNews/${i}`}>
                                            
                                            </Link>
                                            <div className="post__img">
                                                <img src={elem.urlToImage} alt="" />
                                            </div>

                                            <div className="post__content">

                                                <Link style={{textDecoration: 'none'}} to={`technologyNews/${i}`}>
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
                                }
                        })}
                </div>
            </div>
        </section>
    )
}

export default TechnologyNews
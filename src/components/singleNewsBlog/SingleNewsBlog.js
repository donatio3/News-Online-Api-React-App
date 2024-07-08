import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewsService from "../../services/NewsService";

import './singleNewsBlog.scss';
import NavigationBlock from "../navigationBlock/NavigationBlock";
import Spinner from "../spiner/Spinner";
import AppHeader from "../appHeader/AppHeader";

const SingleNewsBlog = () => {
    const {singleNews} = useParams()
    const {newsId} = useParams()
    
    const [news, setNews] = useState('sd')
    
    const {loading, error, getAllNews, getNewsByWord,getCategoryNews, getPopularNews} = NewsService()

    console.log(singleNews, 'singleNews')
    


    useEffect(() => {
        selectNews()
    }, [newsId])

    const selectNews = () => {

        switch (singleNews) {
            case 'allNews':
            loadNews(getAllNews)
                break;
            case 'technologyNews':
                loadNews(getCategoryNews, 'technology')
                break;
                
            case 'randomNews':
                loadNews(getCategoryNews, 'general')
                break;

            case 'topNews': 
            loadNews(getCategoryNews, 'entertainment')
                break;
            case 'popularNews':
                loadNews(getPopularNews)
                break;
            case 'scienceNews':
                loadNews(getCategoryNews, 'science')
                break;
            case singleNews: 
                getNewsByWord(singleNews)
                .then(res => {
                    setNews(res[newsId])
                })
                break 
        }
    }

    const loadNews = (data, category) => {
        data(category)
        .then(res => {
            setNews(res[newsId])
        })
    }

    


    const content = !(loading || error) ? <View news={news}/> : <Spinner/>

    return (
        <>
            <AppHeader/>
            <section className="singleNewsBlog">
                {content}  
            </section>
        </>
    )
}


const View = ({news}) => {
    const {urlToImage, title, author, publishedAt, source, content } = news
    console.log(news, 'VIES')


    return (
        <>
            {news ? <NavigationBlock navigation={news} type="content"/> : null}                
                <div className="container">

                    <div className="content__wrapper">
                        <div className="site-main">

                            <div className="post__content">
                                <div className="post__content-thumbnail">
                                    <img src={urlToImage} alt=""/>
                                </div>


                                <div className="entry-header">

                                    <div className="entry-title">
                                            <h2>{title}</h2>
                                    </div>

                                    <div className="entry-data">
                                        
                                        <div className="meta">
                                            BY
                                            <a className="author" href="">{author}</a>
                                            <a className="data" href="">{publishedAt}</a>
                                        </div>
                                        

                                        <div className="category">
                                            {source}
                                        </div>
                                    </div>        
                                </div>


                                <div className="entry-content">
                                    <p>{content}</p>
                                </div>

                            </div>


                            <div className="author__content">

                            </div>
                        </div>

                        <aside className="widget-area">

                        </aside>
                    </div>
                </div>
        </>
    )
}

export default SingleNewsBlog
import './randomNews.scss'

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NewsService from '../../services/NewsService'

const RandomNews = (props) => {
    // const [news, setNews] = useState([])
    
    // const {loading, error, getGeneralNews, getTopNews} = NewsService()

    // useEffect(() => {
    //     loadNews()
    // }, [])

    // const loadNews = () => {
    //     getTopNews()
    //     .then(res => setNews(res))
    // }

    // const renderNews = (res) => {
    //     console.log(res, 'res')
    // }


    // const items = renderNews(news)
    console.log(props,'props')
    return (
        <section className='random__news'>
            <div className="background">
                <div className="container">
                    
                    <div className="post__wrapper">
                        <ul>
                            {props.news.map((elem, i) => {
                                if (i < 6) {
                                    let styleImg = {background: `center center/cover no-repeat url("${elem.urlToImage}")`}
                                    if (elem.urlToImage === 'https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png') {
                                        styleImg = {background: `center center/contain no-repeat url("${elem.urlToImage}")`}
                                    }
                                    
                                    return (
                                        <Link to={`randomNews/${i}`} style={{background: `center center/cover no-repeat url("${elem.urlToImage}")`}} key={i} className="post__item">
                                            <div className="post__item-title">{elem.title}</div>
                                            <div className="post__item-category">
                                                <a href={elem.url} className="category-holder">{elem.source}</a>
                                            </div>
                                        </Link>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RandomNews
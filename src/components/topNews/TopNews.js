import './topNews.scss'

import NewsService from '../../services/NewsService'
import { useState, useEffect } from 'react'
import HeaderTitle from '../headerTitle/HeaderTitle';
import { Link } from 'react-router-dom';

const TopNews = ({news}) => {
    
    const renderNews = (res) => {

            const elements = res.map((elem, i) => {
                if (i < 6) {
                    return (
                    <div key={i} className="post__item">
                        <Link style={{textDecoration: 'none'}} to={`topNews/${i}`}>
                            <div className="image-holder">
                                <img style={{width: '360px',}} src={elem.urlToImage} alt="" />

                                <div class="post__item-category">
                                    <a className='category-holder' href={elem.url}>{elem.source}</a>
                                </div>
                            </div>

                            <div className="entry-header">
                                <div className="entry-data">
                                    <a href="">{elem.publishedAt}</a>
                                </div>
                                <div className="entry-title">
                                    <a href="">{elem.title}</a>
                                </div>
                            </div>
                        </Link>

                        <div className="entry-content">
                            <p>
                                {elem.description}
                            </p>
                        </div>
                    </div>
                        
                    )
                }
            })

            return elements
        }


    const items = renderNews(news)

    return (
        <section className='topNews'>
            <div className="container">
                <HeaderTitle>TOP NEWS</HeaderTitle>
                
                <div className="topNews__post">
                    {items}

                    
                </div>
            
            </div>
        </section>
    )
}

export default TopNews
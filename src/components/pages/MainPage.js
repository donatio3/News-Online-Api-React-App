

import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { useEffect, useState } from 'react';

import NewsService from '../../services/NewsService'
import RandomNews from '../randomNews/RandomNews';
import TopNews from '../topNews/TopNews';
import TechnologyNews from '../techologyNews/TechnologyNews';
import AppHeader from '../appHeader/AppHeader';


const WithNews = (props) => {
    const [news, setNews] = useState([])
    
    useEffect(() => {
        loadNews()
    }, [])

    const loadNews = () => {
        props.getData()
        .then(res => setNews(res))
    }

    return (
        <>
            {props.render(news)}
        </>
    )
    
}


const MainPage = () => {
    const {getCategoryNews} = NewsService()

    return (
            <>  
                <AppHeader/>

                <WithNews getData={() => getCategoryNews('entertainment')} render={news => (
                    <RandomNews news={news}/>
                )}/>

                <WithNews getData={() => getCategoryNews('general', 'relevancy')} render={news => (
                    <TopNews news={news}/>
                )}/>

                <WithNews getData={() => getCategoryNews('technology', 'relevancy')} render={news => (
                    <TechnologyNews news={news}/>
                )}/>
            </>
    )
}

export default MainPage
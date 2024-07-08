import { TextField } from "@mui/material"
import { Link, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import facebook from '../../resourse/icons/facebook.svg'
import vector from '../../resourse/icons/Group.svg'
import linkedin from '../../resourse/icons/linkedin.svg'
import instagram from '../../resourse/icons/instagram.svg';

import Spinner from "../spiner/Spinner"
import NewsService from "../../services/NewsService"

import './asideBlock.scss'

const AsideBlock = (props) => {

    const {searchResult} = useParams()
    const {pageNumber} = useParams()

    const [search, setSearch] = useState('')

    const [randomNews, setRandomNews] = useState([])
    const [recentPost, setRecentPost] = useState([])
    const [sciencePost, setSciencePost] = useState([])

    const {process, setProcess, error, getNewsByWord, getCategoryNews, getPopularNews, getScienceNews} = NewsService()

    useEffect(() => {
        loadNewsForAside()
    }, [])

    const loadNewsForAside = () => {
        getCategoryNews('general')
        .then(res => setRandomNews(res))
        getPopularNews()
        .then(res => setRecentPost(res))
        getCategoryNews('science')
        .then(res => setSciencePost(res))
    }

    return (

        <aside className="widget-area">
                                <section className="search-2">
                                    <form action={search}>
                                            <TextField value={search} onChange={(e) => setSearch(e.target.value)} defaultValue={searchResult} className="search-news" size="small" id="outlined-basic" label="Search" variant="outlined"/> 
                                            <a href={`../../../search/page/1/${search}`}  type="submit" className="search-button">
                                                <svg style={{ color: 'black', height: '14px', width: '14px'}} class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>
                                            </a>
                                    </form>  
                                </section>
                                  
                                <section className="featured_post">
                                    {randomNews.map((elem, i) => {
                                        if (i < 1) {
                                            return (
                                                <Link style={{textDecoration: 'none'}} to={`../../randomNews/${i}`}>
                                                <h2 class="widget-title">{elem.title}</h2>
                                                
                                                <div class="img-holder">
                                                    <a href="">
                                                        <img width="285" height="307" src={elem.urlToImage}/>
                                                    </a>
                                                </div>
    
                                                <div class="text-holder">
                                                    <p>{elem.description}</p>
                                                    <a class="readmore">Read More</a>
                                                </div>
                                                </Link>
                                            )
                                        }
                                        
                                    })}
                                </section>

                                <section className="recent_post">
                                    <h2 class="widget-title">Recent Posts</h2>
                                    <ul>
                                    {recentPost.map((elem, i) => {
                                            if (i < 5) {
                                                return (
                                                    <Link style={{textDecoration: 'none'}} to={`../../popularNews/${i}`}>
                                                        <li>
                                                            <a href="" class="post-thumbnail">
                                                                <img width="78" height="78" src={elem.urlToImage} alt=""/>
                                                            </a>
                
                                                            <div class="entry-header">
                                                                <div class="entry-title">
                                                                    <a href="">{elem.title}</a>
                                                                </div>
                
                                                                <div class="entry-meta">
                                                                    <span class="posted-on">
                                                                        <a href="https://rarathemesdemo.com/metro-magazine/2016/11/09/lions-of-africa-protesting-against-disney/">
                                                                            <time datetime={elem.publishedAt}>{elem.publishedAt}</time>
                                                                        </a>
                                                                    </span>
                                                                </div>

                                                            </div>                        
                                                        </li>
                                                    </Link>
                                                    
                                                )
                                            }
                                        })}
                                    </ul>
                                </section>

                                <section className="science_post">
                                    <h2 class="widget-title">Science Posts</h2>
                                            
                                    <ul>
                                        {sciencePost.map((elem, i) => {
                                            if (i === 5) {
                                                return (
                                                    <Link style={{textDecoration: 'none'}} to={`../../scienceNews/${i}`}>
                                                        <li>
                                                            <a href={''} class="post-thumbnail">
                                                                <img width="78" height="78" src={elem.urlToImage} alt={elem.title}/>
                                                            </a>
                
                                                            <div class="entry-header">
                                                                <div class="entry-title">
                                                                    <a href="">{elem.title}</a>
                                                                </div>
                
                                                                <div class="entry-meta">
                                                                    <span class="posted-on">
                                                                        <a href="https://rarathemesdemo.com/metro-magazine/2016/11/09/lions-of-africa-protesting-against-disney/">
                                                                            <time datetime={elem.publishedAt}>{elem.publishedAt}</time>
                                                                        </a>
                                                                    </span>
                                                                </div>
                
                                                            </div>                        
                                                        </li>
                                                    </Link>
                                                    
                                                )
                                            }
                                        })}
                                    </ul>
                                </section>

                                <section className="social_links">
                                    <h2 class="widget-title">Follow Us On</h2>
                                    <ul class="social-networks">
                                        <li>
                                            <a href="">
                                                <img src={facebook} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={instagram} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={linkedin} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={vector} alt="" />
                                            </a>
                                        </li>
                			        </ul>
                                </section>

                                <section className="categories-2">
                                    <h2 class="widget-title">Categories</h2>
                                    <nav>
                                        <ul>
                                            <li class="cat-item cat-item-3">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/life-style/">Life Style</a>
                                            </li>

                                            <li class="cat-item cat-item-4">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/nature/">Nature</a>
                                            </li>

                                            <li class="cat-item cat-item-5">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/news/">News</a>
                                            </li>
                                            
                                            <li class="cat-item cat-item-6">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/sports/">Sports</a>
                                            </li>
                                            
                                            <li class="cat-item cat-item-7">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/technology/">Technology</a>
                                            </li>
                                            
                                            <li class="cat-item cat-item-8">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/travel/">Travel</a>
                                            </li>
                                            
                                            <li class="cat-item cat-item-1">
                                                <a href="https://rarathemesdemo.com/metro-magazine/category/uncategorized/">Uncategorized</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </section>

                                
                            </aside>
    )
}


export default AsideBlock
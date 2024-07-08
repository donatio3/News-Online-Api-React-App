
import './appHeader.scss'

import TextField from '@mui/material/TextField';

import facebook from '../../resourse/icons/facebook.svg'
import vector from '../../resourse/icons/Group.svg'
import linkedin from '../../resourse/icons/linkedin.svg'
import instagram from '../../resourse/icons/instagram.svg';
import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const AppHeader = ({searchBlock}) => {
    const {searchId} = useParams()

    const [search, setSearch] = useState('')
    return (
        <header>
                <div className="main-header">
                    <nav className="main-header-nav">
                        <a href="#" className="pages">STYLE GUIDE</a> 
                        <a href="#" className="pages">TECHNOLOGY</a>
                        <a href="#" className="pages">LIFE STYLE</a>
                        <a href="#" className="pages">TRAVEL</a>
                    </nav>
                    <div className="social__link">
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="#">
                            <img src={vector} alt="vector" />
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>


                <div className="second-header">
                    <div className="container">
                            <div className="logo">
                                <h2>METRO MAGAZINE</h2>
                                <div className="descr">Simple and Beautiful Magazine Theme</div>
                            </div>
                            <div className="top-hr"/>

                            <nav className="main-navigation"> 

                                <ul className="pages__wrapper">
                                    <NavLink as="li"className={({ isActive, isPending }) =>
    isPending ? "pages__items" : isActive ? "pages__items active" : "pages__items"
} to={'/'} >Home</NavLink>
                                    <NavLink as="li" to={'/sports'} className="pages__items">Sports</NavLink>
                                    <NavLink as="li" to={'/health'} className="pages__items">Health</NavLink>
                                    <NavLink as="li" to={'/news'} className="pages__items">News</NavLink>
                                    <NavLink as="li" to={'/contact'} className="pages__items">Contact</NavLink>
                                </ul>
                                
                                <div className="search__item">
                                    <form action={search}>
                                        <TextField onChange={(e) => setSearch(e.target.value)} value={search} className="search-news" size="small" id="outlined-basic" label="Search" variant="outlined"/> 
                                        <a href={`../../../search/page/1/${search}`}  type="submit" className="search-button">
                                            <svg style={{ color: 'black', height: '14px', width: '14px'}} class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>
                                        </a>
                                    </form>
                                    
                                </div>
                            </nav>  

                            


                    </div>
                </div>
        </header>
    )
}

export default AppHeader
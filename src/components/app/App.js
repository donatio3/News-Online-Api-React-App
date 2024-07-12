import './App.css';

import {HashRouter as Router, Route, Routes,} from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainPage from '../pages/MainPage';
import Categories from '../pages/categories/Categories.js';
import SingleNewsBlog from '../singleNewsBlog/SingleNewsBlog.js';

import AppHeader from '../appHeader/AppHeader.js';

import NewsService from "../../services/NewsService";
import Finally from '../techologyNews/TechnologyNews.js';
import SearchBlock from '../searchBlock/SearchBlock.js';
import Contact from '../contact/Contact.js';


const App = () => {

return (
        <div className="App">

            <Router basename='Online-News-Api-React-App'>
                    <Routes>
                        <Route element={<Categories/>} path='/:categories/page/:pageNumber'></Route>
                        <Route element={<MainPage/>} path='/'></Route>
                        <Route element={<Contact/>} path='/contact'></Route>
                        <Route element={<SingleNewsBlog/>} path='/:singleNews/:newsId'></Route>
                        <Route element={<SearchBlock />} path='/search/page/:pageNumber/:searchResult'/>
                    </Routes>
            </Router>
        </div>
  );
}

export default App;

import CategoryPage from "./CategoryPage"
import NewsService from "../../../services/NewsService"
import { useParams } from "react-router-dom"
import { useCallback, useEffect, useMemo, useState } from "react"


import './categories.scss'
import Spinner from "../../spiner/Spinner"
const Categories = () => {
    const {categories} = useParams()

    const {getCategoryNews, getAllNews} = NewsService()

    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        loadNews(false)
    }, [])

    const loadNews = (initial) => {
        setLoading(true)
        if (categories === 'news') {
            getAllNews(currentPage)
            .then((res) => {
                setNews(res)
                setLoading(false)
            })

        } else {
            getCategoryNews(`${categories}`)
            .then(res => {
                setNews(res)
                setLoading(false)
            })
        }
    }

    if (loading) {
        return <Spinner/>
    } else {
        return <CategoryPage loading={loading} setLoading={setLoading} categories={categories}  news={news}/>
    }


}



export default Categories

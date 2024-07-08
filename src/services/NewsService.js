import {useHttp} from "../hooks/http.hook"


const NewsService = () => {

    const _apiKey = '&apiKey=e4f922fea1b04bf58516df5dde4925c8'
    const _apiBase = 'https://newsapi.org/v2/top-headlines?'

    const {loading, process, setProcess, error, request, clearError} = useHttp() // ДОСТАЕМ СУЩНОСТИ ИЗ ХУКА


    const getCategoryNews = async (category, sortBy = 'relevancy') => {
        const res = await request(`${_apiBase}category=${category}&language=en${_apiKey}`)
        return res.articles.map(_transformNews)
    }  


    const getPopularNews = async () => {
        const res = await request(`${_apiBase}sortBy=popularity&language=en${_apiKey}`)
        return res.articles.map(_transformNews)
    }  

    const getNewsByWord = async (word, page = 1, pageSize = 100) => {
        const res = await request(`${_apiBase}q=${word}&pageSize=${pageSize}${_apiKey}`)
        return res.articles.map(_transformNews)
    }  

    const getAllNews = async (page = 1) => {
        const res = await request(`${_apiBase}language=en&page=${page}${_apiKey}`)
        return res.articles.map(_transformNews)
    }
    
    const _transformNews = (char) => {
    
            return { 
                author: char.author,
                content: char.content,
                description: char.description,
                urlToImage: char.urlToImage ? char.urlToImage : 'https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png',
                title: char.title.length > 80 ? `${char.title.slice(0, 80)}...` : char.title,
                publishedAt: char.publishedAt.slice(0,10),
                source: char.source.name,
            }
    }

    return {getCategoryNews, getNewsByWord, getPopularNews, getAllNews, process, setProcess, loading, error, clearError}

}
export default NewsService


import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Card } from '../Card/Card'
// import { mockArticleData } from './mockArticleData'
// import { mockQueryData } from './mockQueryData'
import './Main.scss'

export const Main = ({ query, setSelectedArticle }) => {
    const [articlesData, setArticlesData] = useState()

    useEffect(() => {
        if (query) {
            fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=88fd0bac494a4655823e6e2c7981e7e0`)
                .then(res => res.json())
                .then(data => setArticlesData(data.articles))
                .catch(err => console.error(err))
        } else {
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=88fd0bac494a4655823e6e2c7981e7e0')
                .then(res => res.json())
                .then(data => setArticlesData(data.articles))
                .catch(err => console.error(err))
        }
    }, [query])

    const articles = articlesData?.map(article => <Card article={article} setSelectedArticle={setSelectedArticle} key={nanoid()} />)
    
    return (
        <main>
            {articles}
        </main>
    )
}

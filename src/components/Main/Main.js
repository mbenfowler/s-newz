import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Article } from '../Article/Article'
import { mockArticleData } from './mockArticleData'
import './Main.scss'

export const Main = () => {
    const [articlesData, setArticlesData] = useState()

    useEffect(() => {
        setArticlesData(mockArticleData.articles)
        // fetch real data when ready
    }, [])

    const articles = articlesData?.map(article => <Article article={article} key={nanoid()} />)
    
    return (
        <main>
            {articles}
        </main>
    )
}

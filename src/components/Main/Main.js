import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Card } from '../Card/Card'
import { mockArticleData } from './mockArticleData'
import { mockQueryData } from './mockQueryData'
import './Main.scss'

export const Main = ({ query, setSelectedArticle }) => {
    const [articlesData, setArticlesData] = useState()

    useEffect(() => {
        if (query) {
            setArticlesData(mockQueryData.articles)
        } else {
            setArticlesData(mockArticleData.articles)
        }
        // fetch real data when ready
    }, [query])

    const articles = articlesData?.map(article => <Card article={article} setSelectedArticle={setSelectedArticle} key={nanoid()} />)
    
    return (
        <main>
            {articles}
        </main>
    )
}

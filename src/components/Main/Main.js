import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Card } from '../Card/Card'
import { mockArticleData } from './mockArticleData'
import './Main.scss'

export const Main = ({ setSelectedArticle }) => {
    const [articlesData, setArticlesData] = useState()

    useEffect(() => {
        setArticlesData(mockArticleData.articles)
        // fetch real data when ready
    }, [])

    const articles = articlesData?.map(article => <Card article={article} setSelectedArticle={setSelectedArticle} key={nanoid()} />)
    
    return (
        <main>
            {articles}
        </main>
    )
}

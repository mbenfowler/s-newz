import { Link } from 'react-router-dom'
import './Card.scss'

export const Card = ({ article, setSelectedArticle }) => {
    const image = article.urlToImage ? article.urlToImage : `${process.env.PUBLIC_URL}/images/no-image.png`
    const titleURL = article.title.split(' ').join('-')

    const handleClick = (e) => {
        setSelectedArticle(article)
    }

    const handleImgError = (e) => {
        e.target.src = `${process.env.PUBLIC_URL}/images/no-image.png`
    }

    if (article.title !== '[Removed]') {
        return (
            <article className='article-card'>
                <img className='list-image' src={image} onError={handleImgError}/>
                <div className='article-list-details'>
                    <h2 className='article-title'>{article.title}</h2>
                    <p className='date'>{article.publishedAt}</p>
                    <p className='article-description'>{article.description}</p>
                    <Link to={`/articles/${titleURL}`}>
                        <div className='button' onClick={handleClick}><span>Read more</span></div>
                    </Link>
                </div>
            </article>
        )
    }
}

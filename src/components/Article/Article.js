import './Article.scss'

export const Article = ({article}) => {
    const image = article.urlToImage ? article.urlToImage : `${process.env.PUBLIC_URL}/images/no-image.png`

    if (article.title !== '[Removed]') {
        return (
            <article className='article-card'>
                <img className='list-image' src={image}/>
                <div className='article-list-details'>
                    <h2 className='article-title'>{article.title}</h2>
                    <p className='date'>{article.publishedAt}</p>
                    <p className='article-description'>{article.description}</p>
                    <div className='button'><span>Read more</span></div>
                </div>
            </article>
        )
    }
}

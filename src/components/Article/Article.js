import './Article.scss'

export const Article = ({ selectedArticle }) => {
    const handleImgError = (e) => {
        e.target.src = `${process.env.PUBLIC_URL}/images/no-image.png`
    }

    if (selectedArticle) {
        const image = selectedArticle.urlToImage ? selectedArticle.urlToImage : `${process.env.PUBLIC_URL}/images/no-image.png`

        if (selectedArticle.title !== '[Removed]') {
            return (
                <article className='article'>
                    <img src={image} onError={handleImgError}></img>
                    <h2>{selectedArticle.title}</h2>
                    <p className='article-date-source'>{selectedArticle.publishedAt} - {selectedArticle.source.name}</p>
                    <p className='article-content'>{selectedArticle.content}</p>
                </article>
            )
        }
    }
}

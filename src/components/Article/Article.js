import './Article.scss'

export const Article = ({ selectedArticle }) => {
    if (selectedArticle) {
        const image = selectedArticle.urlToImage ? selectedArticle.urlToImage : `${process.env.PUBLIC_URL}/images/no-image.png`

        if (selectedArticle.title !== '[Removed]') {
            return (
                <article className=''>
                    <img src={image}></img>
                    <h2>{selectedArticle.title}</h2>
                    <p>{selectedArticle.publishedAt} - {selectedArticle.source.name}</p>
                    <p>{selectedArticle.content}</p>
                </article>
            )
        }
    }
}

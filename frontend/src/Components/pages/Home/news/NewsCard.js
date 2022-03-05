

function NewsCard(props){

    const {title, urlToImage, publishedAt, content, url} = props.aNew 
    const date = publishedAt.split("T")[0]
    const contentWithoutCount = content.split("[")[0]
    return(
        <div id="item">
            <div className="card h-100">
                <img src={urlToImage} className="card-img-top" style={{minHeight: 240}} alt="..." />
                <div className="card-body body_height">
                    <h5 className="card-title" style={{minHeight: 80}}>{title}</h5>
                    <p className="card-text text-dark" style={{minHeight: 144}}>{contentWithoutCount}</p>
                </div>
                    <a target="_blank" className="p-2" href={url}>Read More</a>
                <div className="card-footer">
                    <small className="text-muted">{date}</small>
                </div>
            </div>
        </div>
    )
}
export default NewsCard;

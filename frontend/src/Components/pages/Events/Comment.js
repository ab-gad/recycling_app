const Comment = (props) =>{
    const{comment, creation_date, avatar, userName}=props.comment
    const commentDate = creation_date.split('T')[0]
    const time = creation_date.split('T')[1].split('.')[0]
    return(
        <>
        <div className="border p-2 rounded mb-2">
                <div className="d-flex align-items-center">
                <img className="me-2 rounded-circle" src={`http://127.0.0.1:8000${avatar}`} width={70} height={70}/>
                <div>
                    <h5 className="mb-1">{userName}</h5>
                    <small className="text-secondary">{`${commentDate} | ${time}`}</small>
                </div>
                </div>
                <p className="text-secondary ps-2 bg-light mb-0 py-2 porder rounded my-2">
                    {comment}
                </p>
        </div>
        </>
    )
}

export default Comment;
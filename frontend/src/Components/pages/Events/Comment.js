import { useSelector } from "react-redux";
import {RiDeleteBin7Fill} from "react-icons/ri"
import { useEffect, useState } from "react";

const Comment = (props) =>{
    const authed_user = useSelector((state) => state.authReducer.user)
    const [showDeletBtn, setDeleteBtn] = useState(false)

    const{comment, creation_date, avatar, userName, user, id}=props.comment
    const commentDate = creation_date.split('T')[0]
    const time = creation_date.split('T')[1].split('.')[0]

    useEffect(()=>{
        if (authed_user !== null && authed_user?.id==user){
            setDeleteBtn(true)
        }
    },[authed_user])
    return(
        <>
        <div className="border p-2 rounded mb-2 ">
                <div className="d-flex align-items-center">
                <img className="me-2 rounded-circle" src={`http://127.0.0.1:8000${avatar}`} width={70} height={70}/>
                <div>
                    <h5 className="mb-1">{userName}</h5>
                    <small className="text-secondary">{`${commentDate} | ${time}`}</small>
                </div>
                </div>
                <p className="text-secondary ps-2 bg-light mb-0 py-2 porder rounded my-2 position-relative">
                    {comment}
                    {showDeletBtn && <button onClick={(e)=>props.handleDeleteComment(id)} className="p-0 m-0 position-absolute bottom-0 end-0 rounded-circle btn btn-danger" style={{width:"30px", height:"30px", lineHeight:"1"}}><RiDeleteBin7Fill/></button>}
                </p>
        </div>
        </>
    )
}

export default Comment;

export default function PageTitle (props){
    return (
        <div className="page_title mb-5">
            <div className="page_title_info">
                <h2><b>{props.title}</b>  </h2>
                <p> {props.description} </p>
            </div>
        </div>
    );
}
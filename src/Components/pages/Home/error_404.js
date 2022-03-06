import './Home.css';

const Error_404 = () => {
    return (
        <div className='d-flex flex-column ' id='error404 '>
            <img src={require('./images/404.png')} alt='Errpr_404' width='52%'className='m-auto' />
            <h2 className='  text-center text-danger' > Page Not Found </h2>
        </div>
    );
}

export default Error_404;
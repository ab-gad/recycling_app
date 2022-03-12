import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./news.css";
import Spinner from "../../../../spinner/spinner";
import {FaLongArrowAltRight, FaLongArrowAltLeft} from "react-icons/fa";

function News (){

    const options = {
        margin: 30,
        responsiveClass: true,
        mouseDrag:true,
        touchDrag:true,
        nav: true,
        autoplay: false,
        navText:[ `<i class="fs-5 px-3  pb-2 pt-1 mx-1 mt-4 rounded-pill rounded-end "> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg> </i>`
                , `<i class="fs-5 px-3  pb-2 pt-1 mt-4 mx-1 rounded-pill rounded-start"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg> </i>`],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
      };

    const [news, setNews] = useState([])
    const [loading, setloading] = useState(true);

    const getNews = () => {
        fetch('https://newsapi.org/v2/everything?q=recycling&language=en&pageSize=6&page=1&apiKey=a1394438cdcb448bad9714c7ae21424b')
        .then(res=>res.json())
        .then(result => {
            setNews(result.articles)
            setloading(false)
        })
    }

    useEffect(()=>{
        getNews()
    },[])
    
    if(loading){
        return <Spinner/>
    }
    
    return(
        <section dir='ltr'>
            <div className="container py-5">
                <div className="title mb-4">
                    <h2>
                        Latest Recycling News:                        
                    </h2>
                </div>
                <OwlCarousel className="slider-items text-dark owl-carousel" {...options}>
                    {news.map((n) => <NewsCard key={n.url} aNew={n}/>)}
                </OwlCarousel>
            </div>
        </section>
    )

}

export default News;
import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./news.css"

const options = {
    margin: 30,
    responsiveClass: true,
    mouseDrag:true,
    touchDrag:true,
    nav: true,
    autoplay: false,
    navText:['<i class="fas fa-long-arrow-alt-left fs-5 px-3 py-1 mx-1 mt-4 rounded-pill rounded-end "></i>'
            ,'<i class="fas fa-long-arrow-alt-right fs-5 px-3 py-1 mt-4 mx-1 rounded-pill rounded-start"></i>'],
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

function News (){
    
    const [news, setNews] = useState([])
    const [ref, setRef] = useState(false)
    
    const getNews = () => {
        fetch('https://newsapi.org/v2/everything?q=recycling&language=en&pageSize=6&page=1&apiKey=a1394438cdcb448bad9714c7ae21424b')
        .then(res=>res.json())
        .then(result => {
            setNews(result.articles)
            setRef(true)
        })
    }

    useEffect(()=>{
        getNews()
    },[])

    
    return(
        <section>
            <div className="container py-5">
                <div className="title mb-4">
                    <h2>
                        Latest Recycling News:
                    </h2>
                </div>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    {news.map((n) => <NewsCard key={n.url} aNew={n}/>)}
                </OwlCarousel>
                {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                    {news.map((n) => <NewsCard key={n.url} aNew={n}/>)}
                </div> */}
            </div>
        </section>
    )

}

export default News;
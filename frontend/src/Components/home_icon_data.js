import Icons from '../Components/pages/Home/icons';
import { MdOutlineRecycling, MdOutlineBusAlert } from "react-icons/md";
import { RiExchangeDollarLine, RiPlantLine } from "react-icons/ri";

export default function Home_icon_data () {
  return (
    <section id='home_icons_data'>
                <div className=" icons d-flex flex-wrap justify-content-evenly justify-content-center my-5 py-5">      

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_1"  aria-controls="card_data_1">
                        <Icons icon={<MdOutlineRecycling />} value={"recycling"}  />
                        <div className="collapse multi-collapse" id="card_data_1" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> Recycling is </span> the best way to conserve limited resources by realizing benefits from the used resources and reusing them again,
                            and this is our duty for a better future.
                            </div>
                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_2"  aria-controls="card_data_2">
                        <Icons icon={<RiPlantLine />} value={"Plant a tree"}  />
                        <div className="collapse multi-collapse" id="card_data_2" >
                            <div className="card card-body "  style={{width:'250px'}}>
                                <span> Volunteer With Us </span> and let us all live in a clean and healthy environment.
                                You can volunteer with us wherever you are by planting a tree in your street, park, or residential area.
                                Make our world clean Make our world green.
                            </div>
                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_3" aria-controls="card_data_3">
                       <Icons icon={<MdOutlineBusAlert />} value={"connection"}  />
                        <div className="collapse multi-collapse" id="card_data_3" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> Communication </span> is now easier than in the past by selecting your available quantity on the website, 
                            and our employee will contact you within a few days, all with a just One click while you are at home.
                            </div>

                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_4"  aria-controls="card_data_1">
                         <Icons icon={<RiExchangeDollarLine />} value={"Get Money"}  /> 
                        <div className="collapse multi-collapse" id="card_data_4" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> Get money </span> by selling plastic, aluminum or used papers. The higher the quantity you have,
                            the higher profits and benefits. Improving your financial situation is possible by selling what you do not need from these materials.
                            </div>
                        </div>
                    </div> 
                    
                </div>           
            </section>
  );
};


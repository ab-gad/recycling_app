import Icons from './icons';
import { MdOutlineRecycling, MdOutlineBusAlert } from "react-icons/md";
import { RiExchangeDollarLine, RiPlantLine } from "react-icons/ri";
import React , { useContext } from "react";
import { Langcontext } from "../../../../App";

export default function Home_icon_data () {

    const Arabic = {
        title_1 : "إعادة التدوير " ,
        popup_1 : "أفضل طريقة للحفاظ على الموارد المحدودة من خلال تحقيق المنافع من الموارد المستخدمة وإعادة استخدامها مرة أخرى ، وهذا واجبنا من أجل مستقبل أفضل. " ,
        popup_1_title : "إعادة التدوير هي " ,
        title_2 : " ازرع شجرة" ,
        popup_2 : "و دعنا نعيش في بيئة نظيفة وصحية .. يمكنك التطوع معنا أينما كنت عن طريق زرع شجرة في شارعك أو حديقتك أو منطقتك السكنية. اجعل عالمنا نظيفًا اجعل عالمنا أخضر." ,
        popup_2_title : "تطوع معنا " ,
        title_3 : "التواصل " ,
        popup_3 : " أصبح الآن أسهل مما كان عليه في الماضي من خلال تحديد الكمية المتوفرة على موقع الويب ، وسيصل إليك مندوبنا في غضون أيام قليلة ، وكل ذلك بنقرة  زر واحدة و انت فى بيتك . " ,
        popup_3_title : "التواصل" ,
        title_4 :  "البيع و الشراء " ,
        popup_4 :  "حيث يمكنك بيع ما لديك من المواد المستخدمة و ايضا يمكنك شراء العديد من المنتجات التى تصل إليك من خلال المندوب " ,
        popup_4_title : "البيع و الشراء ",
    }
    const English = {
        title_1 : "recycling " ,
        popup_1 : "the best way to conserve limited resources by realizing benefits from the used resources and reusing them again, this is our duty for a better future." ,
        popup_1_title : "Recycling is " ,
        title_2 : "Plant a tree " ,
        popup_2 : "and let us all live in a clean and healthy environment. You can volunteer with us wherever you are by planting a tree in your street, park, or residential area. Make our world clean Make our world green. " ,
        popup_2_title : " Volunteer With Us" ,
        title_3 : "Communication " ,
        popup_3 : " is now easier than in the past by selecting your available quantity on the website, and our representative will contact you within a few days, all with a just One click while you are at home." ,
        popup_3_title : "Communication" ,
        title_4 : "Sell And Buy" ,
        popup_4 : "Where you can sell what you have of the used materials and also you can buy many products that reach you through the representative. " ,
        popup_4_title : "Sell And Buy" ,
    
    }
      const { langcont, Setlangcontext } = useContext(Langcontext);
      const translation = langcont === "ENGLISH" ? English : Arabic;
    
  return (
    <section id='home_icons_data'>
                <div className=" icons d-flex flex-wrap justify-content-evenly justify-content-center my-5 py-5">      
                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_1"  aria-controls="card_data_1">
                        <Icons icon={<MdOutlineRecycling />} value={`${translation.title_1}`}  />
                        <div className="collapse multi-collapse" id="card_data_1" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> {translation.popup_1_title} </span> 
                                   {translation.popup_1}
                            </div>
                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_2"  aria-controls="card_data_2">
                        <Icons icon={<RiPlantLine />} value={`${translation.title_2}`}  />
                        <div className="collapse multi-collapse" id="card_data_2" >
                            <div className="card card-body "  style={{width:'250px'}}>
                                <span> {translation.popup_2_title} </span>
                                       {translation.popup_2} 
                            </div>
                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_3" aria-controls="card_data_3">
                       <Icons icon={<MdOutlineBusAlert />} value={`${translation.title_3}`}  />
                        <div className="collapse multi-collapse" id="card_data_3" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> {translation.popup_3_title} </span>
                                   {translation.popup_3} 
                            </div>

                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_4"  aria-controls="card_data_1">
                         <Icons icon={<RiExchangeDollarLine />} value={`${translation.title_4}`}  /> 
                        <div className="collapse multi-collapse" id="card_data_4" >
                            <div className="card card-body "  style={{width:'250px'}}>
                                <span> {translation.popup_4_title} </span> 
                                       {translation.popup_4}
                               
                            </div>
                        </div>
                    </div> 
                    
                </div>           
            </section>
  );
};


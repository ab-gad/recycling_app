import React , { useContext } from "react";
import electricity from "./../images/electricity.png";
import power from "./../images/power.png";
import water from "./../images/water.png";
import recycle from "./../images/recycle.png";
import Card from "./../Card_home/Card";
import { Langcontext } from "../../../../App";

function Card_in_home () {

    const Arabic = {
        head: "القوة الكامنة فى إعادة تدوير القمامة",
        head_body:" إعادة إستخدام المواد التى تم استخدامها من قبل من أجل مستقبل أفضل و نظام صديق للبيئة مما يؤثر على ضروريات الحياة",
        card_1_title : "إعادة التدوير",
        card_1_text: "إنها عملية تحويل النفايات المستخدمة عديمة النفع الى اشياء جديدة قابلة للستخدام مرة اخرى ",
        card_2_title : "تنقية المياة",
        card_2_text: "  الطرق الخاطئة للتخلص من النفايات برميها في المصارف والبحيرات ...",
        card_3_title : "النظام البيئي",
        card_3_text: "الاحتباس الحرارى و ندرة الموارد هم من أهم المخاطر التى نواجهها ...",
        card_4_title : "النظام الإقتصادي",
        card_4_text: "تعد إعادة التدوير من اهم المصادر الإقتصادية التى لها دور كبير و فعال فى بناء ...",
    }
    const English = {
        head: "the power of garbage recycling!!",
        head_body:" Reuse of used materials for a better future and an environmentally friendly system.That effect of the necessities of life. ",
        card_1_title : "Recycling",
        card_1_text: "It is the process of converting useless waste into new things that can be used again ...",
        card_2_title : "Water Refine",
        card_2_text: "Wrong ways to dispose of waste by throwing it into drains and lakes, which affects public health ...",
        card_3_title : "Eco System",
        card_3_text: "Global warming and resource scarcity are among the most important risks we face ...",
        card_4_title : "Economic System",
        card_4_text: "Recycling is one of the most important economic resources that have a effective role in ...",
        
    }
      const { langcont, Setlangcontext } = useContext(Langcontext);
      const translation = langcont === "ENGLISH" ? English : Arabic;
    
    return (
        <section id="homeCard">
            <div className="container py-5 mt-5">
                <div className="mb-5">
                    <h2 className="green">20+values</h2>
                    <h1 id="headers" className="text-capitalize"> {translation.head} </h1>
                    <p className="size"> {translation.head_body} </p>
                               
                </div>
                <div className="row justify-content-center gap-4 gap-xl-0 ">
                    <Card
                    title={translation.card_1_title}
                    text={translation.card_1_text}
                    imgSrc={recycle}
                    url="https://ar.wikipedia.org/wiki/%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1_%D9%84%D9%84%D8%A3%D9%81%D8%B6%D9%84#:~:text=%D9%88%D9%8A%D9%82%D9%88%D9%84%20%D8%A7%D9%84%D9%83%D8%A7%D8%AA%D8%A8%D8%A7%D9%86%20%D8%A3%D9%86%20%D8%A7%D9%84%D9%87%D8%AF%D9%81%20%D9%85%D9%86,%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%20%D8%B9%D9%86%D8%AF%20%D8%AA%D8%B5%D9%86%D9%8A%D8%B9%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9."
                    />

                    <Card
                    title={translation.card_2_title}
                    text={translation.card_2_text}
                    imgSrc={water}
                    url="http://www.waterencyclopedia.com/Oc-Po/Pollution-of-Streams-by-Garbage-and-Trash.html"
                    />

                    <Card
                    title={translation.card_3_title}
                    text={translation.card_3_text}
                    imgSrc={electricity}
                    url="https://www.un.org/en/chronicle/article/ecology-recycling"
                    />

                    <Card
                    title={translation.card_4_title}
                    text={translation.card_4_text}
                    imgSrc={power}
                    url="https://en.wikipedia.org/wiki/Waste_management_in_Egypt"
                    />
                </div>
            </div>
      </section>
    );
}
export default Card_in_home;
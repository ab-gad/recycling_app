import React , { useContext } from "react";
import PageTitle from "../../page_title";
import Footer from "../Footer/Footer";
import { GiFeather, GiSpotedFlower } from "react-icons/gi";
import { HiOutlineLightBulb, HiOutlineSun } from "react-icons/hi";
import { FaHandHoldingHeart, FaCogs, FaRegGem } from "react-icons/fa";
import { Langcontext } from "../../../App";

const About = () => { 
  const Arabic = {
    aboutUs: " معلومات عنا",
    whoWeAre: "من نحن؟",
    weAreTheBest: "نحن الأفضل",
    weAreTheBestParagraph:
      "علاقتنا المتميزة مع منافسينا هي ما يميزنا عن غيرنا. شغفنا وحبنا لما نقوم به هو ما يجعلنا نتحرك للأمام. إيماننا بأننا نستحق الأفضل دائمًا هو ما يجعلنا الأفضل حقًا. معًا ، يمكننا حماية البيئة وتحقيق المنافع المتبادلة. إذا كنت ترغب في بيع البلاستيك أو الألمنيوم أو الورق المستعمل ، فأنت في المكان الصحيح.",
    knowMore: "تعرف على المزيد عن ...",
    dream: "الحلم",
    dreamText: "نحلم بعالم نظيف خالٍ من الأمراض لنعيشه في سعادة دائمة.",
    vision: "الرؤية",
    visionText:
      "بناء فكرة إعادة التدوير في أذهان الأجيال القادمة لأنها مستقبلنا.",
    passion: "الشغف",
    passionText: "الشغف هو القوة الدافعة التي تدفعنا نحو النجاح والإبداع.",
    benefit: "الفائدة",
    benefitText:
      "نعتقد أن العلاقة بين المنظمة وعملائها هي أهم فائدة لتحقيق التقدم.",
    purpose: "الهدف",
    purposeText:
      "نسعى جاهدين من أجل مستقبل أفضل من خلال الاستخدام الأفضل للموارد والحفاظ على الصحة العامة.",
    values: "القيم",
    valuesText:
      "الصدق والإخلاص وكسب رضا العملاء هي أعلى القيم التي تجعل قلوبنا مليئة بالحب لبعضنا البعض.",
  };
  const English = {
    aboutUs: "About Us",
    whoWeAre: "Who We Are ?",
    weAreTheBest: "We Are The Best",
    weAreTheBestParagraph:
      "Our distinguished relationship with our competitors is what distinguishes us from others Our passion and love for what we do are what keep us moving forward Our belief that we always deserve the best is what truly makes us the best Together, we can protect the environment and achieve mutual benefits,If you want to sell used plastic, aluminum,or paper, you are in the right place",
    knowMore: "Know More About Our ...",
    dream: "Dream",
    dreamText:
      "We Dream of a clean world without diseases to live happily ever after.",
    vision: "vision",
    visionText:
      "Building the idea of ​​recycling in the minds of future generations because they are Our future.",
    passion: "Passion",
    passionText:
      "Passion is the driving force that drives us towards success and creativity.",
    benefit: "Benefit",
    benefitText:
      "We believe that the relationship between an organization and its customers is the most important benefit to achieving progress.",
    purpose: "Purpose",
    purposeText:
      "We strive for a better future through better use of resources and the preservation of public health.",
    values: "Values",
    valuesText:
      "Honesty, sincerity, and earning customer satisfaction are the highest values ​​that make our hearts full of love for each other.",
  };
  const { langcont, Setlangcontext } = useContext(Langcontext);
  const translation = langcont === "ENGLISH" ? English : Arabic;
  const icons = [
    {
      icon: <HiOutlineLightBulb id="1" />,
      text: translation.dream,
      content: translation.dreamText,
    },
    {
      icon: <GiFeather id="2" />,
      text: translation.vision,
      content: translation.visionText,
    },
    {
      icon: <HiOutlineSun id="3" />,
      text: translation.passion,
      content: translation.passionText,
    },
    { icon: <GiSpotedFlower id="4" />, text: translation.knowMore },
    {
      icon: <FaHandHoldingHeart id="5" />,
      text: translation.benefit,
      content: translation.benefitText,
    },
    {
      icon: <FaCogs id="6" />,
      text: translation.purpose,
      content: translation.purposeText,
    },
    {
      icon: <FaRegGem id="7" />,
      text: translation.values,
      content: translation.valuesText,
    },
  ];
  const show = (e) => {
    let items = document.querySelectorAll(".ico");
    let around_icons = document.querySelectorAll(".circle_icons span");
    if (e.target.id === "4") {
      e.target.style.color = "red";
      items.forEach((el) => {
        el.style.opacity = 1;
      });

      around_icons.forEach((el) => {
        el.style.color = "yellowgreen";
      });
    }
  };

  return (
    <>
      <section id="about">
        <PageTitle
          title={translation.aboutUs}
          description={translation.whoWeAre}
        />

        <div className="container d-flex align-items-center gap-5 flex-wrap flex-lg-nowrap">
          <div className="about_info">
            <h2> {translation.weAreTheBest} </h2>
            <p> {translation.weAreTheBestParagraph}</p>
          </div>
          <img
            className="img-fluid m-auto"
            src={require('./3.png')}
            alt="about"
          />
        </div>
        <div className="container_circle_icons ">
          <div className=" circle_icons text-center mb-5">
            {icons.map((opj, i) => {
              return (
                <div key={i}>
                  <span onClick={(e) => show(e)}> {opj.icon} </span>
                  <h4> {opj.text}</h4>
                  <p className="ico d-none d-lg-block "> {opj.content} </p>
                </div>
              );
            })}
          </div>

          <div className=" row justify-content-around p-0 m-0">
            {icons.map((opj, i) => {
              return (
                <div
                  key={i}
                  className=" ico_2 text-center col-sm-5 col-10 mt-5  d-block d-lg-none "
                >
                  <h3 className="mb-4"> {opj.text} </h3>
                  <p> {opj.content} </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default About;

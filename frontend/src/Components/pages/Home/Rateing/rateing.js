import { LinearProgress } from "@material-ui/core";
import Progress from "./progress";
import React , { useContext } from "react";
import { Langcontext } from "../../../../App";
import axios from "axios"
import {useState, useEffect}  from  "react"


function Rateing (){

  const Arabic = {
    material: "مواد",
    annual: "السنوي",
    production: "الإنتاج",
    consumption: "الإستهلاك",
    recycling: "إعادة تدوير",
    plastic: "بلاستيك",
    papers: "أوراق",
    Aluminum: "ألومنيوم",
    environmental_rate: "معدل الحفاظ على البيئة",
  };
  const English = {
    material: "material",
    annual: "annual",
    production: "production",
    consumption: "consumption",
    recycling: "recycling",
    plastic: "plastic",
    papers: "papers",
    Aluminum: "Aluminum",
    environmental_rate: "environmental conservation rate",
  };

  const { langcont, Setlangcontext } = useContext(Langcontext);
  const translation = langcont === "ENGLISH" ? English : Arabic;

  const [rate, setRate] = useState([])
   const getRate=() => {
            axios.get(`http://localhost:8000/material_api/rate/`)
            .then((result) => {
                console.log('rate',result.data)
                setRate(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(()=>{      
      getRate()
      
      
  },[])

  // console.log('material',rate[2].annual_production)
  // console.log('material',material[0].annual_production)

    return (
        <section id="reat_section" className=" my-5 p-3 fs-sm-6 fs-md-1 text-light">
        <table className="table table-borderless text-center">
          <thead className="">
            <tr className=" row align-items-center">
              <th className="col-3 d-none d-sm-block "> {translation.material} </th>
              <th className="col-4 col-sm-3">
                {translation.annual} <br /> {translation.production}
              </th>
              <th className="col-4 col-sm-3">
                {translation.annual} <br /> {translation.consumption}
              </th>
              <th className="col-4 col-sm-3"> {translation.recycling} </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" row justify-content-between align-items-centermt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0"> {translation.plastic} </td>
              <td className="col-4 col-sm-3">
                <Progress value={20} />
                 <span>20%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={20}  />
                <span>20%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={20} />
                <span>20%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">
               {translation.papers}
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={20}  />
                <span>20 %</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={20}  />
                <span>20 %</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value= {20}/>
                <span>20%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0"> {translation.Aluminum} </td>
              <td className="col-4 col-sm-3">
                <Progress value={20} />
                <span>20%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={20} />
                <span>20%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={20} />
                <span>20%</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="ssss">
                <h6> {translation.environmental_rate} </h6>
                <LinearProgress
                  className="env_rate"
                  variant="determinate"
                  value={80}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      // <section id="reat_section" className=" my-5 p-3 fs-sm-6 fs-md-1 text-light">
      //   <table className="table table-borderless text-center">
      //     <thead className="">
      //       <tr className=" row align-items-center">
      //         <th className="col-3 d-none d-sm-block "> {translation.material} </th>
      //         <th className="col-4 col-sm-3">
      //           {translation.annual} <br /> {translation.production}
      //         </th>
      //         <th className="col-4 col-sm-3">
      //           {translation.annual} <br /> {translation.consumption}
      //         </th>
      //         <th className="col-4 col-sm-3"> {translation.recycling} </th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr className=" row justify-content-between align-items-centermt-md-2">
      //         <td className="col-12 col-sm-3 mb-3 mb-sm-0"> {translation.plastic} </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[2].annual_production} />
      //            <span>{rate[2].annual_production}%</span>
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[2].annual_consumption}  />
      //           <span>{rate[2].annual_consumption}%</span>
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[2].annual_recycling} />
      //           <span>{rate[2].annual_recycling}%</span>
      //         </td>
      //       </tr>
      //       <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
      //         <td className="col-12 col-sm-3 mb-3 mb-sm-0">
      //          {translation.papers}
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[0].annual_production}  />
      //           <span>{rate[0].annual_production} %</span>
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[0].annual_consumption}  />
      //           <span>{rate[0].annual_consumption} %</span>
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value= {rate[0].annual_recycling}/>
      //           <span>{rate[0].annual_recycling}%</span>
      //         </td>
      //       </tr>
      //       <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
      //         <td className="col-12 col-sm-3 mb-3 mb-sm-0"> {translation.Aluminum} </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[1].annual_production} />
      //           <span>{rate[1].annual_production}%</span>
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[1].annual_consumption} />
      //           <span>{rate[1].annual_consumption}%</span>
      //         </td>
      //         <td className="col-4 col-sm-3">
      //           <Progress value={rate[1].annual_recycling} />
      //           <span>{rate[1].annual_recycling}%</span>
      //         </td>
      //       </tr>
      //     </tbody>
      //     <tfoot>
      //       <tr>
      //         <td colSpan={4} className="ssss">
      //           <h6> {translation.environmental_rate} </h6>
      //           <LinearProgress
      //             className="env_rate"
      //             variant="determinate"
      //             value={80}
      //           />
      //         </td>
      //       </tr>
      //     </tfoot>
      //   </table>
      // </section> 

    );
} 

export default Rateing;




// test

 
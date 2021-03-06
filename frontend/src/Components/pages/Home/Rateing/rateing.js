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
  
  const [paperRate, setPaperRate] = useState({})
  const [plasticRate, setPlasticRate] = useState({})
  const [aluminuimRate, setAluminuimRate] = useState({})

   const getRate=() => {
            axios.get(`http://localhost:8000/material_api/rate/`)
            .then((result) => {
                setPaperRate(result.data.filter((e)=>e.material === 'paper')[0])
                setPlasticRate(result.data.filter((e)=>e.material === 'plastic')[0])
                setAluminuimRate(result.data.filter((e)=>e.material === 'metal')[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // Conservation Rate
    const loss_rate_paper = paperRate.annual_consumption - paperRate.annual_recycling
    const loss_rate_plastic = plasticRate.annual_consumption - plasticRate.annual_recycling
    const loss_rate_aluminum = aluminuimRate.annual_consumption - aluminuimRate.annual_recycling
    const average_loss_rate = ( loss_rate_paper + loss_rate_plastic + loss_rate_aluminum ) / 3
    const average_Keeping_rate = 100 - average_loss_rate

    useEffect(()=>{      
      getRate() 
  },[])


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
              <th className="col-4 col-sm-3">
                {translation.annual} <br /> {translation.recycling} 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" row justify-content-between align-items-centermt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0"> {translation.papers} </td>
              <td className="col-4 col-sm-3">
                <Progress value={paperRate?.annual_production} />
                <span>{paperRate?.annual_production}%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={paperRate?.annual_consumption}  />
                <span>{paperRate?.annual_consumption}%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={paperRate?.annual_recycling} />
                <span>{paperRate?.annual_recycling}%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">
              {translation.plastic}
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={plasticRate?.annual_production}  />
                <span>{plasticRate?.annual_production} %</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={plasticRate?.annual_consumption}  />
                <span>{plasticRate?.annual_consumption} %</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value= {plasticRate?.annual_recycling}/>
                <span>{plasticRate?.annual_recycling}%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0"> {translation.Aluminum} </td>
              <td className="col-4 col-sm-3">
                <Progress value={aluminuimRate?.annual_production} />
                <span>{aluminuimRate?.annual_production}%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={aluminuimRate?.annual_consumption} />
                <span>{aluminuimRate?.annual_consumption}%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={aluminuimRate?.annual_recycling} />
                <span>{aluminuimRate?.annual_recycling}%</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="ssss">
                <h6> {translation.environmental_rate}: {average_Keeping_rate.toFixed(1)} </h6>
                <LinearProgress
                  className="env_rate"
                  variant="determinate"
                  value={average_Keeping_rate.toFixed(1)}
                />
              </td>
            </tr>
          </tfoot>
        </table>
        </section> 

    );
} 

export default Rateing;





 
import { LinearProgress } from "@material-ui/core";
import Progress from "../../Home/progress";

function Rateing (){
    return (
        <section id="reat_section" className=" my-5 p-3 fs-sm-6 fs-md-1">
        <table className="table table-borderless text-center">
          <thead className="">
            <tr className=" row align-items-center">
              <th className="col-3 d-none d-sm-block ">material</th>
              <th className="col-4 col-sm-3">
                annual <br /> production
              </th>
              <th className="col-4 col-sm-3">
                Annual <br /> consumption
              </th>
              <th className="col-4 col-sm-3">recycling</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" row justify-content-between align-items-centermt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">plastic</td>
              <td className="col-4 col-sm-3">
                <Progress value={50} /> <span>50%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={93} />
                <span>93%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">
                Cardboard and papers
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={45} />
                <span>45%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={30} />
                <span>30%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">Aluminum</td>
              <td className="col-4 col-sm-3">
                <Progress value={70} />
                <span>70%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={90} />
                <span>90%</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="ssss">
                <h6>environmental conservation rate</h6>
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

    );
} 

export default Rateing;
import { useState } from "react";
import Mail from "./email";
import "./form.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(null);

  const passValidation = (e) => {
    console.log(e.target.value);

    if (e.target.name === "userpass") {
      setPass(e.target.value);
      if (e.target.value === "") {
        setPassError(null);
      } else if (
        e.target.value.length >= 8 &&
        e.target.value.match(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$"
        )
      ) {
        setPassError("");
      } else {
        setPassError("Please enter a vaild password format");
      }
    }
  };

  const showPass = () => {
    const passInput = document.getElementById("passId");

    if (passInput.type === "password") {
      return (passInput.type = "text");
    } else {
      return (passInput.type = "password");
    }
  };

  return (
    <section id="wholepage">
      <div className="container">
        <div className="card loginform">
          <div className="card-body">
            <h1 className="card-title text-center">Login</h1>
            <div className="card-text">
              <form>
                <Mail />

                <div className="mb-3 form-group ">
                  <label for="passInput ">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passId"
                    required
                    value={pass}
                    name="userpass"
                    onChange={(e) => passValidation(e)}
                  />
                  <small> {passError}</small>
                </div>
                <br></br>

                <div className="mb-3 form-group checkbox">
                  <input type="checkbox" onClick={() => showPass()} />
                  <label>Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary form-control">
                  Login
                </button>

                <div className="registermsg">
                  Don't have an account?{" "}
                  <NavLink
                    to="/register"
                    className="text-decoration-none"
                    exact
                  >
                    Create one
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

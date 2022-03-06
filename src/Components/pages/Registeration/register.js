import { useState } from "react";
import Mail from "./email";
import { useHistory } from "react-router-dom";
import "./form.css";

const Register = (props) => {
  const history = useHistory();
  console.log(history, "history");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    history.push({
      pathname: "/login",
    });
  };

  const [username, SetUser] = useState("");
  const [userError, SetUserError] = useState(null);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(null);
  const [confirmpass, setConfirmPass] = useState("");
  const [confirmpassError, setConfirmPassError] = useState(null);

  // username check
  const noSpace = (event) => {
    SetUser(event.target.value);
    if (event.target.name === "username") {
      if (event.target.value.includes(" ")) {
        SetUserError("Username shouldn't contain spaces! ");
      } else {
        SetUserError(null);
      }
    }
  };

  //pass check
  const passValidation = (e) => {
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
        setPassError(" ");
      } else {
        setPassError("Please enter a vaild password format");
      }
    }
    //confirm pass check
    if (e.target.name === "confirmpass") {
      setConfirmPass(e.target.value);
      if (e.target.value === "") {
        setConfirmPassError(null);
      } else if (
        document.getElementById("passId").value ===
          document.getElementById("passId2").value &&
        `${passError}` === " "
      ) {
        setConfirmPassError(" ");
      } else {
        setConfirmPassError("Password doesn't match");
      }
    }
  };

  return (
    <section id="wholepage">
      <div className="container">
        <div className="card registerform ">
          <div className="card-body">
            <h1 className="card-title text-center">Register</h1>
            <div className="card-text">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3 form-group">
                  <label className="">Name </label>
                  <input
                    type="text"
                    name="name "
                    required
                    className="form-control"
                  />
                </div>
                <Mail />
                <div className="mb-3 form-group">
                  <label> User Name</label>
                  <input
                    type="text"
                    value={username}
                    name="username"
                    required
                    className="form-control"
                    onChange={(even) => noSpace(even)}
                  />
                  <small>{userError}</small>
                </div>

                <div className="mb-3 form-group">
                  <label>Password</label>
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

                <div className="mb-3 form-group">
                  <label>Confirm password</label>
                  <input
                    id="passId2"
                    type="password"
                    className="form-control"
                    name="confirmpass"
                    value={confirmpass}
                    onChange={(e) => passValidation(e)}
                    required
                  />
                  <small> {confirmpassError} </small>
                </div>

                <button type="submit" className="btn btn-primary form-control">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

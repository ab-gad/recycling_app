import { useState } from "react";


const Mail = () => {

    const [mailNBame , setmailNBame]= useState("");
    const [mailError , setmailError] = useState(null)

    const mailVaildation = (e) => {
        if(e.target.name === "email") {
            setmailNBame(e.target.value);
            if (e.target.value === "") {
                setmailError (null);
            }else if (e.target.value.match("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")){
                setmailError (" ");
            }else {
                setmailError ("Please enter a vaild email format");
            }
        }
    }
    return (
    <div className="mb-3 form-group">
      <label for="inputEmail" className="">Email Address</label>
      <input type="email" className="form-control" 
      required
      onChange={(e) => mailVaildation(e)}
      name="email"
      id="emailID"
      pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" />
      <small>{mailError}</small>
    </div>
    )
}

export default Mail;
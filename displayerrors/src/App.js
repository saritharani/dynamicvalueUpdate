import "./App.css";
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      roll_no: null,
      errormessage: " "
    };
  }
  myChangeHandler = event => {
    let name = event.target.name;
    let val = event.target.value;
    let err = "";
    if (name === "roll_no") {
      if (val !== "" && !Number(val)) {
        err = <strong>Your roll number must be number</strong>;
      }
    }
    this.setState({ errormessage: err });
    console.log("errore message:" + err);
    this.setState({ [name]: val });
  };
  render() {
    return (
      <form>
        <h1>HELLO {this.state.username}</h1>
        <label>Register your name:</label>
        <input
          type="text"
          name="username"
          onChange={this.myChangeHandler}
        ></input>
        <br />
        <label>Enter Roll number:</label>
        <input
          type="text"
          name="roll_no"
          onChange={this.myChangeHandler}
        ></input>
        {this.state.errormessage}
      </form>
    );
  }
}

export default Form;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {

  const [user, setUser] = useState({
    fullName: "",
    age: "",
    contact: "",
    email: "",
    password: "",
  });

  const getData = async () => {
  
      await axios
        .post("http://localhost:3001/ragistration", user)
        alert("successfull")
  
  };

  return (
    <div
    // style={{
    //   backgroundColor: "rgb(154, 216, 240)",
    //   position: "fixed",
    //   top: "0",
    //   width: "100%",
    //   height: "100%",
    // }}
    >
      <form  className="registration">
        <h1
          style={{
            textAlign: "center",
            fontStyle: "normal",
            color: "purple",
            paddingBottom: "25px",
          }}
        >
          Registration page
        </h1>

        {/* <label>name</label> */}
        <input
          className="input"
          type="text"
          placeholder="Enter your name"
          //  onClick={getData}
          value={user.fullName}
          onChange={(e) => {
            setUser({ ...user, fullName: e.target.value });
          }}
        />
        <br />
        <br />

        {/* <label>email</label> */}
        <input
          className="input"
          type="email"
          placeholder="enter you email"
          value={user.email}
          // onClick={getData}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <br />
        <br />

        {/* <label>contact</label> */}
        <input
          className="input"
          type="number"
          placeholder="enter your contact"
          value={user.contact}
          // onClick={getData}
          onChange={(e) => {
            setUser({ ...user, contact: e.target.value });
          }}
        />
        <br />
        <br />

        {/* <label>age</label> */}
        <input
          className="input"
          type="number"
          placeholder="enter your age"
          value={user.age}
          // onClick={getData}
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
        />
        <br />
        <br />

        {/* <label>password</label> */}
        <input
          className="input"
          type="password"
          value={user.password}
          // onClick={getData}
          placeholder="enter your password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <br />
        <br />

        {/* <input type="submit" style={{backgroundColor:"lightgreen" ,margin:"auto"}}/> */}
        <Link
          className="link"
          onClick={getData}
          style={{
            margin: "auto",
            background: "purple",
            color: "white",
            padding: "10px",
            borderRadius: "20px",
            width: "700px",
            textAlign: "center",
            cursor: "pointer",
          }}
          to="/Login"
        >
          submit
        </Link>
      </form>
    </div>
  );
}

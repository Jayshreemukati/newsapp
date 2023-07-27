import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import axios from "axios";
import { useCookies } from 'react-cookie';

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [cookies, setCookie] = useCookies(['token']);

  const loginData = async () => {
    // e.prevetDefault()
    await axios.post("http://localhost:3001/login",{email:data.email,password:data.password}).then((data) => {
      console.log(data)
      if(data.data == "user not found'" )
      {
        alert("user not found")
      }
      else{
       localStorage.setItem('token',data.data)
      }
      
    });
  };

  return (
    <div
    // style={{
    //   background: "rgb(154, 216, 240)",
    //   // position: "fixed",
    //   top: 0,
    //   width: "100%",
    //   height: "100%",
    // }}
    >
      <Form className="login">
        <h1
          style={{
            textAlign: "center",
            fontStyle: "normal",
            color: "purple",
            paddingBottom: "20px",
          }}
        >
          Login page
        </h1>

        {/* <Label>Email:</Label> */}
        <Input
          type="email"
          className="input"
          value={data.email}
          placeholder="enter your email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <br />
        <br />

        {/* <Label>Password:</Label> */}
        <Input
          type="password"
          className="input"
          value={data.password}
          
          placeholder="enter your password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <br />
        <br />

        <input
          type="button"
          onClick={loginData}
          style={{
            backgroundColor: "skyblue",
            margin: "auto",
            width: "700px",
            borderRadius: "20px",
            padding: "10px",
            background: "purple",
            cursor: "pointer",
          }}
          value="Log In"
        />
      </Form>
    </div>
  );
}

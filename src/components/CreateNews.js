import React, { useState } from "react";
import { Label, Form } from "reactstrap";

export default function CreateNews() {
  const [user, setUser] = useState({ image: "", title: "", discription: "" });

  return (
    <div
      // style={{
      //   background: "rgb(154, 216, 240)",
      //   position: "fixed",
      //   top: 0,
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <Form className="create-news">
        <h1
          style={{
            textAlign: "center",
            fontStyle: "normal",
            color: "purple",
          }}
        >
          CreateNews
        </h1>

        <Label>Image</Label>
        <input className="createnews-input"
          type="file"
          value={user.image}
          onChange={(e) => {
            setUser({ ...user, image: e.target.value });
          }}
        />
        <br />
        <br />
        <Label>TITLE </Label>
        <input
        className="createnews-input"
          type="text"
          value={user.title}
          onChange={(e) => {
            setUser({ ...user, title: e.target.value });
          }}
        />
        <br />
        <br />
        <Label> DISCRIPTION </Label>
        <input
        className="createnews-input"
          type="text"
          value={user.discription}
          onChange={(e) => {
            setUser({ ...user, discription: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="submit"
          value="submit"
          style={{ backgroundColor: " purple ", margin: "auto" ,width:"700px",borderRadius:"20px",color:"white"}}
        />
      </Form>
    </div>
  );
}

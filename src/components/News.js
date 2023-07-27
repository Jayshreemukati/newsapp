import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import NewDashboard from "./Dashboard";

export default function News(props) {
  return (
    <div style={{display:"inline-flex"}}>
      <Card className="card">
        <CardBody>
          <CardSubtitle>
            <img className="img1" src={props.img} />
          </CardSubtitle>

          <CardText className="title">{props.title}</CardText>

          <Container className="container">{props.discription}</Container>
        </CardBody>
      </Card>
      
    </div>
  );
}

import React from "react";
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

export default function LocationCard(props) {
  // console.log(props)
  return (
  <div>
      <Card key={props.data.key}>
        <CardHeader tag="h3">{props.data.name}</CardHeader>
        <CardBody>
          <CardTitle>Type: {props.data.type}</CardTitle>
          <CardText>
          Dimension: {props.data.dimension}
          </CardText> 
        </CardBody>
      
      </Card>

  </div>
  
  )}

import React from "react";
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardImg, CardText } from 'reactstrap';

export default function CharacterCard(props) {
  // console.log(props)
  return (
  <div>
      <Card>
        <CardHeader tag="h3">{props.data.name}</CardHeader>
        <CardImg top width="100%" src={props.data.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Species: {props.data.species}</CardTitle>
          <CardText>
          Gender: {props.data.gender}
          Origin: {props.data.origin.name}
          </CardText> 
        </CardBody>
        <CardFooter className="text-muted">Status: {props.data.status}</CardFooter>
      </Card>

  </div>
  
  )}

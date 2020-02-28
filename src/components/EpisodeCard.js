import React from "react";
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

export default function EpisodeCard(props) {
  // console.log(props)
  return (
  <div>
      <Card key={props.data.key}>
        <CardHeader tag="h3">{props.data.name}</CardHeader>
        <CardBody>
          <CardTitle>Aired: {props.data.air_date}</CardTitle>
          <CardText>
          Episode: {props.data.episode}
          </CardText> 
        </CardBody>
      
      </Card>

  </div>
  
  )}

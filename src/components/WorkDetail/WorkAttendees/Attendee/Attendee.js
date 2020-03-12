import React from "react";
import { Segment, Divider } from "semantic-ui-react";
import "./Attendee.css";

const Attendee = props => {
  const { name, email, tel, ecName, ecRel, ecTel } = props.info;
  return (
    <Segment>
      <h4>{name}</h4>
      <h5>{email}</h5>
      <h5>
        Phone:{"  "}
        <a href={`tel:${tel}`}>{tel}</a>
      </h5>
      <Divider />
      <h5>Emergency Contact Name: {ecName}</h5>
      <h5>Relationship: {ecRel}</h5>
      <h5>
        Emergency Contact Phone:{"  "}
        <a href={`tel:${ecTel}`}>{ecTel}</a>
      </h5>
    </Segment>
  );
};

export default Attendee;

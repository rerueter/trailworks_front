import React from "react";
import { Segment, Divider } from "semantic-ui-react";

const Attendee = props => {
  const { name, email, phone, ecName, ecRel, ecTel } = props.info;
  return (
    <Segment>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <Divider />
      <h2>{ecName}</h2>
      <h2>{ecRel}</h2>
      <h2>{ecTel}</h2>
    </Segment>
  );
};

export default Attendee;

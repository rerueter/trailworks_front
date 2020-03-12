import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const WorkItem = props => {
  const { _id, title, description, attendees } = props.work;
  return (
    <Segment>
      <h1>
        <Link to={`/works/${_id}`}>{title}</Link>
      </h1>
      <h2>{description}</h2>
      <h2>{`${attendees.length} Attending`}</h2>
    </Segment>
  );
};

export default WorkItem;

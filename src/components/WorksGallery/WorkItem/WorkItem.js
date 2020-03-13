import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const WorkItem = props => {
  const { _id, title, description, attendees } = props.work;
  return (
    <Segment className="work-item" vertical>
      <h1 className="title">
        <Link to={`/works/${_id}`}>{title}</Link>
      </h1>
      <h3>{description}</h3>
      <h4>{`${attendees.length} Attending`}</h4>
    </Segment>
  );
};

export default WorkItem;

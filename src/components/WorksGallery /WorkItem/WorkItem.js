import React from "react";

const WorkItem = props => {
  const { title, description } = props.work;
  return (
    <article>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </article>
  );
};

export default WorkItem;

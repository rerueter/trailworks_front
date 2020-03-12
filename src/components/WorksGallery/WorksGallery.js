import React from "react";
import WorkItem from "./WorkItem/WorkItem";
import { Segment } from "semantic-ui-react";

const WorksGallery = props => {
  const { works } = props;
  const displayItems = works => {
    return works.map(work => {
      return <WorkItem key={Math.random() * 10000} work={work} />;
    });
  };

  return (
    <Segment>
      <h1>It's a Gallery</h1>
      {displayItems(works)}
    </Segment>
  );
};

export default WorksGallery;

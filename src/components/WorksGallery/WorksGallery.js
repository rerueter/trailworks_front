import React from "react";
import WorkItem from "./WorkItem/WorkItem";
import { Segment, Divider } from "semantic-ui-react";

const WorksGallery = props => {
  const { works } = props;
  const displayItems = works => {
    return works.map(work => {
      return <WorkItem key={Math.random() * 10000} work={work} />;
    });
  };

  return (
    <Segment id="works-gallery">
      <h2>Current Trailwork Projects</h2>
      <Divider style={{ marginBottom: 0 }} />
      {displayItems(works)}
    </Segment>
  );
};

export default WorksGallery;

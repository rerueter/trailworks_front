import React from "react";
import WorkItem from "./WorkItem/WorkItem";

const WorksGallery = props => {
  const { works } = props;
  const displayItems = works => {
    return works.map(work => {
      return <WorkItem work={work} />;
    });
  };

  return (
    <section>
      <h1>It's a Gallery</h1>
      {displayItems(works)}
    </section>
  );
};

export default WorksGallery;

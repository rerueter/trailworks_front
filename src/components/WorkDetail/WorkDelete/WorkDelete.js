import React from "react";
import { Button, Icon, Header } from "semantic-ui-react";

const WorkDelete = props => {
  return (
    <>
      <Header as="h2">
        <Icon name="warning sign" />

        <Header.Content>Are you sure?</Header.Content>
      </Header>
      <Button.Group fluid>
        <Button color="red" onClick={props.deleteWork}>
          Delete
        </Button>
        <Button onClick={props.handleDelete}>Cancel</Button>
      </Button.Group>
    </>
  );
};

export default WorkDelete;

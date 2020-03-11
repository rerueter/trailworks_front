import React from "react";
import { withRouter } from "react-router-dom";
import { Header, Form, Button, Segment } from "semantic-ui-react";
import axios from "axios";

class NewWork extends React.Component {
  state = {
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    image: ""
  };

  render() {
    return <Header> howdy howdy howdy</Header>;
  }
}

export default withRouter(NewWork);

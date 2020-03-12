import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Segment } from "semantic-ui-react";

import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
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

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDate = (event, data) => {
    console.log(data.value);
    this.setState({
      date: data.value.toString()
    });
  };

  handleSubmit = event => {
    event.persist();
    console.table(this.state);
    axios
      .post(`${process.env.REACT_APP_API}/works`, this.state, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.props.history.push(`/works/${res.data._id}`);
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <Form.Input
              name="title"
              label="Event Title"
              type="text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              name="description"
              label="Event Description"
              placeholder="Give a brief overview of the work you're planning."
              type="text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="location"
              label="Event Location"
              type="text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <SemanticDatepicker
              label="Event Date"
              fluid
              name="date"
              format="MM-DD-YYYY"
              onChange={this.handleDate}
            ></SemanticDatepicker>
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="time"
              label="Time"
              placeholder="Provide a start and estimated end time."
              type="text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="image"
              label="Image"
              placeholder="Paste a link to an externally hosted image here."
              type="text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button fluid type="submit" onClick={this.handleSubmit}>
            Post Trailwork
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(NewWork);

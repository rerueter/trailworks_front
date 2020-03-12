import React from "react";

import { Divider, Form, Button } from "semantic-ui-react";

import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import axios from "axios";

class WorkUpdate extends React.Component {
  state = {
    work: this.props.work,
    title: this.props.work.title,
    description: this.props.work.description,
    location: this.props.work.description,
    date: this.props.work.date,
    time: this.props.work.time,
    image: this.props.work.image
  };

  handleSubmitUpdate = event => {
    event.persist();
    axios
      .put(
        `${process.env.REACT_APP_API}/works/${this.state.work._id}`,
        this.state
      )
      .then(res => {
        console.log(res);
        this.props.getWork();
        this.props.handleEdit();
      })
      .catch(err => console.log(err));
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

  render() {
    return (
      <Form>
        <Form.Field>
          <Form.Input
            name="title"
            label="Event Title"
            value={`${this.state.title}`}
            type="text"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            name="description"
            label="Event Description"
            value={`${this.state.description}`}
            type="text"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="location"
            label="Event Location"
            value={`${this.state.location}`}
            type="text"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <SemanticDatepicker
            label="Event Date (you must re-enter this. idk how it works. sorry.)"
            name="date"
            format="MM-DD-YYYY"
            onChange={this.handleDate}
          ></SemanticDatepicker>
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="time"
            label="Time"
            value={`${this.state.time}`}
            type="text"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="image"
            label="Image"
            value={`${this.state.image}`}
            placeholder="Paste a link to an externally hosted image here."
            type="text"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button.Group widths="2">
          <Button fluid type="submit" onClick={this.handleSubmitUpdate}>
            Update Trailwork
          </Button>
          <Button fluid onClick={this.props.handleEdit}>
            Cancel Edit
          </Button>
        </Button.Group>
      </Form>
    );
  }
}

export default WorkUpdate;

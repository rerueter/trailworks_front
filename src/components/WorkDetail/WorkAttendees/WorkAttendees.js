import React from "react";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import Attendee from "./Attendee/Attendee";

class WorkAttendees extends React.Component {
  state = { attendees: [] };

  getAttendees = () => {
    axios
      .get(`${process.env.REACT_APP_API}/works/${this.props.id}/attendees`)
      .then(res => {
        console.log(res);
        this.setState({
          attendees: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  displayAttendees = attendees => {
    return attendees.map(attendee => {
      return <Attendee key={Math.random() * 10000} info={attendee} />;
    });
  };

  componentDidMount() {
    this.getAttendees();
  }
  render() {
    return (
      <Segment>
        <h1>{this.props.id}</h1>
        {this.displayAttendees(this.state.attendees)}
      </Segment>
    );
  }
}

export default WorkAttendees;

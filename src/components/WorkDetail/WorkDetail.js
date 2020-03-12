import React from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./WorkDetail.css";
import { Segment, Button, Divider, Header } from "semantic-ui-react";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import WorkUpdate from "./WorkUpdate/WorkUpdate";
import WorkDelete from "./WorkDelete/WorkDelete";

class WorkDetail extends React.Component {
  state = {
    work: null,
    editing: false
  };

  getWork = () => {
    axios
      .get(`${process.env.REACT_APP_API}/works/${this.props.match.params.id}`, {
        withCredentials: true
      })
      .then(res => {
        // console.log(res);
        this.setState({ work: res.data.data });
      })
      .catch(err => console.log(err));
  };

  joinWork = () => {
    axios
      .put(
        `${process.env.REACT_APP_API}/works/${this.props.match.params.id}/attendees`,
        {},
        { withCredentials: true }
      )
      .then(res => {
        console.log(res);
        this.setState({ work: res.data.data });
      })
      .catch(err => console.log(err));
  };
  leaveWork = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/works/${
          this.props.match.params.id
        }/attendees/${localStorage.getItem("uid")}`
      )
      .then(res => {
        console.log(res);
        this.setState({ work: res.data.data });
      })
      .catch(err => console.log(err));
  };
  handleEdit = () => {
    this.setState({ editing: !this.state.editing });
    console.log(this.state.editing);
  };
  deleteWork = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/works/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getWork();
  }

  render() {
    return (
      this.state.work && (
        <Segment>
          <Header as="h1">
            <Header.Content>{this.state.work.title}</Header.Content>
            <Header.Content>
              <Button>
                <Link to={"/"}>Back</Link>
              </Button>
            </Header.Content>
          </Header>
          <Divider />
          <div className="date-location-time">
            <h3>
              <Moment format="MM/DD/YYYY">{this.state.work.date}</Moment>
            </h3>
            <h3>{this.state.work.location}</h3>
            <h3>{this.state.work.time}</h3>
          </div>
          <h3>{this.state.work.description}</h3>
          <Divider />
          {!this.state.editing ? (
            <h1>eyy no edits</h1>
          ) : (
            <WorkUpdate
              handleEdit={this.handleEdit}
              getWork={this.getWork}
              work={this.state.work}
            />
          )}

          {this.state.work.attendees.includes(localStorage.getItem("uid")) ? (
            <Button color="red" onClick={this.leaveWork}>
              Leave Work
            </Button>
          ) : (
            <Button color="green" onClick={this.joinWork}>
              Join Work
            </Button>
          )}

          {this.state.work.creator === localStorage.getItem("uid") ? (
            <Button.Group>
              <Button onClick={this.handleEdit}>Edit Work</Button>
              <Button onClick={this.getWork}>View Attendees</Button>
              <Button onClick={this.deleteWork}>Delete Work</Button>
            </Button.Group>
          ) : (
            <div></div>
          )}
        </Segment>
      )
    );
  }
}

export default WorkDetail;

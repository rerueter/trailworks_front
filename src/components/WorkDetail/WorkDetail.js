import React from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./WorkDetail.css";
import { Segment, Button, Divider, Header, Icon } from "semantic-ui-react";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import WorkUpdate from "./WorkUpdate/WorkUpdate";
import WorkDelete from "./WorkDelete/WorkDelete";
import WorkAttendees from "./WorkAttendees/WorkAttendees";

class WorkDetail extends React.Component {
  state = {
    work: null,
    editing: false,
    deleting: false
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
  handleDelete = () => {
    this.setState({ deleting: !this.state.deleting });
    console.log(this.state.deleting);
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

  goBack = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    this.getWork();
  }

  render() {
    return (
      this.state.work && (
        <>
          <Segment>
            <Header className="title" as="h1">
              <Header.Content>{this.state.work.title}</Header.Content>
            </Header>
            <Divider />
            <div>
              <h3>
                Date: {"  "}
                <Moment format="MM/DD/YYYY">{this.state.work.date}</Moment>
              </h3>
              <h3>Meet at: {this.state.work.location}</h3>
              <h3>Time: {this.state.work.time}</h3>
            </div>
            <h3>Description:</h3>
            <h3>{this.state.work.description}</h3>
            <Divider />

            {!this.state.editing ? null : (
              <WorkUpdate
                handleEdit={this.handleEdit}
                getWork={this.getWork}
                work={this.state.work}
              />
            )}
            {!this.state.deleting ? null : (
              <WorkDelete
                handleDelete={this.handleDelete}
                deleteWork={this.deleteWork}
              />
            )}

            {!this.state.editing &&
            !this.state.deleting &&
            localStorage.getItem("uid") ? (
              this.state.work.attendees.includes(
                localStorage.getItem("uid")
              ) ? (
                <>
                  <Button color="red" onClick={this.leaveWork}>
                    Leave Work
                  </Button>
                  <Button onClick={this.goBack}>Back</Button>
                </>
              ) : (
                <>
                  <Button color="green" onClick={this.joinWork}>
                    Join Work
                  </Button>
                  <Button onClick={this.goBack}>Back</Button>
                </>
              )
            ) : null}

            {this.state.work.creator === localStorage.getItem("uid") &&
            !this.state.editing &&
            !this.state.deleting ? (
              <Button.Group floated="right">
                <Button onClick={this.handleEdit}>Edit Work</Button>
                <Button onClick={this.handleDelete}>Delete Work</Button>
              </Button.Group>
            ) : null}
            {!localStorage.getItem("uid") && (
              <div className="warn">
                <Icon name="warning sign" />
                <p>You must be logged in to join trailwork projects.</p>
              </div>
            )}
          </Segment>
          {this.state.work.creator === localStorage.getItem("uid") && (
            <WorkAttendees id={this.state.work._id} />
          )}
        </>
      )
    );
  }
}

export default WorkDetail;

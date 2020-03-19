import React from "react";
import axios from "axios";
import { Segment, Header, Divider, Button } from "semantic-ui-react";
import ProfileUpdate from "./ProfileUpdate/ProfileUpdate";

class Profile extends React.Component {
  state = {
    user: {},
    editing: false
  };

  componentDidMount = () => {
    this.getUser();
  };
  getUser = () => {
    axios
      .get(`${process.env.REACT_APP_API}/users/${localStorage.getItem("uid")}`)
      .then(res => {
        console.log(res.data.user);
        this.setState({
          user: res.data.user
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };
  render() {
    return (
      <>
        {!this.state.editing && (
          <Segment>
            <Header> {`Welcome back, ${this.state.user.name}`}.</Header>
            <Divider />
            <h4>Email: {this.state.user.email}</h4>
            <h4>Phone: {this.state.user.tel}</h4>
            <h4>Medical Information: {this.state.user.emi}</h4>
            <h4>Emergency Contact: {this.state.user.ecName}</h4>
            <h4>Emergency Contact Phone: {this.state.user.ecTel}</h4>
            <h4>Emergency Contact Relationship: {this.state.user.ecRel}</h4>
            <Divider />
            <Button onClick={this.handleEdit}>Edit</Button>
          </Segment>
        )}
        {this.state.editing && (
          <ProfileUpdate
            user={this.state.user}
            handleEdit={this.handleEdit}
            getUser={this.getUser}
          />
        )}
      </>
    );
  }
}

export default Profile;

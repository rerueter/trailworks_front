import React from "react";
import axios from "axios";
import { Segment, Button } from "semantic-ui-react";

class Profile extends React.Component {
  state = {
    user: {}
  };

  componentDidMount = () => {
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
  render() {
    return (
      <Segment>
        <h1> {`howdy ${this.state.user.name}`}</h1>
      </Segment>
    );
  }
}

export default Profile;

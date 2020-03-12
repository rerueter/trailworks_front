import React from "react";
import axios from "axios";
import { Segment, Header, Button } from "semantic-ui-react";

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
        <Header> {`howdy ${this.state.user.name}`}</Header>
      </Segment>
    );
  }
}

export default Profile;

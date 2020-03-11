import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "semantic-ui-react";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.persist();
    console.table(this.state);
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.response));
  };
  render() {
    return (
      <Form>
        <h1>Please sign in.</h1>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="email"
            label="email"
            placeholder="your email address"
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="password"
            label="password"
            type="password"
            placeholder="your your password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button type="submit" onClick={this.handleSubmit}>
          SIGN IN
        </Form.Button>
      </Form>
    );
  }
}

export default withRouter(Login);

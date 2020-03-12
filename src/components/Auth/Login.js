import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Segment } from "semantic-ui-react";
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
      .post(`${process.env.REACT_APP_API}/auth/login`, this.state, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.props.setCurrentUser(res.data.data);
      })
      .catch(err => console.log(err.response));
  };
  render() {
    return (
      <Segment>
        <Form>
          <h1>Please sign in.</h1>

          <Form.Field>
            <Form.Input
              fluid
              className="form-control form-control-lg"
              name="email"
              label="email"
              placeholder="your email address"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              fluid
              className="form-control form-control-lg"
              name="password"
              label="password"
              type="password"
              placeholder="your password"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button type="submit" onClick={this.handleSubmit}>
            Sign In
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(Login);

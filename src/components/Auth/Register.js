import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Segment } from "semantic-ui-react";
import axios from "axios";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    tel: "",
    password: "",
    password2: "",
    ecName: "",
    ecTel: "",
    ecRel: "",
    emi: "",
    avatar: "",
    admin: false
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheck = event => {
    console.log(event.target.value);
    this.setState({
      admin: !this.state.admin
    });
  };

  handleSubmit = event => {
    event.persist();
    console.table(this.state);
    axios
      .post(`${process.env.REACT_APP_API}/auth/register`, this.state)
      .then(res => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <Segment>
        <Form>
          <h2>Please register.</h2>

          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Name"
              type="text"
              id="name"
              name="name"
              value={this.state.name}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Email"
              type="text"
              id="email"
              name="email"
              value={this.state.email}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Phone"
              type="text"
              id="tel"
              name="tel"
              value={this.state.tel}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Password"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Confirm Password"
              type="password"
              id="password2"
              name="password2"
              value={this.state.password2}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              label="Emergency Contact Name"
              type="text"
              id="ecName"
              name="ecName"
              value={this.state.ecName}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Emergency Contact Relationship"
              type="text"
              id="ecRel"
              name="ecRel"
              value={this.state.ecRel}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Emergency Contact Phone"
              type="text"
              id="ecTel"
              name="ecTel"
              value={this.state.ecTel}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Medical Information"
              placeholder="Please list any existing medical conditions that would be relevant in an emergency. If none, say 'none'."
              type="text"
              id="emi"
              name="emi"
              value={this.state.emi}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-control form-control-lg"
              onChange={this.handleChange}
              label="Picture"
              type="text"
              id="avatar"
              name="avatar"
              value={this.state.avatar}
            />
          </Form.Field>
          <Form.Checkbox label="Admin" onClick={this.handleCheck} />

          <Button fluid type="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(Register);

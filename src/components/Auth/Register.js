import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Form, Segment } from "semantic-ui-react";

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
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
      .then(res => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <Segment>
        <h2>Please register.</h2>
        <Form className="register-form">
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="name"
                name="name"
                value={this.state.name}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="email"
                name="email"
                value={this.state.email}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="tel">Phone</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="tel"
                name="tel"
                value={this.state.tel}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                id="password"
                name="password"
                value={this.state.password}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password2">Confirm Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                id="password2"
                name="password2"
                value={this.state.password2}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="ecName">Emergency Contact Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="ecName"
                name="ecName"
                value={this.state.ecName}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="ecTel">Emergency Contact Phone</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="ecTel"
                name="ecTel"
                value={this.state.ecTel}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="ecRel">Emergency Contact Relationship</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="ecRel"
                name="ecRel"
                value={this.state.ecRel}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="emi">Existing Medical Conditions</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="emi"
                name="emi"
                value={this.state.emi}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="avatar">Picture</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="avatar"
                name="avatar"
                value={this.state.avatar}
              />
            </Form.Field>
            <Form.Checkbox label="Admin" onClick={this.handleCheck} />
            <button type="submit" onClick={this.handleSubmit}>
              Register
            </button>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(Register);

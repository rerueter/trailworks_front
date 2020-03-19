import React, { useReducer } from "react";
import { Divider, Form, Button, Segment } from "semantic-ui-react";
import axios from "axios";

class ProfileUpdate extends React.Component {
  state = {
    _id: this.props.user._id,
    tel: this.props.user.tel,
    emi: this.props.user.emi,
    ecName: this.props.user.ecName,
    ecTel: this.props.user.ecTel,
    ecRel: this.props.user.ecRel,
    avatar: this.props.user.avatar
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.persist();
    axios
      .put(`${process.env.REACT_APP_API}/users/${this.state._id}`, this.state)
      .then(res => {
        console.log(res);
        this.props.handleEdit();
        this.props.getUser();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { tel, emi, ecName, ecTel, ecRel, avatar } = this.state;
    return (
      <Segment>
        <Form>
          <Form.Input
            type="text"
            label="Phone"
            name="tel"
            value={`${tel}`}
            onChange={this.handleChange}
          />
          <Form.TextArea
            type="text"
            label="Medical Information"
            name="emi"
            value={`${emi}`}
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label="Emergency Contact Name"
            name="ecName"
            value={`${ecName}`}
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label="Emergency Contact Phone"
            name="ecTel"
            value={`${ecTel}`}
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label="Emergency Contact Relation"
            name="ecRel"
            value={`${ecRel}`}
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label="Image"
            name="avatar"
            value={`${avatar}`}
            onChange={this.handleChange}
          />
          <Button.Group>
            <Form.Button onClick={this.handleSubmit}> Save Changes</Form.Button>
            <Form.Button onClick={this.props.handleEdit}>
              Cancel Edit
            </Form.Button>
          </Button.Group>
        </Form>
      </Segment>
    );
  }
}

export default ProfileUpdate;

import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import WorksGallery from "../WorksGallery/WorksGallery";

class Home extends React.Component {
  state = {
    works: []
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API}/works`)
      .then(res =>
        this.setState({
          works: res.data.data
        })
      )

      .catch(err => console.log(err));
  };

  render() {
    return (
      <section>
        <WorksGallery works={this.state.works} />;
      </section>
    );
  }
}

export default withRouter(Home);

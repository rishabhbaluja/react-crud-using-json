import React from "react";
import axios from "axios";

import { Redirect } from "react-router";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      status: "",
      redirect: false
    };
  }

  componentDidMount() {
    this.id = localStorage.getItem("id");
    axios
      .get("http://localhost:3000/todos/" + this.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          name: response.data.name,
          status: response.data.status
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }
  onChangeStatus(event) {
    this.setState({
      status: event.target.value
    });
  }

  routeChangeGet() {
    let path = `/Get`;
    this.props.history.push(path);
  }

  onSubmit(e) {
    const UpdatedTodos = {
      name: this.state.name,
      status: this.state.status
    };
    console.log(UpdatedTodos);
    axios
      .put("http://localhost:3000/todos/" + this.id, UpdatedTodos)
      //.then(res => console.log(res.data));
      .then(function(response) {
        console.log(response.data);
        alert(response.data);
      });
    this.setState({
      name: "",
      status: "",
      redirect: true
    });
  }

  render() {
    const { redirect } = this.state;
    console.log("redirect value" + redirect);
    if (redirect) {
      return <Redirect to="/Get" />;
    }
    return (
      <div>
        <div>
          <h1>Update...!</h1>
          <div>
            <h3>Edit Todo</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> Name: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label className="text text-primary">Status:</label>
                <input
                  type="text"
                  value={this.state.status}
                  onChange={this.onChangeStatus}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Product"
                  className="btn btn-primary"
                />
                &nbsp;
                <input
                  type="button"
                  value="Go Back"
                  onClick={e => this.routeChangeGet()}
                  className="btn btn-danger"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Update;

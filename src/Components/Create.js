import React, { Component } from "react";
import axios from "axios";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: ""
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  baseUrl = "http://localhost:3000/todos";
  onSubmit(event) {
    event.preventDefault();
    const todos = {
        name: this.state.name,
        status: this.state.status
    };
    axios
      .post(this.baseUrl, todos)
      .then(response => {
        console.log(response.data);
        alert(response.data);
      });
    this.setState({
        name: "",
        status: ""
    });
  }

  onChangeName(event){
    this.setState({
        name: event.target.value
    })
}
onChangeStatus(event){
    this.setState({
        status: event.target.value
    })
}
  render() {
    return (
      <div className="container">
        <h1>Add Todo</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="text text-primary"> Name:</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
              className="form-control"
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
            <input type="Submit" className="btn btn-info" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;

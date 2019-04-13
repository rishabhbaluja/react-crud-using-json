import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  routeChange(id) {
    let path = `/Get`;
    this.props.history.push(path);
  }

  onSubmit(e) {
    e.preventDefault();
    const signup = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(signup);
    axios
      .post("http://localhost:3000/login", signup)
      //.then(res => console.log(res.data));
      .then(function(response) {
        console.log(response.data);
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
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1> Signup Component</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label> Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Signup" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

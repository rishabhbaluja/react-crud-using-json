import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      login: [],
      redirect: "",
      flag: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/login")
      .then(response => {
        this.setState({ login: response.data });
        console.log(this.login)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    this.enteredUsername = this.state.username;
    this.enteredPassword = this.state.password;
    console.log(this.state.login.length);
    for (let i = 0; i < this.state.login.length; i++) {
      if (
        this.enteredUsername === this.state.login[i].username &&
        this.enteredPassword === this.state.login[i].password
      ) {
        this.setState({
          flag: true,
          redirect: true
        });
        this.flag2 = true;

        break;
      } else {
        this.setState({
          flag: false,
          redirect: false
        });
        this.flag2 = false;
      }
    }

    console.log("value=>" + this.state.redirect);
    if (this.flag2 === false) {
      alert("Wrong username and password");
    }
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

  render() {
    const { redirect } = this.state;
    console.log("redirect value" + redirect);
    if (redirect) {
      alert("Login Successfully");
      return <Redirect to="/Get" />;
    }

    return (
      <div>
        <h1> Login Component</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="text text-info"> Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label className="text text-info"> Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

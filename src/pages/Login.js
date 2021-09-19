import React, { Component } from "react";
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onLogin = (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };
  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
        var { location } = this.props;
      return <Redirect to= {{
          pathname : '/products',
          state : {
              from: location
          }
      }} />;
    }
    
    console.log(location);
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 col-12">
            <form onSubmit={this.onLogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="txtUsername"
                  className="form-control"
                  onChange={this.onChange}
                  value={txtUsername}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="txtPassword"
                  className="form-control"
                  onChange={this.onChange}
                  value={txtPassword}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

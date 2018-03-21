import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from './../firebase.js';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: null // se inicializa el state del usuario en null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

    // para que la sesión del usuario no se cierre al refrescar la página
    componentDidMount() {
      auth.onAuthStateChanged(user => {
        if (user) {
          this.setState({ user });
        }
      });
    }

    login() {
      auth.signInWithPopup(provider).then(result => {
        const user = result.user;
        this.setState({
          user
        });
      });
    }

    logout() {
      auth.signOut().then(() => {
        this.setState({
          user: null
        });
      });
    }

  render() {
    return (
      <div>
        {this.state.user ? (
          <div>
            <img src={this.state.user.photoURL} alt=""/>
            <p>{this.state.user.displayName}</p>
          </div>
        ): <button onClick={this.login}>login</button>}
      </div>
    );
  }
}

export default Login;
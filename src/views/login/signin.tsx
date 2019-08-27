import React, { Component } from 'react';
import { loginIn } from 'api/login'
export default class SignIn extends Component {
  componentDidMount(){
    loginIn()
  }
  render() {
    return (
      <div>
        login
      </div>
    )
  }
}

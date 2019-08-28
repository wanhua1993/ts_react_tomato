import React, { Component } from 'react';
import { loginIn } from 'api/login';
import './index.scss';

interface signInprops {
  history: any
}
export default class SignIn extends Component<signInprops> {
  // constructor(props: signInprops) {
  //   super(props);
  // }
  componentDidMount(){
    loginIn()
  }
  toSignUp() {
    this.props.history.push('/signup');
  }
  render() {
    return (
      <div className='signIn-content'>
        <div className='signIn-border'></div>
        <div className='signIn-center'>
          <div className='signIn-box'>
            <input type="text" placeholder='手机号、邮箱或用户名' />
            <input type="password" placeholder='密码' />
          </div>
          <p className='signIn-btn'>登录</p>
          <p className='signIn-forget'>忘记密码</p>
          <div className='signIn-if-user'>
            <p >没有账户？</p>
            <p className='signIn-create-user' onClick={this.toSignUp.bind(this)}>创建账户</p>
          </div>
        </div>
      </div>
    )
  }
}

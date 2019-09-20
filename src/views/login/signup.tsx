import React, { Component } from 'react';
import logo from 'assets/image/logo.png';
import './index.scss';

interface signUpState {
  way: number,
  time: number,
  timer: any
}
interface signUpProps {
  history: any
}
export default class SignUp extends Component<signUpProps, signUpState> {
  // constructor(props: signUpProps) {
  //   super(props);
  // }
  state: signUpState = {
    way: 0, // 0 --- 手机号注册   1 --- 邮箱注册
    time: 60,
    timer: 0
  }
  selectBtn() {
    this.setState({
      way: this.state.way ? 0 : 1
    });
  }
  // 获取验证码
  getCode(time: number) {
    let setInterTimer: any = null;
    if (time === 0 || time === 60) {
      setInterTimer = setInterval(() => {
        if (time <= 0) {
          clearInterval(setInterTimer);
          this.setState({
            timer: null,
            time: 60
          });
        } else {
          this.setState({
            time: time--
          });
        }
      }, 1000)
      this.setState({
        timer: setInterTimer
      });
    }
  }
  toSignIn() {
    this.props.history.push('/signin');
  }
  componentWillUnmount() {
    const { timer } = this.state;
    if (!timer) {
      clearInterval(timer);
      this.setState({
        timer: null
      });
    }
  }
  render() {
    const { way, time } = this.state;
    let if_time: boolean = time === 0 || time === 60;
    return (
      <div className='signIn-content'>
        <div className='signIn-border'></div>
        <div className='signIn-logo'>
          <img src={logo} alt=""/>
        </div>
        <div className='signIn-center'>
          <div className='signIn-box' style={{ display: way ? 'none' : 'block' }}>
            <input type="text" placeholder='手机号' />
            <input type="text" placeholder='验证码' className='signUp-code' />
            <span className='signUp-get-code' onClick={this.getCode.bind(this, time)} style={if_time ? {} : {
              color: '#ddd'
            }}>
              {(if_time) ? '获取验证码' : `${time}秒后重新获取`}
            </span>
            <input type="password" placeholder='密码' />
          </div>
          <div className='signIn-box' style={{ display: way ? 'block' : 'none' }}>
            <input type="text" placeholder='邮箱' />
            <input type="password" placeholder='密码' />
          </div>
          <p className='signIn-btn'>创建账户</p>
          <p className='signup-select-btn' onClick={this.selectBtn.bind(this)}>{way ? '切换手机号注册' : '切换邮箱注册'}</p>
          <div className='signIn-if-user'>
            <p >已有账户？</p>
            <p className='signIn-create-user' onClick={this.toSignIn.bind(this)}>立即登录</p>
          </div>
        </div>
      </div>
    )
  }
}

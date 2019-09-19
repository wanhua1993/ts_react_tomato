import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from 'assets/image/logo1.png';

import './index.scss';

type headerProps = {
  history: any
}

class Index extends Component<headerProps> {
  // constructor(props: headerProps) {
  //   super(props);
  // }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className='header-content'>
        <div className='header-content-center'>
          <h1 className='header-content-title'>
            <img src={logo} alt=""/>
            番茄简记
            </h1>
          <ul className='header-content-ul'>
            <li className='header-content-li'>首页</li>
            <li className='header-content-li'>故事</li>
          </ul>
          <p className='header-content-write'>写文章</p>
          <ul className='header-content-button'>
            <li>登录</li>
            <li>注册</li>
          </ul>
          <div className='header-content-search'>
            <input type="text" placeholder='搜索简记' />
          </div>
        </div>
      </div>
    )
  }
}

const withIndex = withRouter(Index as any);
export default withIndex;
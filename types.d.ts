declare module 'react'
declare module 'react-redux'
declare module 'react-router'
declare module 'react-content-loader'
declare module 'react-router-dom'
declare module 'react-dom'
declare module 'react-loadable'
declare module 'redux-logger'
declare module 'nodemon'
declare module 'webpack-dev-middleware'
declare module 'webpack-hot-middleware'
declare module 'showdown'
declare module 'morgan'

// https://www.tslang.cn/docs/handbook/jsx.html
// 去除使用标签的警告
// <div styleName="box" className="box">hello world</div>
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// 忽略一些全局对象的警告
declare const ArriveFooter: any;
declare const $: any;
declare const Toastify: any;
declare var module: any;
declare var global: any;
declare var __SERVER__: any;
declare var hljs: any;
declare var adsbygoogle: any;
declare var FloatFixed: any;

interface Window {
  __initState__: any;
  adsbygoogle: any;
  module: any;
}

declare var window: Window;
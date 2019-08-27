import { asyncLoad, generateRouteConfig } from './routeUtil';
// 一级路由 配置页面
const routeConfig: any = [
  {
    path: '/login',
    component: asyncLoad(() => import('views/login/signin')),
  },
  {
    path: '/signup',
    component: asyncLoad(() => import('views/login/signup')),
  },
  {
    path: '/', // 这里面包含的都是些 有公共头和尾部的组件 里面应该是 文章列表 文章详情页。。。
    exact: false, // 这里不需要严格匹配
    component: asyncLoad(() => import('views/common'))
  }
];

export default generateRouteConfig(routeConfig);
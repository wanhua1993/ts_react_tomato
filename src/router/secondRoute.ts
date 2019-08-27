import { asyncLoad, generateRouteConfig } from './routeUtil';
// 一级路由 配置页面
const routeConfig: any = [
  {
    path: '/articleList',
    component: asyncLoad(() => import('views/article/articleList'))
  },
  {
    path: '/articleDetail',
    component: asyncLoad(() => import('views/article/articleDetail')),
  }
];

export default generateRouteConfig(routeConfig);
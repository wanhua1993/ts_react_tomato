import Loadable from 'react-loadable';
import Loading from 'components/loading/Loading';
import { IRouteConfig } from 'store/stateTypes';

const routeConfig: any = [
  {
    path: '/login',
    component: asyncLoad(() => import('views/login')),
  },
  {
    path: '/signup',
    component: asyncLoad(() => import('views/login/signup')),
  }
];

function generateRouteConfig(route: IRouteConfig) {
  return route.map(item => {
    return {
      key: item.path,
      exact: typeof item.exact === 'undefined' ? true : item.exact,
      ...item,
      component: item.component,
    };
  });
}

function asyncLoad(loader: () => Promise<any>) {
  return Loadable({
    loader,
    loading: props => {
      if (props.pastDelay) {
        return Loading({ text: '按需加载。。。' });
      } else {
        return null;
      }
    },
    delay: 500,
  });
}


export default generateRouteConfig(routeConfig);
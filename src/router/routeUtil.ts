import Loadable from 'react-loadable';
import Loading from 'components/loading/Loading';
import { IRouteConfig } from 'store/stateTypes';
export const asyncLoad = (loader: () => Promise<any>) => {
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
export const generateRouteConfig = (route: IRouteConfig) => {
  return route.map(item => {
    return {
      key: item.path,
      exact: typeof item.exact === 'undefined' ? true : item.exact,
      ...item,
      component: item.component,
    };
  });
}

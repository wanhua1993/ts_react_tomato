import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routeData from 'router/secondRoute';
import { IRouterItem } from 'store/stateTypes';
import Header from 'components/header';
class Common extends Component {
  render() {
    // 作为二级的  router-view
    return (
      <div>
        <Header></Header>
        <Switch>
          {routeData.map(({ path, component, exact }: IRouterItem) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default Common;

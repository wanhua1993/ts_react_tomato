import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routeData from 'router';
import { IRouterItem } from 'store/stateTypes';
class App extends Component {
  render() {
    // 作为一级  router-view
    return (
      <BrowserRouter>
        {/* 只匹配其中一个路径 */}
        <Switch>
          {routeData.map(({ path, component, exact }: IRouterItem) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

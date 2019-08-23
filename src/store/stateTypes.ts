export type IUserName = string;


export type IAction = {
  readonly type: string
  [propName: string]: any
}

export type IActionCreator = (param: any) => IAction;


export type IStoreState = {
  userName: IUserName
}

export const defaultState: IStoreState = {
  userName: ''
}

export type IRouterItem = {
  path: string,
  component: any,
  exact: boolean,
  key: string,
}

export type IRouteConfig = Array<IRouterItem>
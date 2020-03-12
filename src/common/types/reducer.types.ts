export interface IReducerType {
  type: string;
  payload: Object | Array<Object | string | number | boolean> | string |  number | boolean;
}

import {IList, IReducerType} from "../common/types";

export const GET_PROVIDER: string = 'GET_PROVIDER';

export function getProvider(payload: IList) {
  return (dispatch: (arg: IReducerType) => void) => {
    dispatch(({type: GET_PROVIDER, payload}));
  }
}

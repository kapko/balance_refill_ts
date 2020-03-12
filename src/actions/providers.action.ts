import {IList} from "../common/types";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {AppState} from "../store";

export const INIT_PROVIDERS: string = 'INIT_PROVIDERS';

export const initProviders = (payload: IList[]): ThunkAction<unknown, AppState, undefined, any> => {
  return (dispatch: Dispatch<{ type: string, payload: IList[] }>) => {
    dispatch(({type: INIT_PROVIDERS, payload}));
  }
};

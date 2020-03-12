import {GET_PROVIDER} from "../actions/provider.action";
import {IList, IReducerType} from "../common/types";

const initialState: IList = {} as IList;

export default function provider(state = initialState, action: IReducerType): IList {
  switch (action.type) {
    case GET_PROVIDER:
      return {...state, ...action.payload as IList};

    default:
      return state;
  }
  
}

import {INIT_PROVIDERS} from '../actions/providers.action';
import {IList, IProviders, IReducerType} from "../common/types";

const initialState: IProviders = {
  items: [],
  fetched: false,
};

export default function providers(state = initialState, action: IReducerType): IProviders {
  switch (action.type) {
    case INIT_PROVIDERS:
      return {...state, ...{items: action.payload as IList[], fetched: true}};

    default:
      return state;
  }
}

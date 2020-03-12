import {IList, IProviders} from "./provider.types";

export interface IListComponent {
  showListEvent: (val: boolean) => void;
}

export interface IListMapStateToProps {
  providers: IProviders;
}

export interface IListMapDispatchToProps {
  getProvider: (item: IList) => void,
  initProviders: (items: IList[]) => void
}

export type TListProps = IListComponent & IListMapStateToProps & IListMapDispatchToProps;


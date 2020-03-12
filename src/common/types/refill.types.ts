import {IList} from "./provider.types";

export enum ERefillHandle {
  phone = 'phone',
  amount = 'amount'
}

export interface IRefillComponent {
  showListEvent: (val: boolean) => void
}

export interface IRefillMatState {
  provider: IList;
}

export interface IRefillState {
  phone?: string | null;
  amount?: number | null;
  showLoader: boolean;
}

export type IRefillProps = IRefillComponent & IRefillMatState;

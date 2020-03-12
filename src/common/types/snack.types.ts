type snackTypes = 'error' | 'success';

export interface ISnack {
  show: boolean;
  type?: snackTypes;
  isError?: boolean;
  message?: string;
  hideSnack?: any;
}

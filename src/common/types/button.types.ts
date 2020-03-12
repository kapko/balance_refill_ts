import {buttonTypes, color} from "./styles.type";

export interface IButtonComponent {
  type?: buttonTypes;
  onClick?: () => void;
  showLoader?: boolean;
  color?: color;
  text?: string;
}

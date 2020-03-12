import {Variant} from "@material-ui/core/styles/createTypography";
import {PropTypes} from "@material-ui/core";
import Alignment = PropTypes.Alignment;

export interface ITextComponent {
  align?: Alignment;
  tag?: Variant;
  text: string;
}

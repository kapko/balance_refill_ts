import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {ISnack} from "../common/types";

export default function SnackComponent(props: ISnack): JSX.Element {
  const [open, setOpen] = React.useState(props.show);
  const onClose = () => {
    setOpen(false);
    props.hideSnack();
  };

  useEffect(() => {
    setOpen(props.show);
  }, [props.show]);

  return <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <MuiAlert
      onClose={() => onClose()}
      severity={props.type}
      elevation={6}
      variant="filled">{props.message}</MuiAlert>
  </Snackbar>

}

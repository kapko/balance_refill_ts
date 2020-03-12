import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ILoader} from "../common/types";

export default function LoaderComponent(props: ILoader): JSX.Element | null {
  if (props.showLoader) {
    return <CircularProgress color={props.color || 'primary'} size={props.size || 40} />
  } else {
    return null
  }
}

import React from 'react';
import Button from '@material-ui/core/Button';
// local files
import LoaderComponent from './loader';
import {IButtonComponent} from "../common/types";

export default function ButtonComponent(props: IButtonComponent): JSX.Element {
  return <Button
    type={props.type}
    onClick={props.onClick}
    variant="contained"
    color={props.color || 'primary'}>{props.showLoader ?
    <LoaderComponent color="inherit" size={25} showLoader={true}/> : props.text}</Button>
}

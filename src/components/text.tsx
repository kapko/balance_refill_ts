import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ITextComponent} from "../common/types";

export default function TextComponent(props: ITextComponent): JSX.Element {
  return <Typography align={props.align || 'left'} variant={props.tag || 'h4'} gutterBottom>{props.text}</Typography>
}
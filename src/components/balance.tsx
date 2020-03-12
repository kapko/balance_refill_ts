import React from 'react';
import NumberFormat from 'react-number-format';

interface IBalanceComponent {
  inputRef: React.Ref<HTMLInputElement>,
  onChange: (event: { target: { value: string } }) => void;
}

export default function BalanceComponent(props: IBalanceComponent): JSX.Element {
  const { inputRef, onChange, ...other } = props;

  return <NumberFormat
    {...other}
    getInputRef={inputRef}
    format="####"
    onValueChange={values => {
      onChange({
        target: {
          value: values.value,
        },
      });
    }}
  />
}

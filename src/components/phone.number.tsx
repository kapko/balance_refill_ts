import React from 'react';
import MaskedInput from 'react-text-mask';

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export default function PhoneNumberComponent(props: TextMaskCustomProps): JSX.Element {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {inputRef(ref ? ref.inputElement : null)}}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      guide={false}
      placeholder="(***) *** - ****"
    />
  );
}

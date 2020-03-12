import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// local files
import PhoneNumberComponent from './phone.number';
import BalanceComponent from './balance';
import TextComponent from './text';
import ImageComponent from './image';
import ButtonComponent from './button.component';
import SnackComponent from './snack';
import {ISnack} from "../common/types";
import {AppState} from "../store";
import {ERefillHandle, IRefillMatState, IRefillProps, IRefillState} from "../common/types/refill.types";

const initialSnackState: ISnack = {
  show: false,
  type: 'success',
  message: '',
  isError: false,
}

const initialValueState: IRefillState = {
  phone: null,
  amount: null,
  showLoader: false
}

function RefillComponent(props: IRefillProps): JSX.Element {
  const {provider} = props;
  const [snack, setSnackValues] = React.useState(initialSnackState);
  const [values, setValues] = React.useState(initialValueState);

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValues({ showLoader: true });

    setTimeout(() => {
      const isError = !!(Math.round((Math.random() * (1 - 9))) % 2);
      const type = isError ? 'error' : 'success';
      const message = isError ? 'Oops some error' : 'Uploaded successfully!';

      setSnackValues({show: true, isError, type, message});
      setValues({showLoader: false, amount: null, phone: null});
    }, 1000);
  }

  const hideSnack: () => void = () => {
    setSnackValues({ show: false });

    if (!snack.isError) {
      props.showListEvent(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="refill">
      <SnackComponent
        hideSnack={hideSnack}
        show={snack.show}
        type={snack.type} message={snack.message} />

      <TextComponent align="center" text="Refill balance form" />

      <ImageComponent src={provider.image} />

      <TextComponent tag="h6" align="center" text={provider.title} />

      <FormControl className="input">
        <InputLabel htmlFor="formatted-text-mask-input">Phone number</InputLabel>
        <Input
          required
          value={values.phone}
          onChange={handleChange(ERefillHandle.phone)}
          inputComponent={PhoneNumberComponent as any}
        />
      </FormControl>

      <TextField
        required
        className="input"
        label="Amount"
        value={values.amount}
        onChange={handleChange(ERefillHandle.amount)}
        InputProps={{ inputComponent: BalanceComponent as any }}
      />

      <div className="button">
        <ButtonComponent showLoader={values.showLoader} type="submit" text="Submit" />
        <ButtonComponent onClick={() => props.showListEvent(true)} color="inherit" text="Cancel" />
      </div>

    </form>
  )
}

const mapState = (state: AppState): IRefillMatState => ({
  provider: state.provider
});

export default connect(mapState)(RefillComponent);

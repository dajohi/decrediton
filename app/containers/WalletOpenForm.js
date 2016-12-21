import React from 'react';
import { connect } from 'react-redux';
import { openWalletAttempt } from '../actions/WalletLoaderActions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

let WalletOpenForm = ({ dispatch }) => {
  let obj = new Object();

  return (
    <div>
      <form id="openWalletForm" onSubmit={e => {
        e.preventDefault();
        document.getElementById('openWalletForm').reset();

        if (obj.public_passphrase === undefined ||
            obj.public_passphrase.length < 1) {
          return;
        }

        dispatch(openWalletAttempt(obj));
        obj.public_passphrase.fill(0);
      }}>
        <TextField
          id="public_passphrase"
          hintText="Public Password"
          floatingLabelText="Public Password"
          onBlur={(e) =>{obj.public_passphrase = Buffer.from(e.target.value);}}
        /><br />
        <RaisedButton type="submit"
         style={style}
         label='Open Wallet'/>
      </form>
    </div>
  );
};
WalletOpenForm = connect()(WalletOpenForm);

export default WalletOpenForm;

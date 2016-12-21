import React from 'react';
import { connect } from 'react-redux';
import { discoverAddressAttempt } from '../actions/WalletLoaderActions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

let DiscoverAddressForm = ({ dispatch }) => {
  let obj = new Object();

  return (
    <div>
      <form id="discoverAddress" onSubmit={e => {
        e.preventDefault();
        document.getElementById('discoverAddress').reset();

        if (obj.private_passphrase === undefined ||
            obj.private_passphrase.length < 1) {
          return;
        }
        obj.discover_accounts = true;
        dispatch(discoverAddressAttempt(obj));
        obj.private_passphrase.fill(0);
      }}>
        <TextField
          id="private_passphrase"
          hintText="Private Password"
          floatingLabelText="Private Password"
          onBlur={(e) =>{obj.private_passphrase = Buffer.from(e.target.value);}}
        /><br />
        <RaisedButton type="submit"
          style={style}
          label='Discover Addresses'/>
      </form>
    </div>
  );
};
DiscoverAddressForm = connect()(DiscoverAddressForm);

export default DiscoverAddressForm;

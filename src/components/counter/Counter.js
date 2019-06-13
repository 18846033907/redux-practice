import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Counter = ({ AddNumber, DeNumber, counter }) => (
  <div>
    <Button
      onClick={() => {
        AddNumber();
      }}>
      +
    </Button>
    <Button
      onClick={() => {
        DeNumber();
      }}>
      -
    </Button>
    <TextField value={counter} />
  </div>
);

Counter.propTypes = {
  AddNumber: PropTypes.func.isRequired,
  DeNumber: PropTypes.func.isRequired,
};

export default Counter;

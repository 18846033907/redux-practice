import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <TextField
        onChange={(e) => {
          input = e.target.value;
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (!input.trim()) {
            return;
          }
          dispatch(addTodo(input));
          input = '';
        }}>
        Add Todo
      </Button>
    </div>
  );
};

export default connect()(AddTodo);

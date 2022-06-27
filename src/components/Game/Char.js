import React from 'react';
import * as style from '../../style';
import {Button, Typography} from '@mui/material';

const Char = ({char, callback, good, bad}) => {
  return (
      <Button
          color={(good) ? 'success' : (bad) ? 'error' : 'primary'}
          key={char} onClick={callback}
          variant="contained"
          sx={style.charButton}><Typography
          variant="h5">{char}</Typography></Button>);
};

export default Char;

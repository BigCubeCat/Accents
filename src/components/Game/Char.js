import React from 'react';
import * as style from '../../style';
import {Button, Typography} from '@mui/material';

const Char = ({char, callback}) => {
  return (
      <Button variant="contained" key={char} onClick={callback}
              sx={style.charButton}><Typography variant="h5">{char}</Typography></Button>);
};

export default Char;

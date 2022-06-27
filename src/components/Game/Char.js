import React, {useEffect, useState} from 'react';
import * as style from '../../style';
import {Button, Typography} from '@mui/material';

const Char = ({char, callback, good, bad}) => {
  return (
      <Button
          color={(good) ? 'success' : (bad) ? 'error' : 'primary'}
          key={char} onClick={callback}
          variant="contained"
          sx={{margin: 0}}>
        <Typography variant='h6'>
          {char}
        </Typography>
      </Button>);
};

export default Char;

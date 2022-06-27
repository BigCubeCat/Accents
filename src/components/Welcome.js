import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import * as style from '../style';
import {useDispatch} from 'react-redux';
import {setReduxState, WINDOWS} from '../store/actions';
import {getRandomList} from '../data/data';
import {centeredContainer} from '../style';

export default function Welcome() {
  const dispatch = useDispatch();
  const handleClick = value => {
    let {words, rights} = getRandomList(value);
    const newState = {
      windowId: WINDOWS.PLAY,
      words: words,
      rights: rights,
      user: [],
    };
    dispatch(setReduxState(newState));
  };
  return (
      <Box >
        <Button variant="contained" onClick={() => handleClick(10)}
                style={style.roundedButton}>
          <Typography variant="h6">10 слов</Typography>
        </Button>
        <Button variant="contained" onClick={() => handleClick(20)}
                style={style.roundedButton}>
          <Typography variant="h6">20 слов</Typography>
        </Button>
        <Button variant="contained" onClick={() => handleClick(50)}
                style={style.roundedButton}>
          <Typography variant="h6">50 слов</Typography>
        </Button>
      </Box>
  );
};

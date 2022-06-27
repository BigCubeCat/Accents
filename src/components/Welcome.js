import React from 'react';
import {Button, Typography} from '@mui/material';
import * as style from '../style';
import {useDispatch, useSelector} from 'react-redux';
import {setReduxState, setWindowId, setWords, WINDOWS} from '../store/actions';
import {getRandomList} from '../data/data';

export default function Welcome() {
  const dispatch = useDispatch();
  const handleClick = value => {
    let {words, rights} = getRandomList(value);
    const newState = {
      windowId: WINDOWS.PLAY,
      words: words,
      rights: rights,
      user: [],
    }
    dispatch(setReduxState(newState));
  }
  return (
      <div style={{
        backgroundColor: "#aa21ff",
        width: '70%',
        minHeight: 100,
        padding: 5,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
          <Button variant="contained" onClick={() => handleClick(10)} style={style.roundedButton}>
            <Typography variant="h6">10 слов</Typography>
          </Button>
          <Button variant="contained" onClick={() => handleClick(20)} style={style.roundedButton}>
            <Typography variant="h6">20 слов</Typography>
          </Button>
          <Button variant="contained" onClick={() => handleClick(50)} style={style.roundedButton}>
            <Typography variant="h6">50 слов</Typography>
          </Button>
      </div>
  );
};

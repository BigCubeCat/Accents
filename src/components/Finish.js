import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  CircularProgress,
  Typography,
  Paper,
  Button,
  Box,
  ButtonGroup,
} from '@mui/material';
import * as style from '../style';
import Char from './Game/Char';
import {setWindowId, WINDOWS} from '../store/actions';

function Word(word, good, bad) {
  let chars = word.split('');
  return <ButtonGroup style={style.word}>{chars.map(
      (char, i) => <Char char={char} callback={() => {
      }} good={i === good} bad={i === bad}/>)}</ButtonGroup>;
}

export default function Finish() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const rightCount = store.user.reduce((a, b) => a + b.result, 0);
  const percent = Math.floor(rightCount / store.words.length * 100);
  let words = [];
  console.log(store.user);
  for (let i = 0; i < store.words.length; ++i) {
    words.push(Word(store.words[i], store.rights[i], store.user[i].answer));
  }
  return (
      <Box sx={{
        width: '100%',
        height: '100%',
      }}>
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20%'}}>
          <CircularProgress variant="determinate" size={200} value={percent}/>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="h5">
            Правильных ответов: {rightCount} из {store.words.length} ({percent}%)
          </Typography>
        </Box>
        <Paper sx={{marginTop: "20%"}} elevation={0}>
          {words}
        </Paper>
        <Button
            variant="contained" style={style.bigBottomButton}
            onClick={() => dispatch(
                setWindowId(WINDOWS.START))}>Заново</Button>
      </Box>
  );

}
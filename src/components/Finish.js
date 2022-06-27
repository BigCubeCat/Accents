import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircularProgress, Typography, Paper} from '@mui/material';
import * as style from '../style';
import Char from './Game/Char';

function Word(word, good, bad) {
  let chars = word.split('');
  return <div style={style.word}>{chars.map(
      (char, i) => <Char char={char} callback={() => {
      }} good={i === good} bad={i === bad}/>)}</div>;
}

export default function Finish() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const rightCount = store.user.reduce((a, b) => a + b.result, 0);
  const percent = Math.floor(rightCount / store.words.length * 100);
  let words = [];
  console.log(store.user)
  for (let i = 0; i < store.words.length; ++i) {
    words.push(Word(store.words[i], store.rights[i], store.user[i].answer))
  }
  return (
      <div style={style.finishContainer}>
        <CircularProgress variant="determinate" size={100} value={percent}/>
        <Typography variant="h6">
          Правильных ответов: {rightCount} из {store.words.length} ({percent}%)
        </Typography>
        <Paper elevation={0}>
          {words}
        </Paper>
      </div>
  );

}
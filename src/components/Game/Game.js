import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as style from '../../style';
import {setAnswer, setWindowId, WINDOWS} from '../../store/actions';
import Char from './Char';
import {Box, ButtonGroup} from '@mui/material';

export default function Game() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const [currentWord, setCurrentWord] = useState(0);

  const handleClick = index => {

    setCurrentWord(currentWord + 1);
    dispatch(setAnswer({
      answer: index,
      result: (store.rights[currentWord] === index) ? 1 : 0,
    }));// Add one true answer
    if (currentWord + 1 === store.words.length) {
      dispatch(setWindowId(WINDOWS.FINISH)); // Завершаем игру
    }
  };
  const chars = store.words[currentWord].split('');
  return (
      <Box sx={{width: '100%', height: '70%'}}>
        <ButtonGroup>
          {chars.map(
              (char, i) => <Char char={char} callback={() => handleClick(i)}/>)}
        </ButtonGroup>
      </Box>
  );
};
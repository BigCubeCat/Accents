import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as style from '../../style';
import {setAnswer, setWindowId, WINDOWS} from '../../store/actions';
import Char from './Char';

export default function Game() {
  const store = useSelector(state => state);
  console.log(store);
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
      <div style={style.wordContainer}>
        {chars.map(
            (char, i) => <Char char={char} callback={() => handleClick(i)}/>)}
      </div>
  );
};
export const WINDOWS = {
  START: 0,
  PLAY: 1,
  FINISH: 2
}

export const actionTypes = {
  setWindowId: 0,
  setWords: 1,
  setAnswer: 2,
  setState: 3
};

export const setWindowId = id => ({
  type: actionTypes.setWindowId,
  payload: id,
});
export const setAnswer = (answer) => ({
  type: actionTypes.setAnswer,
  payload: answer,
});
export const setWords = (words, right) => ({
  type: actionTypes.setWords,
  payload: {words: words, right: right},
});

export const setReduxState = state => {
  console.log(state);
  return {
    type: actionTypes.setState,
    payload: state,
  }
}
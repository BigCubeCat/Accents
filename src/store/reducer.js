import {actionTypes} from './actions';

const defaultState = {
  windowId: 0,
  words: [],
  right: [],
  user: [],
}
export default function reducer(state=defaultState, action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.setWindowId:
      return {...state, windowId: action.payload};
    case actionTypes.setAnswer:
      state.user.push(action.payload);
      return state
    case actionTypes.setWords:
      return {
        windowId: state.windowId,
        right: action.payload.right,
        words: action.payload.words,
        user: [],
      }
    case actionTypes.setState:
      console.log(action.payload.state)
      return action.payload;
    default:
      return state;
  }
}
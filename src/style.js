export const roundedButton = {
  width: 90,
  height: 90,
  borderRadius: '100%',
  margin: 10,
};

export const word = {
  display: 'flex',
  justifyContent: 'start',
  marginTop: 10,
};

export const bigBottomButton = {
  marginTop: '10%',
  position: 'relative',
  width: '100%',
  bottom: 0
};

export const centeredContainer = {
  width: '70%',
  minHeight: 100,
  padding: 5,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export const wordContainer = {...centeredContainer, justifyContent: 'center'};
export const finishContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'absolute',
  left: '50%'
};

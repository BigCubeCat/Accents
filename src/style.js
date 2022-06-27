export const roundedButton = {
  width: 90,
  height: 90,
  borderRadius: '100%',
  marginLeft: 10,
  marginRight: 10,
};

export const charButton = {
  margin: 1,
};

export const word = {
  display: 'flex',
  justifyContent: 'start',
  marginTop: 10,
};

export const bigBottomButton = {
  position: 'relative',
  width: '100%',
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

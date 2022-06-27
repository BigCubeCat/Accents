export const roundedButton = {
  width: 90,
  height: 90,
  borderRadius: '100%',
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
}

export const centeredContainer = {
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
};

export const wordContainer = {...centeredContainer, justifyContent: 'center'};
export const finishContainer = {
  ...centeredContainer,
  flexDirection: 'column',
  justifyContent: 'space-around',
};

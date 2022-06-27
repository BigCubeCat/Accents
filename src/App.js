import React, {useState} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Welcome from './components/Welcome';
import {Box, createTheme, ThemeProvider} from '@mui/material';
import Header from './components/Header';
import {WINDOWS} from './store/actions';
import Game from './components/Game/Game';
import store from './store/store';
import Finish from './components/Finish';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d3a3a',
    },
    secondary: {
      main: '#434343',
    },
  },
});

function App() {
  const reduxState = useSelector(state => state);
  let mainWidget;
  switch (reduxState.windowId) {
    case WINDOWS.START:
      mainWidget = <Welcome/>;
      break;
    case WINDOWS.PLAY:
      mainWidget = <Game/>;
      break;
    case WINDOWS.FINISH:
      mainWidget = <Finish/>;
      break;
    default:
      mainWidget = <Welcome/>;
      break;
  }
  return (
      <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex'}}>
          <Header/>
          <Box component="main" sx={{p: 3}}>
            {mainWidget}
          </Box>
        </Box>
      </ThemeProvider>
  );
}

export default App;

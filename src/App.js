import React, {useState } from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Welcome from './components/Welcome';
import {createTheme, ThemeProvider} from '@mui/material';
import Header from './components/Header';
import {WINDOWS} from './store/actions';
import Game from './components/Game/Game';
import store from './store/store';

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
      mainWidget = <h1>FINISH</h1>;
      break;
    default:
      mainWidget = <div></div>;
      break;
  }
  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header/>
          <div className="Container" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
            {mainWidget}
          </div>
        </ThemeProvider>
      </div>
  );
}

export default App;

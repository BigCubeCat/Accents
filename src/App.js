import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Welcome from './components/Welcome';
import {
  createTheme, CssBaseline, Grid,
  ThemeProvider,
} from '@mui/material';
import Header from './components/Header';
import {WINDOWS} from './store/actions';
import Game from './components/Game/Game';
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
        <React.Fragment>
          <CssBaseline/>
          <Header/>
          <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}
          >

            <Grid item xs={3}>
              {mainWidget}
            </Grid>

          </Grid>
        </React.Fragment>
      </ThemeProvider>
  );
}

export default App;

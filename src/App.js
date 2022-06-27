import './App.css';
import {useSelector} from 'react-redux';
import Welcome from './components/Welcome';
import {createTheme, ThemeProvider} from '@mui/material';
import Header from './components/Header';

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
  console.log(reduxState);
  let mainWidget;
  switch (reduxState.windowId) {
    case 0:
      mainWidget = <Welcome/>;
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
            marginTop: '5%'
          }}>
            {mainWidget}
          </div>
        </ThemeProvider>
      </div>
  );
}

export default App;

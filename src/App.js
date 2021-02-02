import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import {blue, grey} from "@material-ui/core/colors";
import {ThemeProvider, createMuiTheme, colors, CssBaseline} from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette: {
      type:  'dark',
      primary: {
        main: blue[300],
      },
      secondary: {
        main: grey[300],
      },
    },
  })

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
    </ThemeProvider>
    </>
  );
}

export default App;

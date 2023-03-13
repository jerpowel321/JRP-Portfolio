import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Portfolio} />
      </Router>
    </ThemeProvider>
  );
  }
export default App
  
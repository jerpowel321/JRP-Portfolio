import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about"
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
        <Route exact path="/about" component={About} />
      </Router>
    </ThemeProvider>
  );
  }
  export default App
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from '../node_modules/react-tap-event-plugin';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../node_modules/material-ui/styles/getMuiTheme';

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <App />
</MuiThemeProvider>
), document.getElementById('root'));

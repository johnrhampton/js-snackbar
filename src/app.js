import React from 'react';
import {render} from 'react-dom';

import App from './local/App';

// Stylesheets
require('./assets/styles/snackbar.sass');

if (document.getElementById('snackbar-local')) {
  render(<App />, document.getElementById('snackbar-local'));
}

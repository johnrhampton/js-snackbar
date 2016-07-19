import React from 'react';
import {render} from 'react-dom';

import App from './local/App';

if (document.getElementById('snackbar-local')) {
  render(<App />, document.getElementById('snackbar-local'));
}

import React from 'react';
import {render} from 'react-dom';

import StartScreen from './StartScreen';

if (document.getElementById('snackbar-local')) {
  render(<StartScreen />, document.getElementById('snackbar-local'));
}

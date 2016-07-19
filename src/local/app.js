import React from 'react';
import {render} from 'react-dom';

// Images and icons
require.context('../assets/images', true, /.*/);

import StartScreen from './StartScreen';

if (document.getElementById('snackbar-local')) {
  render(<StartScreen />, document.getElementById('snackbar-local'));
}

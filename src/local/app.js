import React from 'react';
import ReactDOM from 'react-dom';

import StartScreen from './StartScreen';

if (document.getElementById('local-root')) {
  ReactDOM.render(<StartScreen />, document.getElementById('local-root'));
}

# js-snackbar

Custom SnackBar notifications inspired by Material Design and [node-snackbar](https://github.com/polonel/SnackBar)

## Installation
```
npm install js-snackbar
```

## Usage
```javascript
import {show} from 'js-snackbar';

show({pos: 'bottom-right'});
```

## Run Locally

Global Dependencies:
```
npm install -g npm3
 
npm3 install -g webpack webpack-dev-server
```

Fire up the local server @ http://localhost:8080
```
npm3 run dev
```

Build ouput in the `dist` folder
```
npm3 run dist
```

## Inspiration
This repo was lovingly forked and hacked from the awesome [node-snackbar](https://github.com/polonel/SnackBar)

A few of the changes:
- Ability to use an action icon button
- Ability to display a notify icon
- Ability to display a notify image
- Local React hacking environment
- ES6 modules
- Module bundling with Webpack and Babel
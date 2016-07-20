# js-snackbar

Custom SnackBar notifications inspired by Material Design and [node-snackbar](https://github.com/polonel/SnackBar)

## Installation
```
npm install js-snackbar
```

## Usage
```javascript
// require css for your app's bundle process
require('../node_modules/js-snackbar/dist/snackbar.css');

import {show} from 'js-snackbar';

show({pos: 'bottom-right'});
```

## Requirements
In order to display the _notify icons_ and _icon close button_, we rely on Material Design icons and fonts as well as Material Design Lite stylesheets.
 
If your project is not already referencing these, you can add the following to the `<head>` section of your `index.html` file.

```javascript
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
```

Please note these are only required to use `notifyIcon = 'some_md_icon'` and `actionType = 'CLOSE'`

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
# js-snackbar

Custom SnackBar notifications inspired by Material Design and [node-snackbar](https://github.com/polonel/SnackBar)

## Installation

`$ npm install js-snackbar -P`

## Usage

```javascript
import 'js-snackbar/snackbar.css';
import { show, ACTION_TYPE } from 'js-snackbar';

// basic example
show({ text: 'My Message' });

// add a custom class to override styles, use the icon close button, display a face notify icon
show({
  text: 'Some Custom Text!',
  pos: 'top-right',
  customClass: 'custom-class',
  notifyIcon: 'face',
  actionType: ACTION_TYPE.CLOSE,
});

// override background
show({ text: 'Custom Error Message!', backgroundColor: '#F44336' });

// override onActionClick
show({
  text: 'Override!',
  actionType: ACTION_TYPE.TEXT,
  onActionClick: element => {
    element.style.opacity = 0;
    console.log('dang!');
  },
});
```

Find additional examples in [src/App.js](https://github.com/johnrhampton/js-snackbar/blob/master/src/App.js)

## Requirements

In order to display the _notify icons_ and _icon close button_, we rely on Material Design icons, Google fonts, and Material Design Lite stylesheets.

If your project is not already referencing these, you can add the following to the `<head>` section of your `index.html` file.

```javascript
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
```

Please note these are only required to use `notifyIcon = 'some_md_icon'` and `actionType = ACTION_TYPE.CLOSE`

## Configuration

The following attributes can be customized

```javascript
{
  // The SnackBar message to display
  text: 'Default Text',

  // Color of the SnackBar text
  textColor: '#ffffff',

  // The SnackBar container width
  width: 'auto',

  /**
   * The type of action button
   *  NONE: no button TEXT: text button CLOSE: close icon button
   */
  actionType: ACTION_TYPE.NONE,

  // Sets the button text when ACTION_TYPE.TEXT
  actionText: 'Dismiss',

  // Color of the action text
  actionTextColor: '#ffffff',

  // SnackBar background color
  backgroundColor: '#323232',

  /**
   * SnackBar display position
   *   'bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'
   */
  pos: 'bottom-right',

  // milliseconds to display the SnackBar
  duration: 5000,

  // pause and restart duration after mouse hover
  pauseOnHover: false,

  // Class to apply to the SnackBar - this can be used to override all styles
  customClass: '',

  // Material Design icon to display to the left of the SnackBar text
  notifyIcon: null,

  // Url of an image to display to the left of the SnackBar text (beta)
  imgSrc: null,

  // Invoked when the SnackBar action button is clicked
  onActionClick: (element) => {
    element.style.opacity = 0;
  },

  // Invoked when the SnackBar itself is clicked
  onSnackbarClick: (element) => {
    element.style.opacity = 0;
  },

  // Invoked when the SnackBar closed via timing out
  onTimeout: (element) => {
    alert('Snackbar closed due to timeout!');
  },
}
```

## Run Locally

start local server @ http://localhost:8080. The start script copies the `index.js` file to `src/snackbar.js`.

`$ npm start`

Build updated css

`$ npm run build-css`

## Inspiration

This repo was lovingly forked and hacked from the awesome [node-snackbar](https://github.com/polonel/SnackBar)

A few of the changes:

- Ability to use an action icon button
- Ability to display a notify icon
- Ability to display a notify image
- Local React hacking environment

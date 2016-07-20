import {ACTION_TYPE, SNACKBAR, INNER_ELEMENT, NOTIFY_ICON_OVERRIDES} from './defaults';
import {extend} from './extend';

/**
 * functions to export
 */
export {show, hide};

/**
 * define Snackbar object
 */
let Snackbar = {current: null};

/**
 * hide current snackbar
 */
function hide() {
  if (Snackbar.current) {
    Snackbar.current.style.opacity = 0;
  }
}

/**
 * show current snackbar
 */
function show($options) {
  var options = extend(true, SNACKBAR, $options);

  var second_options = Object.assign(SNACKBAR, $options);

  // remove current snackbar
  if (Snackbar.current) {
    Snackbar.current.style.opacity = 0;
    setTimeout(removeCurrent.bind(Snackbar.current), 500);
  }

  // build snackbar container
  buildContainerElement(options);

  // build inner snackbar element
  buildInnerElement(options);

  // conditionally add action button
  addActionButton(options);

  // hide current - delayed by options.duration
  setTimeout(handleHideCurrent.bind(Snackbar.snackbar), options.duration);

  // add transition end handler
  Snackbar.snackbar.addEventListener('transitionend', handleTransitioned.bind(Snackbar.snackbar));

  // set current snackbar
  Snackbar.current = Snackbar.snackbar;

  // adjust style prior to appending to body
  preStyleAdjust(options);

  // append to body, set opacity and class
  displaySnackbar(options);

  // adjust style after appending to body
  postStyleAdjust(options);
}

/**
 *
 * helper functions
 *
 */

/**
 * conditionally add an action button
 */
function addActionButton(options) {
  switch (options.actionType) {
    case ACTION_TYPE.TEXT:
      return appendTextButton(options);
    case ACTION_TYPE.CLOSE:
      return appendCloseButton(options);
    case ACTION_TYPE.NONE:
      break;
  }
}

/**
 * add text action button
 */
function appendTextButton(options) {
  let actionButton = document.createElement('button');
  actionButton.className = 'action';
  actionButton.innerHTML = options.actionText;
  actionButton.style.color = options.actionTextColor;

  actionButton.addEventListener('click', () => {
    options.onActionClick(Snackbar.snackbar);
  });

  Snackbar.snackbar.appendChild(actionButton);
}

/**
 * add icon action button
 */
function appendCloseButton(options) {
  let closeButton = document.createElement('button');
  closeButton.className = 'mdl-button mdl-js-button mdl-button--icon snackbar-close-button';

  let $icon = document.createElement('i');
  $icon.className = 'material-icons';
  $icon.innerHTML = 'close';
  closeButton.appendChild($icon);

  closeButton.addEventListener('click', () => {
    options.onActionClick(Snackbar.snackbar);
  });

  Snackbar.snackbar.appendChild(closeButton);
}

/**
 * build Snackbar container element
 */
function buildContainerElement(options) {
  Snackbar.snackbar = document.createElement('div');
  Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;
  Snackbar.snackbar.style.width = options.width;
}

/**
 * build Snackbar inner element
 */
function buildInnerElement(options) {
  var $p = document.createElement('p');
  $p.style.margin = INNER_ELEMENT.margin;
  $p.style.padding = INNER_ELEMENT.padding;
  $p.style.color = options.textColor;
  $p.style.fontSize = INNER_ELEMENT.fontSize;
  $p.style.fontWeight = INNER_ELEMENT.fontWeight;
  $p.style.lineHeight = INNER_ELEMENT.lineHeight;
  $p.innerHTML = options.text;

  // should we add notify icon
  options.notifyIcon && !options.imgSrc && addNotifyIcon($p, options);

  // should we add an image
  options.imgSrc && addNotifyImage($p, options);

  Snackbar.snackbar.appendChild($p);
  Snackbar.snackbar.style.background = options.backgroundColor;
}

/**
 * add notify icon to inner element, override defaults
 */
function addNotifyIcon($element, options) {
  let $icon = document.createElement('i');
  $icon.className = 'material-icons snackbar-icon';
  $icon.innerHTML = options.notifyIcon;
  Snackbar.snackbar.appendChild($icon);

  // override inner element style
  $element.style.fontSize = NOTIFY_ICON_OVERRIDES.fontSize;
  $element.style.fontWeight = NOTIFY_ICON_OVERRIDES.fontWeight;
  $element.style.lineHeight = NOTIFY_ICON_OVERRIDES.lineHeight;
}

/**
 * add notify image to inner element, override defaults
 */
function addNotifyImage($element, options) {
  let $image = document.createElement('img');
  $image.src = options.imgSrc;
  $image.className = 'snackbar-icon';
  Snackbar.snackbar.appendChild($image);

  // override inner element style
  $element.style.fontSize = NOTIFY_ICON_OVERRIDES.fontSize;
  $element.style.fontWeight = NOTIFY_ICON_OVERRIDES.fontWeight;
  $element.style.lineHeight = NOTIFY_ICON_OVERRIDES.lineHeight;
}

/**
 * append to body, set opacity to 1, set classes
 */
function displaySnackbar(options) {
  document.body.appendChild(Snackbar.snackbar);

  /**
   * gives the values of all the CSS properties of an element after applying the active
   * stylesheets and resolving any basic computation those values may contain
   */
  var $bottom = getComputedStyle(Snackbar.snackbar).bottom;
  var $top = getComputedStyle(Snackbar.snackbar).top;

  Snackbar.snackbar.style.opacity = 1;
  Snackbar.snackbar.className = 'snackbar-container ' + options.customClass + ' snackbar-pos ' + options.pos;
}

/**
 * transitioned callback
 */
function handleTransitioned(event, elapsed) {
  if (event.propertyName === 'opacity' && this.style.opacity === '0') {
    this.parentElement.removeChild(this);

    if (Snackbar.current === this) {
      Snackbar.current = null;
    }
  }
}

/**
 * hide current snackbar - invoked after options.duration
 */
function handleHideCurrent() {
  if (Snackbar.current === this) {
    Snackbar.current.style.opacity = 0;
  }
}

/**
 * adjust style prior to appending to body
 */
function preStyleAdjust(options) {
  if (options.pos.includes('top')) {
    Snackbar.snackbar.style.top = '-100px';
  }
}

/**
 * adjust style after appending to body
 */
function postStyleAdjust(options) {
  switch (options.pos) {
    case 'top-left':
    case 'top-right':
      Snackbar.snackbar.style.top = 0;
      break;
    case 'top':
    case 'top-center':
      Snackbar.snackbar.style.top = '39px';
      break;
    case 'bottom':
    case 'bottom-center':
      Snackbar.snackbar.style.bottom = '-39px';
      break;
  }
}

/**
 * removes the current snackbar
 */
function removeCurrent() {
  let $parent = this.parentElement;
  $parent && $parent.removeChild(this);
}

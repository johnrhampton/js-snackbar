// snackbar button action types
const ACTION_TYPE = {
  TEXT: 'TEXT',
  CLOSE: 'CLOSE',
  NONE: 'NONE',
};

// snackbar inner element styles
const INNER_ELEMENT = {
  margin: 0,
  padding: 0,
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '1em',
};

/**
 * Event handler for action button clicks
 * @param  {object} element - Snackbar HTML element
 * @return {void}
 */
function actionClickHandler(element) {
  // eslint-disable-next-line no-param-reassign
  element.style.opacity = 0;
}

// snackbar default options
const SNACKBAR = {
  text: 'Default Text',
  textColor: '#ffffff',
  width: 'auto',
  actionType: ACTION_TYPE.NONE,
  actionText: 'Dismiss',
  actionTextColor: '#ffffff',
  backgroundColor: '#323232',
  pos: 'bottom-right',
  duration: 5000,
  customClass: '',
  notifyIcon: null,
  imgSrc: null,
  onActionClick: actionClickHandler,
};

// define Snackbar object
const Snackbar = { current: null };

/**
 * Hides the snackbar
 * @return {void}
 */
function hide() {
  if (Snackbar.current) {
    Snackbar.current.style.opacity = 0;
  }
}

/**
 * Removes the snackbar from the parent element
 * @return {void}
 */
function removeCurrent() {
  if (this.parentElement) {
    this.parentElement.removeChild(this);
  }
}

/**
 * Add notify icon to the inner element, override defaults
 * @param  {object} options - Custom options
 * @return {void}
 */
function addNotifyIcon(options) {
  if (options.notifyIcon && !options.imgSrc) {
    const icon = document.createElement('i');
    icon.className = 'material-icons snackbar-icon';
    icon.innerHTML = options.notifyIcon;
    Snackbar.snackbar.appendChild(icon);
  }
}

/**
 * Add notify image to inner element, override defaults
 * @param  {object} options - Custom options
 * @return {void}
 */
function addNotifyImage(options) {
  if (options.imgSrc) {
    const image = document.createElement('img');
    image.src = options.imgSrc;
    image.className = 'snackbar-icon';
    Snackbar.snackbar.appendChild(image);
  }
}

/**
 * Builds the snackbar container element
 * @param  {object} options - Custom options
 * @return {void}
 */
function buildContainerElement(options) {
  Snackbar.snackbar = document.createElement('div');
  Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;
  Snackbar.snackbar.style.width = options.width;

  // snackbar click event handler
  function snackbarClickHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    options.onSnackbarClick(e);
  }

  // timeout event handler
  function timeoutHandler() {
    options.onTimeout();
  }

  if (typeof options.onSnackbarClick === 'function') {
    Snackbar.snackbar.className += ' has-snackbar-action';
    Snackbar.snackbar.addEventListener('click', snackbarClickHandler);
  }

  if (typeof options.onTimeout === 'function') {
    Snackbar.snackbar.addEventListener('timeout', timeoutHandler);
  }
}

/**
 * Build snackbar inner element
 * @param  {object} options - Custom options
 * @return {void}
 */
function buildInnerElement(options) {
  const p = document.createElement('p');
  p.style.margin = INNER_ELEMENT.margin;
  p.style.padding = INNER_ELEMENT.padding;
  p.style.color = options.textColor;
  p.style.fontSize = INNER_ELEMENT.fontSize;
  p.style.fontWeight = INNER_ELEMENT.fontWeight;
  p.style.lineHeight = INNER_ELEMENT.lineHeight;
  p.innerHTML = options.text;

  // potentially add notify icon
  addNotifyIcon(options);

  // potentially add image
  addNotifyImage(options);

  Snackbar.snackbar.appendChild(p);
  Snackbar.snackbar.style.background = options.backgroundColor;
}

/**
 * Add text action button
 * @param  {object} options - Custom options
 * @return {void}
 */
function appendTextButton(options) {
  const actionButton = document.createElement('button');
  actionButton.className = 'action';
  actionButton.innerHTML = options.actionText;
  actionButton.style.color = options.actionTextColor;

  // action button click event handler
  function textButtonClickHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    options.onActionClick(Snackbar.snackbar);
  }

  actionButton.addEventListener('click', textButtonClickHandler);

  Snackbar.snackbar.appendChild(actionButton);
}

/**
 * Add icon action button
 * @param  {object} options - Custom options
 * @return {void}
 */
function appendCloseButton(options) {
  const closeButton = document.createElement('button');
  closeButton.className = 'mdl-button mdl-js-button mdl-button--icon snackbar-close-button';

  const icon = document.createElement('i');
  icon.className = 'material-icons';
  icon.innerHTML = 'close';
  closeButton.appendChild(icon);

  // icon button click event handler
  function iconButtonClickHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    options.onActionClick(Snackbar.snackbar);
  }

  closeButton.addEventListener('click', iconButtonClickHandler);

  Snackbar.snackbar.appendChild(closeButton);
}

/**
 * Conditionally add an action button
 * @param  {object} options - Custom options
 * @return {void}
 */
function addActionButton(options) {
  switch (options.actionType) {
    case ACTION_TYPE.TEXT:
      return appendTextButton(options);
    case ACTION_TYPE.CLOSE:
      return appendCloseButton(options);
    default:
      return null;
  }
}

/**
 * Run method at end of duration BUT allow mouseover to reset timeout
 * @param  {function} method  - Function to invoke on duration end
 * @param  {object} element   - Snackbar HTML element
 * @param  {object} options   - Custom options
 * @return {void}
 */
function delayWithHoverPause(method, element, options) {
  var timeoutId; // eslint-disable-line no-var

  // start delayed function call
  timeoutId = setTimeout(method, options.duration);

  // mouse over event handler
  function mouseOverHandler() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  // mouse out event handler
  function mouseOutEventHanlder() {
    timeoutId = setTimeout(method, options.duration);
  }

  if (options.pauseOnHover) {
    element.addEventListener('mouseover', mouseOverHandler);
    element.addEventListener('mouseout', mouseOutEventHanlder);
  }
}

/**
 * Appends the snackbar to the body, sets opacity to 1, sets class names
 * @param  {object} options - Custom options
 * @return {void}
 */
function displaySnackbar(options) {
  document.body.appendChild(Snackbar.snackbar);

  // gives the values of all the CSS properties of an element after applying the active
  // stylesheets and resolving any basic computation those values may contain
  // eslint-disable-next-line no-unused-vars
  const $bottom = getComputedStyle(Snackbar.snackbar).bottom;
  // eslint-disable-next-line no-unused-vars
  const $top = getComputedStyle(Snackbar.snackbar).top;

  Snackbar.snackbar.style.opacity = 1;
  Snackbar.snackbar.className += ' snackbar-pos ' + options.pos;
}

/**
 * Hides the current snackbar, invoked after options.duration
 * @return {void}
 */
function handleHideCurrent() {
  if (Snackbar.current === this) {
    Snackbar.current.style.opacity = 0;
    Snackbar.current.dispatchEvent(new Event('timeout'));
  }
}

/**
 * Handles transition events
 * @param  {object} event - Raised event
 * @return {void}
 */
function handleTransitioned(event) {
  if (event.propertyName === 'opacity' && this.style.opacity === '0') {
    this.parentElement.removeChild(this);

    if (Snackbar.current === this) {
      Snackbar.current = null;
    }
  }
}

/**
 * Adjust styles prior to appending to body
 * @param  {object} options - Custom options
 * @return {void}
 */
function preStyleAdjust(options) {
  if (options.pos.includes('top')) {
    Snackbar.snackbar.style.top = '-100px';
  }
}

/**
 * Adjust style after appending to body
 * @param  {object} options - Custom options
 * @return {void}
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
    default:
      break;
  }
}

/**
 * Shows the snackbar by appending to the DOM
 * @param  {object} customOptions - Options to apply to this snackbar
 * @return {void}
 */
function show(customOptions) {
  const options = Object.assign({}, SNACKBAR, customOptions);

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
  delayWithHoverPause(handleHideCurrent.bind(Snackbar.snackbar), Snackbar.snackbar, options);

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

export { show, hide, ACTION_TYPE };

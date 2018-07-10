const ACTION_TYPE = {
  TEXT: 'TEXT',
  CLOSE: 'CLOSE',
  NONE: 'NONE',
};

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
  onActionClick: element => {
    element.style.opacity = 0;
  },
};

const INNER_ELEMENT = {
  margin: 0,
  padding: 0,
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '1em',
};

const Snackbar = { current: null };

/**
 * Hides a description
 */
function hide() {
  if (Snackbar.current) {
    Snackbar.current.style.opacity = 0;
  }
}

/**
 * Shows the snackbar
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
  delayWithHoverPaws(handleHideCurrent.bind(Snackbar.snackbar), Snackbar.snackbar, options);

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
 * Run method at end of duration BUT allow mouseover to reset timeout
 */
function delayWithHoverPaws(method, element, options) {
  let timeoutID;

  // start delayed function call
  timeoutID = setTimeout(method, options.duration);

  if (options.pauseOnHover) {
    element.addEventListener('mouseover', () => {
      clearTimeout(timeoutID);
      timeoutID = null;
    });

    element.addEventListener('mouseout', () => {
      timeoutID = setTimeout(method, options.duration);
    });
  }
}

/**
 * conditionally add an action button
 */
function addActionButton(options) {
  switch (options.actionType) {
    case ACTION_TYPE.TEXT:
      return appendTextButton(options);
    case ACTION_TYPE.CLOSE:
      return appendCloseButton(options);
    default:
      break;
  }
}

/**
 * add text action button
 */
function appendTextButton(options) {
  const actionButton = document.createElement('button');
  actionButton.className = 'action';
  actionButton.innerHTML = options.actionText;
  actionButton.style.color = options.actionTextColor;

  actionButton.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    options.onActionClick(Snackbar.snackbar);
  });

  Snackbar.snackbar.appendChild(actionButton);
}

/**
 * add icon action button
 */
function appendCloseButton(options) {
  const closeButton = document.createElement('button');
  closeButton.className = 'mdl-button mdl-js-button mdl-button--icon snackbar-close-button';

  const icon = document.createElement('i');
  icon.className = 'material-icons';
  icon.innerHTML = 'close';
  closeButton.appendChild(icon);

  closeButton.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    options.onActionClick(Snackbar.snackbar);
  });

  Snackbar.snackbar.appendChild(closeButton);
}

/**
 * build Snackbar container element
 */
function buildContainerElement(options) {
  Snackbar.snackbar = document.createElement('div');
  Snackbar.snackbar.className = `snackbar-container ${options.customClass}`;
  Snackbar.snackbar.style.width = options.width;

  if (typeof options.onSnackbarClick === 'function') {
    Snackbar.snackbar.className += ' has-snackbar-action';
    Snackbar.snackbar.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      options.onSnackbarClick(e);
    });
  }

  if (typeof options.onTimeout === 'function') {
    Snackbar.snackbar.addEventListener('timeout', () => {
      options.onTimeout();
    });
  }
}

/**
 * build Snackbar inner element
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

  // should we add notify icon
  addNotifyIcon(options);

  // should we add an image
  addNotifyImage(options);

  Snackbar.snackbar.appendChild(p);
  Snackbar.snackbar.style.background = options.backgroundColor;
}

/**
 * add notify icon to inner element, override defaults
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
 * add notify image to inner element, override defaults
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
 * append to body, set opacity to 1, set classes
 */
function displaySnackbar(options) {
  document.body.appendChild(Snackbar.snackbar);

  /**
   * gives the values of all the CSS properties of an element after applying the active
   * stylesheets and resolving any basic computation those values may contain
   */

  const $bottom = getComputedStyle(Snackbar.snackbar).bottom;
  const $top = getComputedStyle(Snackbar.snackbar).top;

  Snackbar.snackbar.style.opacity = 1;
  Snackbar.snackbar.className += ` snackbar-pos ${options.pos}`;
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

    Snackbar.current.dispatchEvent(new Event('timeout'));
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
    default:
      break;
  }
}

/**
 * removes the current snackbar
 */
function removeCurrent() {
  if (this.parentElement) {
    this.parentElement.removeChild(this);
  }
}

export { show, hide, ACTION_TYPE };

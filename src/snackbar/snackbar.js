/*!
 * Snackbar v0.1.5
 * http://polonel.com/Snackbar
 *
 * Copyright 2016 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */

import {extend} from './extend';
import {SNACKBAR, INNER_ELEMENT} from './defaults';

const Snackbar = () => {

  let Snackbar = {
    current: null
  };

  const $defaults = SNACKBAR;

  /**
   * public show function
   */
  Snackbar.show = function($options) {
    var options = extend(true, $defaults, $options);

    if (Snackbar.current) {
      Snackbar.current.style.opacity = 0;

      setTimeout(function() {
        var $parent = this.parentElement;

        // possible null if too many/fast Snackbars
        if ($parent) {
          $parent.removeChild(this);
        }
      }.bind(Snackbar.current), 500);
    }

    // build Snackbar container
    buildSnackbarContainer.call(this, options);

    // build Snackbar inner element
    buildInnerElement.call(this, options);

    // conditionally add action button
    addActionButton.call(this, options);

    // add timeout for duration
    setTimeout(function() {
      if (Snackbar.current === this) {
        Snackbar.current.style.opacity = 0;
      }
    }.bind(Snackbar.snackbar), options.duration);

    // add transitioned event handler
    Snackbar.snackbar.addEventListener('transitionend', handleTransitioned.bind(Snackbar.snackbar));

    // set current snackbar
    Snackbar.current = Snackbar.snackbar;

    // adjustments prior to appending to body
    preStyleAdjust.call(this, options);

    // var $bottom = getComputedStyle(Snackbar.snackbar).bottom;
    // var $top = getComputedStyle(Snackbar.snackbar).top;

    // append to body and display
    document.body.appendChild(Snackbar.snackbar);
    Snackbar.snackbar.style.opacity = 1;
    Snackbar.snackbar.className = 'snackbar-container ' + options.customClass + ' snackbar-pos ' + options.pos;

    postStyleAdjust.call(this, options);
  };

  /**
   * public close function
   */
  Snackbar.close = () => {
    if (Snackbar.current) {
      Snackbar.current.style.opacity = 0;
    }
  };

  /**
   * build Snackbar container element
   */
  const buildSnackbarContainer = (options) => {
    Snackbar.snackbar = document.createElement('div');
    Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;
    Snackbar.snackbar.style.width = options.width;
  };

  /**
   * build Snackbar inner element
   */
  const buildInnerElement = (options) => {
    var $p = document.createElement('p');
    $p.style.margin = INNER_ELEMENT.margin;
    $p.style.padding = INNER_ELEMENT.padding;
    $p.style.color = options.textColor;
    $p.style.fontSize = INNER_ELEMENT.fontSize;
    $p.style.fontWeight = INNER_ELEMENT.fontWeight;
    $p.style.lineHeight = INNER_ELEMENT.lineHeight;
    $p.innerHTML = options.text;

    Snackbar.snackbar.appendChild($p);
    Snackbar.snackbar.style.background = options.backgroundColor;
  };

  /**
   * conditionally add action button
   */
  const addActionButton = (options) => {
    if (options.showAction) {
      var actionButton = document.createElement('button');
      actionButton.className = 'action';
      actionButton.innerHTML = options.actionText;
      actionButton.style.color = options.actionTextColor;

      actionButton.addEventListener('click', () => {
        options.onActionClick(Snackbar.snackbar);
      });

      Snackbar.snackbar.appendChild(actionButton);
    }
  };

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
   * adjust style prior to appending to body
   */
  const preStyleAdjust = (options) => {
    if (options.pos.includes('top')) {
      Snackbar.snackbar.style.top = '-100px';
    }
  };

  /**
   * adjust style after appending to body
   */
  const postStyleAdjust = (options) => {
    switch (options.pos) {
      case 'top-left':
      case 'top-right':
        Snackbar.snackbar.style.top = 0;
        break;
      case 'top':
      case 'top-center':
        Snackbar.snackbar.style.top = '25px';
        break;
      case 'bottom':
      case 'bottom-center':
        Snackbar.snackbar.style.bottom = '-25px';
        break;
    }

    // if (options.pos === 'top-left' || options.pos === 'top-right') {
    //   Snackbar.snackbar.style.top = 0;
    // } else {
    //   if (options.pos === 'top-center' || options.pos === 'top') {
    //     Snackbar.snackbar.style.top = '25px';
    //   } else {
    //     if (options.pos === 'bottom-center' || options.pos === 'bottom') {
    //       Snackbar.snackbar.style.bottom = '-25px';
    //     }
    //   }
    // }
  };

  return Snackbar;
};

export default Snackbar();

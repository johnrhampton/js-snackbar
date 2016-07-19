/*!
 * Snackbar v0.1.4
 * http://polonel.com/Snackbar
 *
 * Copyright 2016 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */

import {SNACKBAR, INNER_ELEMENT} from './defaults';
import {extend} from './extend';

(function() {
  'use strict';

  var root = typeof self == 'object' && self.self === self && self ||
             typeof global == 'object' && global.global === global && global ||
             this;

  var Snackbar = function(obj) {
    if (obj instanceof Snackbar) {
      return Snackbar;
    }
    if (!(this instanceof Snackbar)) {
      return new Snackbar(obj);
    }
    this._wrapped = obj;
  };

  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = Snackbar;
    }
    exports.Snackbar = Snackbar;
  } else {
    root.Snackbar = Snackbar;
  }

  Snackbar.current = null;
  var $defaults = SNACKBAR;

  /**
   * show Snackbar
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

    // build snackbar container
    buildContainerElement(options);

    // build inner snackbar element
    buildInnerElement(options);

    // conditionally add action button
    addActionButton(options);

    setTimeout(function() {
      if (Snackbar.current === this) {
        Snackbar.current.style.opacity = 0;
      }
    }.bind(Snackbar.snackbar), options.duration);

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
  };

  /**
   * close Snackbar
   */
  Snackbar.close = function() {
    if (Snackbar.current) {
      Snackbar.current.style.opacity = 0;
    }
  };

  /**
   * conditionally add action button
   */
  const addActionButton = (options) => {
    if (options.showAction) {
      let actionButton = document.createElement('button');
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
   * build Snackbar container element
   */
  const buildContainerElement = (options) => {
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
   * append to body, set opacity to 1, set classes
   */
  const displaySnackbar = (options) => {
    document.body.appendChild(Snackbar.snackbar);

    var $bottom = getComputedStyle(Snackbar.snackbar).bottom;
    var $top = getComputedStyle(Snackbar.snackbar).top;

    Snackbar.snackbar.style.opacity = 1;
    Snackbar.snackbar.className = 'snackbar-container ' + options.customClass + ' snackbar-pos ' + options.pos;
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
  };

  return Snackbar;
}());
'use strict';

/**
 * returns the current context for the snackbar - i.e window
 *  invoke with .call
 */
export function getContext(self, global) {
  return typeof self == 'object' && self.self === self && self ||
         typeof global == 'object' && global.global === global && global ||
         this;
}

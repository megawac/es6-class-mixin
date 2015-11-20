'use strict';

module.exports = function(Parent, ...mixins) {
  class Mixed extends Parent {}
  for (let mixin of mixins) {
    for (let prop in mixin) {
      Mixed.prototype[prop] = mixin[prop];
    }
  }
  return Mixed;
};

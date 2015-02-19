'use strict';

const debug = require('debug')('es6-class-mixin');


module.exports = function (Parent, ...mixins) {
  class Mixed extends Parent {}
  for (let mixin of mixins) {
    for (let name of Object.keys(mixin)) {
      Mixed.prototype[name] = mixin[name];
    }
  }
  return Mixed;
};
module.exports = function(Parent, ...mixins) {
  debug('start to mixin to %s', Parent.name);
  class Mixed extends Parent {}
  for (let mixin of mixins) {
    for (let prop of Object.keys(mixin)) {
      debug('mixin %s', prop);
      Mixed.prototype[prop] = mixin[prop];
    }
  }
  return Mixed;
};

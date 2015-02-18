'use strict';

module.exports = function(Parent, ...mixins) {
  class Mixed extends Parent {}
  for (let mixin of mixins) {
    for(let name of Object.keys(mixin)) {
      Mixed.prototype[name] = mixin[name];
    }
  }
  return Parent;
};

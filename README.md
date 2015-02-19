# mixin

Mixins for ES6 Classes. Based on [@mattmccray's gist](https://gist.github.com/mattmccray/e41e2bf18b13a153ce67)

## API

```js
mixin(ParentClass, ...Mixins) // return new MixedClass extended by Mixins
```

## Examples

```js
// Basic
const mixin = require('es6-class-mixin');

class ListItem {};

let Draggable = {
  drag() { /* … */ }
};

let Droppable = {
  drop() { /* … */ }
};

class DraggableItem extends mixin(ListItem, Draggable, Droppable) {}
```

```js
// Backbone
class Input extends mixin(Backbone.View, Dispatcher.Mixin) {}
```

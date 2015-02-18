# mixin

Mixins for ES6 Classes. Based on @mattmccray's [gist](https://gist.github.com/mattmccray/e41e2bf18b13a153ce67)

```js
mixin(ParentClass, ...Mixins) // return new MixedClass extended by Mixins
```

```js
class Input extends mixin(Backbone.View, Dispatcher.Mixin) {}
```


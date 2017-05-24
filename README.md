# vue-lodash
A small wrapper for integrating lodash to Vuejs
(Inspired by vue-axios plugin by imcvampire)

## How to install:
### CommonJS:
```
npm install --save lodash vue-lodash
```

And in your entry file:
```
import Vue from 'vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)
```

### Script:
Just add 3 scripts in order: `vue`, `lodash` and `vue-lodash` to your `document`.

## Usage:
This wrapper bind `lodash` to `Vue` or `this` if you're using single file component.

You can `lodash` like this:
```
Vue._.random(20)

this._.random(20)
```
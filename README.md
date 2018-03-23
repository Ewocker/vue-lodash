# vue-lodash
A small wrapper for integrating lodash to Vuejs
(Inspired by vue-axios plugin by imcvampire)

## When to use it and when not to:
Use it when using lodash extensively in lots of file.

Don't use it if just want some simple functions from lodash. (My recommendation is to install individual small function from lodash.)

## For vue-lodash 2.x
```
npm install --save vue-lodash
```

And in your entry file:
```
import Vue from 'vue'
import VueLodash from 'vue-lodash'

const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options) // options is optional
```

#### Usage:
This wrapper bind `lodash` to `Vue` or `this` if you're using single file component.

You can use `lodash` like this:
```
// with name option
Vue.myCustomName.random(20)
this.myCustomName.random(20)

// default (it works even with custom name)
Vue._.random(20)
this._.random(20)
```


## For vue-lodash 1.x
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

### Usage:
This wrapper bind `lodash` to `Vue` or `this` if you're using single file component.

You can `lodash` like this:
```
Vue._.random(20)
this._.random(20)
```

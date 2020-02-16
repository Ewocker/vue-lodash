# vue-lodash
> A small wrapper for integrating lodash to Vuejs

(Inspired by [vue-axios](https://github.com/imcvampire/vue-axios) plugin)

## Install

```
npm install --save vue-lodash lodash
```

## Usage

```javascript
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// name is optional
Vue.use(VueLodash, { name: 'custom' , lodash: { map, random } })

new Vue({
  el: '#app',
  methods: {
    test() {
      console.log(this.lodash.random(20))
      console.log(this._.random(20))
      console.log(this.custom.random(20))
    },
  }
})
console.log(Vue.lodash.random(20))
console.log(Vue._.random(20))
console.log(Vue.custom.random(20))
```

## Typescript

Using __custom name__ with typescript is currently unsupported without casting.

```typescript
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(VueLodash, { name: 'custom', lodash: { map, random } })

new Vue({
  el: '#app',
  methods: {
    testLodash() {
      console.log(this.lodash.random(20))
      console.log(this._.random(20))
      console.log((this as any).custom.random(20))
    },
  }
})
console.log(Vue.lodash.random(20))
console.log(Vue._.random(20))
console.log((Vue as any).custom.random(20))
```

## Tree shaking with lodash

Only import the packages you need, note that lodash tree shaking has to do import with path to module.

```typescript
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import random from 'lodash/random'
import map from 'lodash/map'

Vue.use(VueLodash, { name: 'custom', lodash: { map, random } })
```

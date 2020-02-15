import Vue from 'vue'
import VueLodash from 'vue-lodash'
import random from 'lodash/random'
import map from 'lodash/map'

Vue.use(VueLodash, { name: 'xxx', lodash: { map, random } })

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    testLodash() {
      return this.lodash.random(20)
    },
    testUnderscore() {
      return this._.random(20)
    },
    testCustom() {
      return (this as any).xxx.random(20)
    },
  }
})
console.log(Vue.lodash.random(20))
console.log(Vue._.random(20))
console.log((Vue as any).xxx.random(20))
import Vue from 'vue'
import VueLodash from '../src/index.mjs'

Vue.use(VueLodash, { name: 'lodash' })

const testWithoutOption = new Vue({
  methods: {
    run() {
      Vue._.random(20)
      this._.random(20)
    }
  }
})
testWithoutOption.run()

const testWithOption = new Vue({
  methods: {
    run() {
      Vue.lodash.random(20)
      this.lodash.random(20)
    }
  }
})
testWithOption.run()
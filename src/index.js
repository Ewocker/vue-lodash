/* eslint-disable */
const VueLodash = {
  install (Vue, _) {
    Vue._ = _
    Object.defineProperties(Vue.prototype, {
      _: {
        get() {
          return _
        }
      }
    })
    Vue.mixin({
      mounted() {
        // Just tell you that it is mounted
        // console.log('VueLodash');
      }
    })
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLodash)
    }
  }
}

export default VueLodash

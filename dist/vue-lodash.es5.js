'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var VueLodash = {
  install: function install(Vue, _) {
    Vue._ = _;
    Object.defineProperties(Vue.prototype, {
      _: {
        get: function get() {
          return _;
        }
      }
    });
    Vue.mixin({
      mounted: function mounted() {
        // Just tell you that it is mounted
        // console.log('VueLodash');
      }
    });
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLodash);
    }
  }
};

exports.default = VueLodash;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var genericInstall = function genericInstall(Vue) {
  Vue._ = _lodash.default;
  Object.defineProperties(Vue.prototype, {
    _: {
      get: function get() {
        return _lodash.default;
      }
    }
  });
};

var VueLodash = {
  install: function install(Vue, options) {
    if (options && options.name) {
      Vue[options.name] = _lodash.default;
      Object.defineProperties(Vue.prototype, _defineProperty({}, options.name, {
        get: function get() {
          return _lodash.default;
        }
      }));
    }

    genericInstall(Vue);
    Vue.mixin({
      mounted: function mounted() {// Just tell you that it is mounted
        // console.log('VueLodash');
      }
    });

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLodash);
    }
  }
};
var _default = VueLodash;
exports.default = _default;
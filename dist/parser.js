(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.BBCode = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var BBCode =
  /*#__PURE__*/
  function () {
    /**
     * @param {Object} codes
     */
    function BBCode(codes) {
      _classCallCheck(this, BBCode);

      this.codes = [];
      this.setCodes(codes);
    }
    /**
     * parse
     *
     * @param {String} text
     * @returns {String}
     */


    _createClass(BBCode, [{
      key: "parse",
      value: function parse(text) {
        return this.codes.reduce(function (text, code) {
          return text.replace(code.regexp, code.replacement);
        }, text);
      }
      /**
       * add bb codes
       *
       * @param {String} regex
       * @param {String} replacement
       * @returns {BBCode}
       */

    }, {
      key: "add",
      value: function add(regex, replacement) {
        this.codes.push({
          regexp: new RegExp(regex, 'igm'),
          replacement: replacement
        });
        return this;
      }
      /**
       * set bb codes
       *
       * @param {Object} codes
       * @returns {BBCode}
       */

    }, {
      key: "setCodes",
      value: function setCodes(codes) {
        this.codes = Object.keys(codes).map(function (regex) {
          var replacement = codes[regex];
          return {
            regexp: new RegExp(regex, 'igm'),
            replacement: replacement
          };
        }, this);
        return this;
      }
    }]);

    return BBCode;
  }();

  return BBCode;

}));
//# sourceMappingURL=parser.js.map

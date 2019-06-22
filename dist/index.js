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

  var DefaultParser = new BBCode$1({
    '\\[br\\]': '<br>',
    '\\[b\\](.+?)\\[/b\\]': '<strong>$1</strong>',
    '\\[i\\](.+?)\\[/i\\]': '<em>$1</em>',
    '\\[u\\](.+?)\\[/u\\]': '<u>$1</u>',
    '\\[h1\\](.+?)\\[/h1\\]': '<h1><a href="$1" name="$1">$1</a></h1>',
    '\\[h2\\](.+?)\\[/h2\\]': '<h2><a href="$1" name="$1">$1</a></h2>',
    '\\[h3\\](.+?)\\[/h3\\]': '<h3><a href="$1" name="$1">$1</a></h3>',
    '\\[h4\\](.+?)\\[/h4\\]': '<h4><a href="$1" name="$1">$1</a></h4>',
    '\\[h5\\](.+?)\\[/h5\\]': '<h5><a href="$1" name="$1">$1</a></h5>',
    '\\[h6\\](.+?)\\[/h6\\]': '<h6><a href="$1" name="$1">$1</a></h6>',
    '\\[p\\](.+?)\\[/p\\]': '<p>$1</p>',
    '\\[color=(.+?)\\](.+?)\\[/color\\]': '<span style="color:$1">$2</span>',
    '\\[size=([0-9]+)\\](.+?)\\[/size\\]': '<span style="font-size:$1px">$2</span>',
    '\\[img\\](.+?)\\[/img\\]': '<img src="$1">',
    '\\[img=(.+?)\\]': '<img src="$1">',
    '\\[email\\](.+?)\\[/email\\]': '<a href="mailto:$1">$1</a>',
    '\\[email=(.+?)\\](.+?)\\[/email\\]': '<a href="mailto:$1">$2</a>',
    '\\[url\\](.+?)\\[/url\\]': '<a href="$1">$1</a>',
    '\\[url=(.+?)\\|onclick\\](.+?)\\[/url\\]': '<a onclick="$1">$2</a>',
    '\\[url=(.+?)\\starget=(.+?)\\](.+?)\\[/url\\]': '<a href="$1" target="$2">$3</a>',
    '\\[url=(.+?)\\](.+?)\\[/url\\]': '<a href="$1">$2</a>',
    '\\[a=(.+?)\\](.+?)\\[/a\\]': '<a href="$1" name="$1">$2</a>',
    '\\[list\\](.+?)\\[/list\\]': '<ul>$1</ul>',
    '\\[\\*\\](.+?)\\[/\\*\\]': '<li>$1</li>'
  });

  var BBCode$1 = {
    BBCode: BBCode,
    DefaultParser: DefaultParser
  };

  return BBCode$1;

}));
//# sourceMappingURL=index.js.map

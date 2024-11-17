System.register(
  ["react", "react-dom"],
  function (__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
    var __WEBPACK_EXTERNAL_MODULE_react__ = {};
    var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
    Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", {
      value: true,
    });
    Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", {
      value: true,
    });
    return {
      setters: [
        function (module) {
			console.info('module', module)
          Object.keys(module).forEach(function (key) {
			console.info('module', module)
			console.info(__WEBPACK_EXTERNAL_MODULE_react__)
            __WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
          });
        },
        function (module) {
          Object.keys(module).forEach(function (key) {
            __WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
          });
        },
      ],
      execute: function () {
        __WEBPACK_DYNAMIC_EXPORT__(
          (() => {
            "use strict";
            var __webpack_modules__ = {
              "./src/index.js": (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
              ) => {
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__["default"].render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "hello system.js"), document.getElementById(\'root\'));\n\n//# sourceURL=webpack://system-demo/./src/index.js?'
                );
              },
              react: (module) => {
                module.exports = __WEBPACK_EXTERNAL_MODULE_react__;
              },
              "react-dom": (module) => {
                module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;
              },
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
			console.info('moduleId', moduleId)
              var cachedModule = __webpack_module_cache__[moduleId];
              if (cachedModule !== undefined) {
                return cachedModule.exports;
              }
              var module = (__webpack_module_cache__[moduleId] = {
                exports: {},
              });
              __webpack_modules__[moduleId](
                module,
                module.exports,
                __webpack_require__
              );
              return module.exports;
            }
            (() => {
              __webpack_require__.r = (exports) => {
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                  Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                  });
                }
                Object.defineProperty(exports, "__esModule", { value: true });
              };
            })();
            var __webpack_exports__ = __webpack_require__("./src/index.js");
            return __webpack_exports__;
          })()
        );
      },
    };
  }
);

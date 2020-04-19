webpackHotUpdate("static\\development\\pages\\resources\\project.js",{

/***/ "./client/components/[project]/desktop/index.js":
/*!******************************************************!*\
  !*** ./client/components/[project]/desktop/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./client/components/[project]/desktop/list.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./client/components/[project]/desktop/content.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vorlefan/react-hooks */ "./node_modules/@vorlefan/react-hooks/dist/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./client/components/[project]/desktop/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "C:\\Users\\T-GAMER\\Documents\\Code\\Projects\\daxsoft.portfolio\\client\\components\\[project]\\desktop\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------







 // ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

function Component(_ref) {
  var url = _ref.url,
      title = _ref.title;
  var classes = Object(_styles__WEBPACK_IMPORTED_MODULE_6__["stylesRoot"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var projectName = title;
  var docsContent = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useFetch"])({
    endpoint: "https://raw.githubusercontent.com/DaxSoft/".concat(projectName, "/master/readme.md"),
    onSuccess: function onSuccess(response) {},
    onData: function onData(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", data.text());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, 'GET', isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default.a);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!!projectName && !docsContent.data) {
      docsContent.refresh.on();
    }
  }, [projectName]);
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    docsContent: docsContent,
    projectName: projectName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), docsContent.loading.isOn() ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }) : __jsx(_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    docsContent: docsContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }));
}

/***/ })

})
//# sourceMappingURL=project.js.f3991db9710c1139e492.hot-update.js.map
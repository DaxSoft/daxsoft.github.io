webpackHotUpdate("static\\development\\pages\\resources\\project.js",{

/***/ "./pages/resources/project.js":
/*!************************************!*\
  !*** ./pages/resources/project.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vorlefan/react-hooks */ "./node_modules/@vorlefan/react-hooks/dist/index.es.js");
/* harmony import */ var _client_components_common_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/components/@common/menu */ "./client/components/@common/menu/index.js");
/* harmony import */ var _client_components_project___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/components/[project] */ "./client/components/[project]/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\T-GAMER\\Documents\\Code\\Projects\\daxsoft.portfolio\\pages\\resources\\project.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*
:--------------------------------------------------------------------------
: /index
:--------------------------------------------------------------------------
*/



/*
:--------------------------------------------------------------------------
: Components
:--------------------------------------------------------------------------
*/



/*
:--------------------------------------------------------------------------
: Desktop Orientation
:--------------------------------------------------------------------------
*/

var Desktop = function Desktop(_ref) {
  var url = _ref.url;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_client_components_common_menu__WEBPACK_IMPORTED_MODULE_4__["MenuDesktop"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_client_components_project___WEBPACK_IMPORTED_MODULE_5__["ResourceProjectDesktop"], {
    url: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }));
};
/*
:--------------------------------------------------------------------------
: Mobile Orientation
:--------------------------------------------------------------------------
*/


var Mobile = function Mobile(_ref2) {
  var url = _ref2.url;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_client_components_common_menu__WEBPACK_IMPORTED_MODULE_4__["MenuMobile"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(_client_components_project___WEBPACK_IMPORTED_MODULE_5__["ResourceProjectMobile"], {
    url: url.uri,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }));
};
/*
:--------------------------------------------------------------------------
: Page Component
:--------------------------------------------------------------------------
*/


function Page(_ref3) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3);

  var screenSize = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useScreenSize"])({}, [0.95, 1.5]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Project'),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useClient = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useClient"])(function (inClient) {
    if (!!inClient) {
      var project = /(\?id\=(.*)\&?)/gi.exec(document.location.pathname.search)[2];
      setUrl("https://api.github.com/repos/DaxSoft/".concat(project));
      setTitle(project);
    }
  }),
      inClient = _useClient.inClient;

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Resource | ", title), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })), inClient && !!url && (screenSize.orientation === 'landscape' ? __jsx(Desktop, {
    url: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }) : __jsx(Mobile, {
    url: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  })));
}

/***/ })

})
//# sourceMappingURL=project.js.8a9fca7405ab53a8b1d1.hot-update.js.map
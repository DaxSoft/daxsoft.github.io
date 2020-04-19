webpackHotUpdate("static\\development\\pages\\todo.js",{

/***/ "./client/components/todo/mobile/index.js":
/*!************************************************!*\
  !*** ./client/components/todo/mobile/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vorlefan/react-hooks */ "./node_modules/@vorlefan/react-hooks/dist/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./client/components/todo/mobile/styles/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/DoneAll */ "./node_modules/@material-ui/icons/DoneAll.js");
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\T-GAMER\\Documents\\Code\\Projects\\daxsoft.portfolio\\client\\components\\todo\\mobile\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------






 // ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

var Todo = function Todo(_ref) {
  var title = _ref.title,
      labels = _ref.labels,
      state = _ref.state,
      body = _ref.body,
      createdAt = _ref.createdAt,
      updateAt = _ref.updateAt,
      href = _ref.href;
  var classes = Object(_styles__WEBPACK_IMPORTED_MODULE_5__["todoStyles"])();
  var isOpen = state === 'open';
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, !isOpen ? __jsx(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.done,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }) : __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    arrow: true,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "button",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, title)));
};

function Component(_ref2) {
  var _this2 = this;

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2);

  var classes = Object(_styles__WEBPACK_IMPORTED_MODULE_5__["stylesRoot"])();
  var cacheIssues = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useLocalStorage"])('issues', []);
  var issues = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useFetch"])({
    endpoint: 'https://api.github.com/repos/DaxSoft/react-hooks/issues',
    // daxsoft.github.io
    onSuccess: function onSuccess(data) {
      cacheIssues.set(data);
    },
    onError: function onError(err) {
      issues.data = cacheIssues.get();
    },
    startInit: cacheIssues.get()
  }, 'GET', isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a);
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h3",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "To-Do"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "This is just a experimental page, where it makes a request from the Github's API. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 35
    }
  }), "Getting the issues from this portfolio. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 57
    }
  }), "By this, I can create some sort of 'To-Do' for this website"), __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, issues.loading.isOn() ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], {
    color: "secondary",
    style: {
      justifySelf: 'center',
      alignSelf: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }) : Array.isArray(issues.data) && issues.data.length > 0 && issues.data.map(function (value, key) {
    if (value.author_association !== 'OWNER') return;
    return __jsx(Todo, {
      key: key,
      title: value.title,
      labels: value.labels,
      state: value.state,
      body: value.body,
      createdAt: value.created_at,
      updateAt: value.updated_at,
      href: value.html_url,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=todo.js.b11006f86ac5868b10da.hot-update.js.map
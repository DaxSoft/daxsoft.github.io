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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/DoneAll */ "./node_modules/@material-ui/icons/DoneAll.js");
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Update */ "./node_modules/@material-ui/icons/Update.js");
/* harmony import */ var _material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\T-GAMER\\Documents\\Code\\Projects\\daxsoft.portfolio\\client\\components\\todo\\mobile\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------











function handleDate(createdAt, updateAt) {
  var a = new Date(createdAt);
  var b = new Date(updateAt);
  var time = b.getTime() - a.getTime();
  return time / (1000 * 3600 * 24);
} // ------------------------------------------------------------------
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
  var mainLabel = labels[0];
  var lastUpdate = handleDate(createdAt, updateAt);
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, !isOpen ? __jsx(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.done,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }) : __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    arrow: true,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "button",
    className: classes.title,
    noWrap: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    arrow: true,
    title: mainLabel.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "button",
    className: classes.label,
    style: {
      color: String('#' + mainLabel.color),
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["fade"])(String('#' + mainLabel.color), 0.1)
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, mainLabel.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    arrow: true,
    title: "How many days since the last update?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.update,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, lastUpdate, " days"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    arrow: true,
    title: "Go to the Issue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    color: "secondary",
    size: "small",
    target: "_blank",
    href: href,
    onClick: function onClick() {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }))));
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
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h3",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "To-Do"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "This is just a experimental page, where it makes a request from the Github's API. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 35
    }
  }), "Getting the issues from this portfolio. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 57
    }
  }), "By this, I can create some sort of 'To-Do' for this website"), __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 132,
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
        lineNumber: 142,
        columnNumber: 29
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=todo.js.05f8571fd4994b8cc6e1.hot-update.js.map
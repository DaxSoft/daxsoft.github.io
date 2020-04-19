webpackHotUpdate("static\\development\\pages\\resources.js",{

/***/ "./client/components/resources/mobile/index.js":
/*!*****************************************************!*\
  !*** ./client/components/resources/mobile/index.js ***!
  \*****************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./client/components/resources/mobile/styles/index.js");
/* harmony import */ var _common_github_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@common/github_card */ "./client/components/@common/github_card/index.js");

var _jsxFileName = "C:\\Users\\T-GAMER\\Documents\\Code\\Projects\\daxsoft.portfolio\\client\\components\\resources\\mobile\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------








function filterGithubProjects(_ref) {
  var description = _ref.description;
  return /(\#doc(s)?\s?)/gim.test(description);
} // ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------


function Component(_ref2) {
  var _this = this;

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2);

  var classes = Object(_styles__WEBPACK_IMPORTED_MODULE_6__["stylesRoot"])();
  var cacheResources = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useLocalStorage"])('resources', []);
  var repos = Object(_vorlefan_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useFetch"])({
    endpoint: 'https://api.github.com/users/DaxSoft/repos',
    // daxsoft.github.io
    onSuccess: function onSuccess(data) {
      cacheResources.set(data);
    },
    onError: function onError(err) {
      issues.data = cacheResources.get();
    },
    startInit: cacheResources.get()
  }, 'GET', isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Repositories"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "This pages makes a request from Github's API. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 63
    }
  }), "Where it gets the repositories from my account and display here.", ' ', __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), "It checks if exists a documentation available from the description of the repo. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 42
    }
  }), "The description needs to have '#docs'."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "button",
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Click upon the repository to go to the documentation!"), __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, repos.loading.isOn() ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], {
    color: "secondary",
    style: {
      justifySelf: 'center',
      alignSelf: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }) : Array.isArray(repos.data) && repos.data.length > 0 && repos.data.map(function (value, key) {
    if (!filterGithubProjects(value)) return;
    return __jsx(_common_github_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: key,
      title: value.name,
      href: "/resources/".concat(value.name),
      description: value.description,
      stars: value.stargazers_count,
      fork: value.forks_count,
      data: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=resources.js.0aa3531232e15f359387.hot-update.js.map
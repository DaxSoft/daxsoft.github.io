webpackHotUpdate("static\\development\\pages\\resources.js",{

/***/ "./client/components/@common/menu/desktop/styles/index.js":
/*!****************************************************************!*\
  !*** ./client/components/@common/menu/desktop/styles/index.js ***!
  \****************************************************************/
/*! exports provided: stylesRoot, optionsStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesRoot", function() { return stylesRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsStyles", function() { return optionsStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../styles */ "./client/styles/index.js");


var stylesRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: 'max-content max-content',
      justifyContent: 'space-between !important',
      alignItems: 'center',
      gridGap: '1em',
      '& > *': {
        justifySelf: 'center'
      },
      background: 'unset',
      boxShadow: 'unset',
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.BIG, 0),
      marginBottom: '2em',
      width: '99vw',
      top: '0px',
      transition: 'all .3s ease-in',
      animation: "$show 1.5s ease-in"
    },
    '@keyframes show': {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    },
    title: {
      fontSize: '1.1em'
    },
    buttonTitle: {
      width: 'max-content',
      height: 'max-content',
      marginLeft: '2em'
    }
  };
});
var optionsStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 8em)',
      justifyContent: 'flex-end !important',
      alignItems: 'center',
      gridGap: '1em',
      width: '60vw',
      transition: 'all .3s ease-in'
    }
  };
});

/***/ })

})
//# sourceMappingURL=resources.js.58158ac3dc4c3ce9e0e1.hot-update.js.map
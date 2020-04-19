webpackHotUpdate("static\\development\\pages\\resources\\[project].js",{

/***/ "./client/components/[project]/mobile/styles/index.js":
/*!************************************************************!*\
  !*** ./client/components/[project]/mobile/styles/index.js ***!
  \************************************************************/
/*! exports provided: stylesRoot, listRoot, contentRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesRoot", function() { return stylesRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRoot", function() { return listRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentRoot", function() { return contentRoot; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles */ "./client/styles/index.js");


var stylesRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.BIG),
      display: 'grid',
      gridTemplateRows: 'max-content',
      gridGap: '1em',
      justifyContent: 'space-between',
      justifyItems: 'flex-start',
      alignItems: 'fkex-start',
      width: '100VW',
      justifySelf: 'center',
      alignSelf: 'center',
      marginTop: '2em'
    },
    listButton: {
      position: 'fixed',
      zIndex: 7000,
      bottom: '2em',
      right: '24px',
      backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].NEUTRAL_COLOR.neutralPrimary,
      color: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].THEME_COLOR.secondary.main
    }
  };
});
var listRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      display: 'grid',
      gridTemplateRows: 'max-content',
      gridGap: '1em',
      justifyContent: 'flex-start',
      justifyItems: 'flex-start',
      alignItems: 'flex-start',
      width: '75vw',
      height: 'calc(100vh + 2em)',
      position: 'fixed',
      zIndex: 6666,
      backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].NEUTRAL_COLOR.neutralLight,
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      transform: 'translateY(-50%)',
      top: '50%',
      left: '0px',
      boxShadow: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].BOX_SHADOW["float"]()
    },
    painel: {
      backgroundColor: 'unset',
      boxShadow: 'unset',
      width: '20em',
      '& > *': {
        height: 'max-content'
      }
    },
    detail: {
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      display: 'grid',
      gridTemplateRows: 'max-content',
      gridGap: '1em',
      justifyContent: 'flex-start',
      justifyItems: 'flex-start',
      alignItems: 'flex-start',
      width: 'inherit'
    },
    subButton: {
      textTransform: 'none',
      fontSize: '.8rem'
    }
  };
});
var contentRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.DEFAULT),
      width: '99vw'
    }
  };
});

/***/ })

})
//# sourceMappingURL=[project].js.25a48c669ad046a83af0.hot-update.js.map
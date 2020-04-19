webpackHotUpdate("static\\development\\pages\\todo.js",{

/***/ "./client/components/todo/mobile/styles/index.js":
/*!*******************************************************!*\
  !*** ./client/components/todo/mobile/styles/index.js ***!
  \*******************************************************/
/*! exports provided: stylesRoot, todoStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesRoot", function() { return stylesRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoStyles", function() { return todoStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles */ "./client/styles/index.js");


var stylesRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.BIG),
      display: 'grid',
      gridTemplateRows: 'max-content',
      gridGap: '1em',
      justifyContent: 'space-evenly',
      justifyItems: 'center',
      alignItems: 'center',
      width: '99vw',
      justifySelf: 'center',
      alignSelf: 'center',
      marginTop: '2em'
    },
    title: {
      justifySelf: 'center',
      alignSelf: 'center',
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.BIG),
      width: 'inherit',
      textAlign: 'center'
    },
    description: {
      justifySelf: 'center',
      alignSelf: 'center',
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      width: 'inherit',
      textAlign: 'center',
      fontSize: '1.5em',
      color: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].NEUTRAL_COLOR.neutralSecondary
    },
    container: {
      display: 'grid',
      gridTemplateRows: 'max-content',
      gridGap: '1em',
      justifyContent: 'flex-start',
      justifyItems: 'flex-start',
      alignItems: 'flex-start',
      width: '99vw',
      justifySelf: 'center',
      alignSelf: 'center'
    },
    todo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, max-content)',
      // index, name+logo, code, rate, totalrate, sector, goto
      //gridGap: '.5em',
      justifyContent: 'space-between',
      justifyItems: 'center',
      alignItems: 'center',
      padding: theme.spacing(0, _styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      transition: 'all .3s ease-in',
      '&:hover': {
        boxShadow: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].BOX_SHADOW.light()
      },
      height: '72px',
      borderRadius: '1em',
      width: '99vw',
      justifySelf: 'center',
      alignSelf: 'center'
    }
  };
});
var todoStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, max-content)',
      // index, name+logo, code, rate, totalrate, sector, goto
      //gridGap: '.5em',
      justifyContent: 'space-between',
      justifyItems: 'center',
      alignItems: 'center',
      padding: theme.spacing(0, _styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      transition: 'all .3s ease-in',
      '&:hover': {
        boxShadow: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].BOX_SHADOW.light()
      },
      height: '72px',
      borderRadius: '1em',
      width: '90vw',
      marginLeft: '5vw',
      marginTop: '3em'
    },
    done: {
      borderRadius: '50%',
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["fade"])('#27ae60', 0.1),
      color: '#27ae60',
      width: '2em',
      height: '2em'
    },
    open: {
      borderRadius: '50%',
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL),
      color: '#2c3e50',
      width: '2em',
      height: '2em',
      opacity: 0.75
    },
    title: {
      width: '12em',
      textAlign: 'left'
    },
    label: {
      padding: theme.spacing(_styles__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SPACING.SMALL / 1.5),
      borderRadius: '1em',
      justifySelf: 'center',
      alignSelf: 'center',
      fontSize: '.8rem'
    },
    body: {
      width: '16em',
      textAlign: 'left',
      fontSize: '.8rem'
    },
    update: {
      display: 'grid',
      gridTemplateColumns: '2em 8em',
      gridGap: '1em',
      justifyContent: 'space-evenly',
      justifyItems: 'flex-start',
      alignItems: 'center',
      color: _styles__WEBPACK_IMPORTED_MODULE_1__["THEME"].NEUTRAL_COLOR.neutralSecondary
    }
  };
});

/***/ })

})
//# sourceMappingURL=todo.js.7e67dc7b11b0d86afe35.hot-update.js.map
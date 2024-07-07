/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/plus.png */ "./src/assets/plus.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bin.png */ "./src/assets/bin.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/tick.png */ "./src/assets/tick.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
    letter-spacing: -1px;
}

:root {
    --primary-color: rgb(227, 227, 227);
    --hover-color: rgb(188, 188, 188);
    --primary-text-color: rgb(20, 20, 20);
    --secondar-text-color: rgb(60, 60, 60);
    --btn-color: rgb(69, 212, 203);
}

body {
    padding: 10px;
    overflow-x: hidden;
}

/* Header Stylings */

header {
    display: flex;
    align-items: center;
    justify-content: center;
}

#site-title {
    font-size: 3rem;
    font-weight: 700;
}

/* Main Styling */

main {
    display: grid;
    grid-template-columns: minmax(250px, 350px) 1fr;
    position: relative;
}

/* Menu Styling */

#menu {
    background-color: var(--primary-color);
    border: none;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: calc(100vh - 100px);
}

#menu-title, #projects-section, #checklist-section, .menu-subtitle, .project-bar, .checklist-bar {
    width: 100%;
}

#projects-section, #checklist-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

#projects-list, #checklist-list {
    display: flex;
    flex-direction: column;
}

#menu-title, #project-title, .menu-subtitle, .form-heading {
    border-bottom: 1px solid var(--hover-color);
}

#menu-title, #project-title, .form-heading {
    font-size: 1.75rem;
    font-weight: 700;
    padding: 10px;
}

.menu-subtitle, .task-title {
    font-size: 1.25rem;
    font-weight: 500;
    padding: 10px;
}

.menu-subtitle, .project-bar, .checklist-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--secondar-text-color);
    transition: all .2s;
}

.project-bar, .checklist-bar {
    padding: 10px;
    margin-top: 10px;
    width: 95%;
    align-self: flex-end;
}

.project-bar:hover, #add-project:hover, .checklist-bar:hover {
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--hover-color);
}

.icon, .delete-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center center/cover no-repeat;
}

.delete-icon {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center center/cover no-repeat;
    height: 20px;
    width: 16px;
    display: none;
}

.count {
    padding: 1px 10px;
    border-radius: 5px;
    background-color: white;
}

.project-name {
    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
}

/* Task Section Styling */

#tasks-section {
    padding: 20px;
}

#task-grid {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.task {
    padding: 10px;
    transition: all .3s;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
}

.task:hover, .submit-btn:hover, .cancel-btn:hover {
    transform: translateY(-3px);
    cursor: pointer;
    box-shadow: 2px 2px 5px var(--hover-color);
}

.task-title {
    color: var(--primary-text-color);
    padding: 0;
    max-width: 85%;
}

.task-desc {
    color: var(--secondar-text-color);
    margin-top: 10px;
}

.task-items, .extra-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.task-items {
    padding: 10px;
}

.check-box {
    position: absolute;
    top: 10px;
    right: 20px;
    border: 1px solid var(--secondar-text-color);
    height: 20px;
    width: 20px;
    border-radius: 50%;
}

.checked-task {
    text-decoration: line-through;
    color: var(--secondar-text-color);
}

.check-box:hover {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center center/cover no-repeat;
}

.check-box.checked {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center center/cover no-repeat;
}

.task-delete {
    border-radius: 5px;
    height: 30px;
    width: 30px;
    padding: 5px;
}

.task-delete:hover {
    background-color: var(--hover-color);
}

/* Info Input Section Styling */

#info-input-sec {
    background-color: var(--primary-color);
    border: none;
    border-radius: 20px;
    padding: 20px;
    position: absolute;
    top: 0;
    right: -700px;
    transition: all .5s ease-out;
}

#project-info, #task-info {
    display: none;
    align-items: start;
    flex-direction: column;
}

.form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    width: 100%;
}

.label {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--secondar-text-color);
    text-decoration: underline;
    /* margin-top: 5px; */
}

form input, textarea {
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    font-size: 1rem;
}

form input:focus, textarea:focus {
    border: none;
    outline: none;
}

form input[type='color'] {
    background-color: white;
}

.form-btn, #priorities {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
}

.submit-btn, .cancel-btn {
    width: 100px;
    transition: all .3s;
    margin-top: 20px;
}

.submit-btn {
    background-color: var(--btn-color);
}

#h, #m, #l {
    font-size: 1rem;
}

#h {
    color: red;
}

#m {
    color: orange;
}

#l {
    color: green;
}

#add-task {
    position: absolute;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    bottom: 20px;
    right: 20px;
    background: var(--primary-color);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 12px;
    transition: all .3s;
    z-index: 10;
}

#add-task:hover {
    cursor: pointer;
    transform: scale(1.2);
}

#add-task > img {
    height: 100%;
    width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');\r\n\r\n*, *::after, *::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Noto Sans\", sans-serif;\r\n    letter-spacing: -1px;\r\n}\r\n\r\n:root {\r\n    --primary-color: rgb(227, 227, 227);\r\n    --hover-color: rgb(188, 188, 188);\r\n    --primary-text-color: rgb(20, 20, 20);\r\n    --secondar-text-color: rgb(60, 60, 60);\r\n    --btn-color: rgb(69, 212, 203);\r\n}\r\n\r\nbody {\r\n    padding: 10px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n/* Header Stylings */\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#site-title {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n}\r\n\r\n/* Main Styling */\r\n\r\nmain {\r\n    display: grid;\r\n    grid-template-columns: minmax(250px, 350px) 1fr;\r\n    position: relative;\r\n}\r\n\r\n/* Menu Styling */\r\n\r\n#menu {\r\n    background-color: var(--primary-color);\r\n    border: none;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    min-height: calc(100vh - 100px);\r\n}\r\n\r\n#menu-title, #projects-section, #checklist-section, .menu-subtitle, .project-bar, .checklist-bar {\r\n    width: 100%;\r\n}\r\n\r\n#projects-section, #checklist-section {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#projects-list, #checklist-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#menu-title, #project-title, .menu-subtitle, .form-heading {\r\n    border-bottom: 1px solid var(--hover-color);\r\n}\r\n\r\n#menu-title, #project-title, .form-heading {\r\n    font-size: 1.75rem;\r\n    font-weight: 700;\r\n    padding: 10px;\r\n}\r\n\r\n.menu-subtitle, .task-title {\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n\r\n.menu-subtitle, .project-bar, .checklist-bar {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: var(--secondar-text-color);\r\n    transition: all .2s;\r\n}\r\n\r\n.project-bar, .checklist-bar {\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    width: 95%;\r\n    align-self: flex-end;\r\n}\r\n\r\n.project-bar:hover, #add-project:hover, .checklist-bar:hover {\r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n    background-color: var(--hover-color);\r\n}\r\n\r\n.icon, .delete-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 16px;\r\n    width: 16px;\r\n    background: url(./assets/plus.png) center center/cover no-repeat;\r\n}\r\n\r\n.delete-icon {\r\n    background: url(./assets/bin.png) center center/cover no-repeat;\r\n    height: 20px;\r\n    width: 16px;\r\n    display: none;\r\n}\r\n\r\n.count {\r\n    padding: 1px 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n\r\n.project-name {\r\n    text-overflow: ellipsis;\r\n    text-wrap: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n/* Task Section Styling */\r\n\r\n#tasks-section {\r\n    padding: 20px;\r\n}\r\n\r\n#task-grid {\r\n    padding: 20px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    gap: 20px;\r\n}\r\n\r\n.task {\r\n    padding: 10px;\r\n    transition: all .3s;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    position: relative;\r\n}\r\n\r\n.task:hover, .submit-btn:hover, .cancel-btn:hover {\r\n    transform: translateY(-3px);\r\n    cursor: pointer;\r\n    box-shadow: 2px 2px 5px var(--hover-color);\r\n}\r\n\r\n.task-title {\r\n    color: var(--primary-text-color);\r\n    padding: 0;\r\n    max-width: 85%;\r\n}\r\n\r\n.task-desc {\r\n    color: var(--secondar-text-color);\r\n    margin-top: 10px;\r\n}\r\n\r\n.task-items, .extra-items {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.task-items {\r\n    padding: 10px;\r\n}\r\n\r\n.check-box {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    border: 1px solid var(--secondar-text-color);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.checked-task {\r\n    text-decoration: line-through;\r\n    color: var(--secondar-text-color);\r\n}\r\n\r\n.check-box:hover {\r\n    background: url(./assets/tick.png) center center/cover no-repeat;\r\n}\r\n\r\n.check-box.checked {\r\n    background: url(./assets/tick.png) center center/cover no-repeat;\r\n}\r\n\r\n.task-delete {\r\n    border-radius: 5px;\r\n    height: 30px;\r\n    width: 30px;\r\n    padding: 5px;\r\n}\r\n\r\n.task-delete:hover {\r\n    background-color: var(--hover-color);\r\n}\r\n\r\n/* Info Input Section Styling */\r\n\r\n#info-input-sec {\r\n    background-color: var(--primary-color);\r\n    border: none;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -700px;\r\n    transition: all .5s ease-out;\r\n}\r\n\r\n#project-info, #task-info {\r\n    display: none;\r\n    align-items: start;\r\n    flex-direction: column;\r\n}\r\n\r\n.form {\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.label {\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n    color: var(--secondar-text-color);\r\n    text-decoration: underline;\r\n    /* margin-top: 5px; */\r\n}\r\n\r\nform input, textarea {\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n}\r\n\r\nform input:focus, textarea:focus {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\nform input[type='color'] {\r\n    background-color: white;\r\n}\r\n\r\n.form-btn, #priorities {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n    gap: 20px;\r\n}\r\n\r\n.submit-btn, .cancel-btn {\r\n    width: 100px;\r\n    transition: all .3s;\r\n    margin-top: 20px;\r\n}\r\n\r\n.submit-btn {\r\n    background-color: var(--btn-color);\r\n}\r\n\r\n#h, #m, #l {\r\n    font-size: 1rem;\r\n}\r\n\r\n#h {\r\n    color: red;\r\n}\r\n\r\n#m {\r\n    color: orange;\r\n}\r\n\r\n#l {\r\n    color: green;\r\n}\r\n\r\n#add-task {\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    height: 50px;\r\n    width: 50px;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background: var(--primary-color);\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 12px;\r\n    transition: all .3s;\r\n    z-index: 10;\r\n}\r\n\r\n#add-task:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#add-task > img {\r\n    height: 100%;\r\n    width: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/JS/checklistSection.js":
/*!************************************!*\
  !*** ./src/JS/checklistSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getChecklistSection() {
    const checklistSection = document.createElement('div');
    checklistSection.id = 'checklist-section';

    const checkListHeading = document.createElement('div');
    checkListHeading.id = 'add-checks';
    checkListHeading.setAttribute('class', 'menu-subtitle');
    checkListHeading.innerText = 'Checklist';
    checklistSection.appendChild(checkListHeading);

    const checklistList = document.createElement('div');
    checklistList.id = 'checklist-list';
    checklistSection.appendChild(checklistList);

    return checklistSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getChecklistSection);

/***/ }),

/***/ "./src/JS/forms.js":
/*!*************************!*\
  !*** ./src/JS/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getForms() {
    const forms = document.createElement('div');
    forms.id = 'info-input-sec';

    forms.innerHTML = `
            <div id="project-info">
                <span class="form-heading">Please Provide Project Details</span>
                <form action="#" class="form" id="project-form">
                    <label for="projectName" class="label">Project Name:</label>
                    <input type="text" name="projectName" id="projectName" placeholder="Project Name" required>
                    <label for="projectColor" class="label">Project Color:</label>
                    <input type="color" name="projectColor" id="projectColor">
                    <div class="form-btn">
                        <input type="submit" class="submit-btn" value="Add Project">
                        <input type="button" class="cancel-btn" value="Cancel">
                    </div>
                </form>
            </div>
            <div id="task-info">
                <span class="form-heading">Please Provide Task Details</span>
                <form action="#" class="form" id="task-form">
                    <label for="taskName" class="label">Task Name:</label>
                    <input type="text" name="taskName" id="taskName" placeholder="Task Name" required>

                    <label for="taskDesc" class="label">Task Description:</label>
                    <textarea name="taskDesc" id="taskDesc" placeholder="Enter Task Description" cols="45" rows="5"></textarea>

                    <label for="taskPriority" class="label">Task Priority</label>
                    <div id="priorities">
                        <input type="radio" name="taskPriority" id="taskPriorityH" value="H" required> <span id="h">High</span>
                        <input type="radio" name="taskPriority" id="taskPriorityM" value="M"> <span  id="m">Medium</span>
                        <input type="radio" name="taskPriority" id="taskPriorityL" value="L"> <span  id="l">Low</span>
                    </div>

                    <label for="taskDate" class="label">Task Due Date:</label>
                    <input type="date" name="taskDate" id="taskDate" required>

                    <div class="form-btn">
                        <input type="submit" class="submit-btn" value="Submit">
                        <input type="button" class="cancel-btn" value="Cancel">
                    </div>
                </form>
            </div>`;
    
    return forms;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForms);

/***/ }),

/***/ "./src/JS/header.js":
/*!**************************!*\
  !*** ./src/JS/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHeader () {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.innerText = "Minimal To-Do";
    title.id = "site-title";

    header.appendChild(title);

    document.body.appendChild(header);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);

/***/ }),

/***/ "./src/JS/main.js":
/*!************************!*\
  !*** ./src/JS/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/JS/menu.js");
/* harmony import */ var _taskSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskSection */ "./src/JS/taskSection.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/JS/forms.js");
/* harmony import */ var _projectAndTaskManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectAndTaskManager */ "./src/JS/projectAndTaskManager.js");





function loadMain() {
    const main = document.createElement('main');

    const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    main.appendChild(menu);

    const taskSection = (0,_taskSection__WEBPACK_IMPORTED_MODULE_1__["default"])();
    main.appendChild(taskSection);

    const forms = (0,_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
    main.appendChild(forms);

    document.body.appendChild(main);
    (0,_projectAndTaskManager__WEBPACK_IMPORTED_MODULE_3__.loadInitials)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);

/***/ }),

/***/ "./src/JS/menu.js":
/*!************************!*\
  !*** ./src/JS/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSection */ "./src/JS/projectSection.js");
/* harmony import */ var _checklistSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklistSection */ "./src/JS/checklistSection.js");



function getMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title';
    menuTitle.innerText = "Menu";
    menu.appendChild(menuTitle);
    
    const projectSection = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__["default"])();
    menu.appendChild(projectSection);

    const checklistSection = (0,_checklistSection__WEBPACK_IMPORTED_MODULE_1__["default"])();
    menu.appendChild(checklistSection);

    return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenu);

/***/ }),

/***/ "./src/JS/projectAndTaskManager.js":
/*!*****************************************!*\
  !*** ./src/JS/projectAndTaskManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   loadInitials: () => (/* binding */ loadInitials)
/* harmony export */ });
/* harmony import */ var _assets_bin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/bin.png */ "./src/assets/bin.png");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/JS/storage.js");



class TASK {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }
};

class PROJECT {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.taskArray = [];
    }
};

let projectEventListenerAdded = false;
let taskEventListenerAdded = false;
let cancelEventListenerAdded = false;
let projectList = [];
let index = 0, openedProject, taskIndex = 0;

function cleanTasksSection() {
    const taskSection = document.getElementById('tasks-section');
    const checklist = document.getElementById('checklist-list');
    while (taskSection.firstChild) {
        taskSection.removeChild(taskSection.firstChild);
    }
    projectList[openedProject].taskArray = projectList[openedProject].taskArray.filter(task => task !== undefined);
    taskIndex = 0;
    while (checklist.firstChild) {
        checklist.removeChild(checklist.firstChild);
    }
    localStorage.setItem("data", JSON.stringify(projectList));
}

function getTaskCount() {
    let count = 0;
    projectList[openedProject].taskArray.forEach(task => {
        if (task !== undefined)
            count++;
    });
    document.querySelectorAll(".count")[openedProject].innerText = `${count}`;
}

function getTaskCreated(task) {
    const taskGrid = document.getElementById('task-grid');
    let Task = document.createElement('div');
    Task.setAttribute('class', 'task');
    Task.id = `${taskIndex}`;
    taskIndex++;
    Task.innerHTML = `
                    <div class="task-title">${task.title}</div>
                    <div class="task-desc">${task.desc}</div>`;

    const checkBox = document.createElement('div');
    checkBox.setAttribute('class', 'check-box');
    checkBox.addEventListener('click', (e) => {
        e.stopPropagation();
        if (task.checked === false) {
            task.checked = true;
            checkBox.classList.add('checked');
            Task.querySelector('.task-title').classList.add('checked-task');
            Task.querySelector('.task-desc').classList.add('checked-task');
            Task.querySelector('.due-date').classList.add('checked-task');

            const checklist = document.getElementById('checklist-list');
            const checkbar = document.createElement('div');
            checkbar.setAttribute('class', 'checklist-bar');
            checkbar.id = `${openedProject}${Task.id}`;

            const checkBarTaskName = document.createElement('div');
            checkBarTaskName.setAttribute('class', 'project-name');
            checkBarTaskName.innerText = task.title;
            checkbar.appendChild(checkBarTaskName);
            checklist.appendChild(checkbar);
        }
        else {
            task.checked = false;
            checkBox.classList.remove('checked');
            Task.querySelector('.task-title').classList.remove('checked-task');
            Task.querySelector('.task-desc').classList.remove('checked-task');
            Task.querySelector('.due-date').classList.remove('checked-task');
            document.getElementById(`${openedProject}${Task.id}`).remove();
        }
        localStorage.setItem("data", JSON.stringify(projectList));
    });

    Task.appendChild(checkBox);

    const taskItems = document.createElement("div");
    taskItems.setAttribute('class', 'task-items');
    let dueDate = document.createElement("div");
    dueDate.setAttribute('class', 'due-date');
    dueDate.innerText = `Due Date: ${task.dueDate}`;
    taskItems.appendChild(dueDate);
    const taskDelete = document.createElement('div');
    taskDelete.setAttribute('class', 'task-delete');
    taskDelete.innerHTML = `<img src="${_assets_bin_png__WEBPACK_IMPORTED_MODULE_0__}" height="100%" width="100%">`;
    taskDelete.addEventListener('click', (e) => {
        e.stopPropagation();
        let deleted = false;
        const ID = taskDelete.parentNode.parentNode.id;
        const tasks = taskGrid.querySelectorAll('.task');
        tasks.forEach((task, index) => {
            if (task.id === ID) {
                task.remove();
                deleted = true;
                checkBox.classList.remove('checked');
                Task.querySelector('.task-title').classList.remove('checked-task');
                Task.querySelector('.task-desc').classList.remove('checked-task');
                Task.querySelector('.due-date').classList.remove('checked-task');
                if (projectList[openedProject].taskArray[Task.id].checked === true)
                    document.getElementById(`${openedProject}${Task.id}`).remove();
            }
            if (deleted) {
                task.id = `${index - 1}`;
            }
        });
        projectList[openedProject].taskArray.splice(ID, 1);
        localStorage.setItem("data", JSON.stringify(projectList));
        getTaskCount();
    });
    taskItems.appendChild(taskDelete);
    Task.appendChild(taskItems);
    if (task.priority === 'H')
        Task.style.cssText = "border-left: 3px solid red;";
    else if (task.priority === 'M') 
        Task.style.cssText = "border-left: 3px solid orange;";
    else 
        Task.style.cssText = "border-left: 3px solid green;";
    if (task.checked) {
        checkBox.classList.add('checked');
        Task.querySelector('.task-title').classList.add('checked-task');
        Task.querySelector('.task-desc').classList.add('checked-task');
        Task.querySelector('.due-date').classList.add('checked-task');

        const checklist = document.getElementById('checklist-list');
        const checkbar = document.createElement('div');
        checkbar.setAttribute('class', 'checklist-bar');
        checkbar.id = `${openedProject}${Task.id}`;

        const checkBarTaskName = document.createElement('div');
        checkBarTaskName.setAttribute('class', 'project-name');
        checkBarTaskName.innerText = task.title;
        checkbar.appendChild(checkBarTaskName);
        checklist.appendChild(checkbar);
    }
    return Task;
}

function addEventListenerToProjectBar(bar, project) {
    const taskSection = document.getElementById("tasks-section");
    bar.addEventListener('click', () => {
        openedProject = bar.id;
        cleanTasksSection();
        const addTask = document.getElementById("add-task");
        addTask.style.display = "flex";
        const projectTitle = document.createElement('div');
        projectTitle.id = "project-title";
        projectTitle.innerText = project.name;
        taskSection.appendChild(projectTitle);

        const taskGrid = document.createElement('div');
        taskGrid.id = "task-grid";
        taskSection.appendChild(taskGrid);
        project.taskArray.forEach(task => {
            const Task = getTaskCreated(task);
            taskGrid.appendChild(Task);
        });
        console.log(projectList);
    });
}

function appendTaskInList(task) {
    const taskGrid = document.getElementById('task-grid');
    const Task = getTaskCreated(task);
    taskGrid.appendChild(Task);
    getTaskCount();
}

function appendProjectInList(object) {
    const htmlProjectList = document.getElementById('projects-list');

    const projectBar = document.createElement('div');
    projectBar.setAttribute('class', 'project-bar');
    projectBar.id = `${index}`;
    projectBar.style.borderLeft = `3px solid ${object.color}`;
    index++;

    const projectName = document.createElement('div');
    projectName.setAttribute('class', 'project-name');
    projectName.innerText = object.name;
    projectBar.appendChild(projectName);

    const count = document.createElement('div');
    count.setAttribute('class', 'count');
    count.innerText = `${object.taskArray.length}`;
    projectBar.appendChild(count);

    addEventListenerToProjectBar(projectBar, object);

    htmlProjectList.appendChild(projectBar);
}

function addNewProject() {
    const form = document.getElementById('info-input-sec');
    const projectForm = document.getElementById('project-info');
    const taskForm = document.getElementById('task-info');
    
    projectForm.style.display = 'flex';
    taskForm.style.display = "none";
    form.style.right = 0;

    if (!projectEventListenerAdded) {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.getElementById('projectName');
            const projectColor = document.getElementById('projectColor');
            const project = new PROJECT(projectName.value, projectColor.value);
            projectName.value = "";
            projectColor.value = "#000000";
            projectList.push(project);
            localStorage.setItem("data", JSON.stringify(projectList));
            appendProjectInList(project);
            form.style.right = '-700px';
            console.log(projectList);
        });
        projectEventListenerAdded = true;
    }
}

function addNewTask() {
    const form = document.getElementById('info-input-sec');
    const taskForm = document.getElementById('task-info');
    const projectForm = document.getElementById('project-info');
    
    projectForm.style.display = "none";
    taskForm.style.display = 'flex';
    form.style.right = 0;

    if (!taskEventListenerAdded) {
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskName = document.getElementById('taskName');
            const taskDesc = document.getElementById('taskDesc');
            let taskPriority = undefined;
            const taskDate = document.getElementById('taskDate');
            document.getElementsByName('taskPriority').forEach(priority => {
                if (priority.checked)
                    taskPriority = priority.value;
                priority.checked = false;
            });
            const task = new TASK(taskName.value, taskDesc.value, taskDate.value, taskPriority);
            projectList[openedProject].taskArray.push(task);
            localStorage.setItem("data", JSON.stringify(projectList));
            taskName.value = '';
            taskDesc.value = '';
            taskDate.value = '';
            appendTaskInList(task);
            form.style.right = '-700px';
            console.log(projectList);
        });
        taskEventListenerAdded = true;
    }
}

function loadInitials() {
    if (localStorage.getItem("data")) {
        projectList = JSON.parse(localStorage.getItem("data"));
        projectList.forEach(project => {
            appendProjectInList(project);    
        });
        console.log("Data found");
    }
    else {
        projectList = JSON.parse((0,_storage__WEBPACK_IMPORTED_MODULE_1__["default"])());
        localStorage.setItem("data", JSON.stringify(projectList));
        appendProjectInList(projectList[0]);
        console.log("Data not found");
    }
    // localStorage.clear();
    const form = document.getElementById('info-input-sec');
    const cancelBtns = document.querySelectorAll('.cancel-btn');
    cancelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            form.style.right = '-700px';
        });
    });
}



/***/ }),

/***/ "./src/JS/projectSection.js":
/*!**********************************!*\
  !*** ./src/JS/projectSection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectAndTaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectAndTaskManager */ "./src/JS/projectAndTaskManager.js");


function getProjectSection() {
    const projectSection = document.createElement('div');
    projectSection.id = 'projects-section';

    const addProject = document.createElement('div');
    addProject.id = 'add-project';
    addProject.setAttribute('class', 'menu-subtitle');
    addProject.innerText = 'Projects';
    const icon = document.createElement('div');
    icon.setAttribute('class', 'icon');
    addProject.appendChild(icon);

    const projectsList = document.createElement('div');
    projectsList.id = 'projects-list';
    
    addProject.addEventListener('click', () => {
        (0,_projectAndTaskManager__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();
    });

    projectSection.appendChild(addProject);
    projectSection.appendChild(projectsList);
    
    return projectSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProjectSection);

/***/ }),

/***/ "./src/JS/storage.js":
/*!***************************!*\
  !*** ./src/JS/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Data = [
    {
        name: "Dummy Project",
        color: "blue",
        taskArray: [
            {
                title: "Go to Gym",
                desc: "Engage in a productive workout session to boost physical fitness and overall well-being.",
                dueDate: "2024/07/10",
                priority: "H",
                checked: false
            },
            {
                title: "Water the Plants",
                desc: "Nourish the plants to maintain their health and growth.",
                dueDate: "2024/07/9",
                priority: "M",
                checked: false
            },
            {
                title: "Go for swimming",
                desc: "Enjoy a refreshing swim to enhance fitness and relaxation.",
                dueDate: "2024/07/8",
                priority: "L",
                checked: false
            },
            {
                title: "Read 10 pages",
                desc: "Immerse in reading 10 pages to expand knowledge and unwind.",
                dueDate: "2024/07/11",
                priority: "M",
                checked: false
            },
            {
                title: "Keep Growing",
                desc: "Just keep growing and spread positivity everywhere.",
                dueDate: "2024/07/11",
                priority: "H",
                checked: false
            }
        ]
    },
]

function getData() {
    return JSON.stringify(Data);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/JS/taskSection.js":
/*!*******************************!*\
  !*** ./src/JS/taskSection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/plus.png */ "./src/assets/plus.png");
/* harmony import */ var _projectAndTaskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectAndTaskManager */ "./src/JS/projectAndTaskManager.js");



function getTaskSection() {
    const taskSection = document.createElement("div");
    taskSection.id = "tasks-section";

    const addNewTaskBtn = document.createElement('div');
    addNewTaskBtn.id = "add-task";
    const taskBtnImg = document.createElement('img');
    taskBtnImg.src = _assets_plus_png__WEBPACK_IMPORTED_MODULE_0__;
    addNewTaskBtn.appendChild(taskBtnImg);

    addNewTaskBtn.addEventListener('click', () => {
        (0,_projectAndTaskManager__WEBPACK_IMPORTED_MODULE_1__.addNewTask)();
    })

    document.body.appendChild(addNewTaskBtn);

    return taskSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTaskSection);

/***/ }),

/***/ "./src/assets/bin.png":
/*!****************************!*\
  !*** ./src/assets/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b40677c24d99dcfad070.png";

/***/ }),

/***/ "./src/assets/plus.png":
/*!*****************************!*\
  !*** ./src/assets/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "875da9a5daebfe4d8650.png";

/***/ }),

/***/ "./src/assets/tick.png":
/*!*****************************!*\
  !*** ./src/assets/tick.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e28ed21c07f604d4cd5f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/JS/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/JS/main.js");




(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_main__WEBPACK_IMPORTED_MODULE_2__["default"])();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0Qyw2R0FBbUM7QUFDL0UsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlKQUF5Six5QkFBeUI7QUFDbEwseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxL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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEI3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBc0I7QUFDWTtBQUNKO0FBQzlCO0FBQ0EsbURBQVU7QUFDVixpREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL2NoZWNrbGlzdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL21haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9tZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSlMvcHJvamVjdEFuZFRhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSlMvcHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSlMvdGFza1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wbHVzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2Jpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy90aWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZmYW1pbHk9Tm90bytTYW5zOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yOiByZ2IoMjI3LCAyMjcsIDIyNyk7XHJcbiAgICAtLWhvdmVyLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAtLXByaW1hcnktdGV4dC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gICAgLS1zZWNvbmRhci10ZXh0LWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XHJcbiAgICAtLWJ0bi1jb2xvcjogcmdiKDY5LCAyMTIsIDIwMyk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLyogSGVhZGVyIFN0eWxpbmdzICovXHJcblxyXG5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3NpdGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLyogTWFpbiBTdHlsaW5nICovXHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMzUwcHgpIDFmcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogTWVudSBTdHlsaW5nICovXHJcblxyXG4jbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG59XHJcblxyXG4jbWVudS10aXRsZSwgI3Byb2plY3RzLXNlY3Rpb24sICNjaGVja2xpc3Qtc2VjdGlvbiwgLm1lbnUtc3VidGl0bGUsIC5wcm9qZWN0LWJhciwgLmNoZWNrbGlzdC1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1zZWN0aW9uLCAjY2hlY2tsaXN0LXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jcHJvamVjdHMtbGlzdCwgI2NoZWNrbGlzdC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jbWVudS10aXRsZSwgI3Byb2plY3QtdGl0bGUsIC5tZW51LXN1YnRpdGxlLCAuZm9ybS1oZWFkaW5nIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbiNtZW51LXRpdGxlLCAjcHJvamVjdC10aXRsZSwgLmZvcm0taGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1lbnUtc3VidGl0bGUsIC50YXNrLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWVudS1zdWJ0aXRsZSwgLnByb2plY3QtYmFyLCAuY2hlY2tsaXN0LWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJhciwgLmNoZWNrbGlzdC1iYXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJhcjpob3ZlciwgI2FkZC1wcm9qZWN0OmhvdmVyLCAuY2hlY2tsaXN0LWJhcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4uaWNvbiwgLmRlbGV0ZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmRlbGV0ZS1pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIFRhc2sgU2VjdGlvbiBTdHlsaW5nICovXHJcblxyXG4jdGFza3Mtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jdGFzay1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRhc2s6aG92ZXIsIC5zdWJtaXQtYnRuOmhvdmVyLCAuY2FuY2VsLWJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi50YXNrLXRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1heC13aWR0aDogODUlO1xyXG59XHJcblxyXG4udGFzay1kZXNjIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW1zLCAuZXh0cmEtaXRlbXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrLWl0ZW1zIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2hlY2tlZC10YXNrIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4uY2hlY2stYm94OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNoZWNrLWJveC5jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnRhc2stZGVsZXRlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4udGFzay1kZWxldGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4vKiBJbmZvIElucHV0IFNlY3Rpb24gU3R5bGluZyAqL1xyXG5cclxuI2luZm8taW5wdXQtc2VjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTcwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuI3Byb2plY3QtaW5mbywgI3Rhc2staW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyLXRleHQtY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiA1cHg7ICovXHJcbn1cclxuXHJcbmZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuZm9ybSBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1idG4sICNwcmlvcml0aWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4sIC5jYW5jZWwtYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xyXG59XHJcblxyXG4jaCwgI20sICNsIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuI2gge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI20ge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuI2wge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4jYWRkLXRhc2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNhZGQtdGFzazpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbiNhZGQtdGFzayA+IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtC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LGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwLi45MDAmZmFtaWx5PU5vdG8rU2FuczppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiByZ2IoMjI3LCAyMjcsIDIyNyk7XFxyXFxuICAgIC0taG92ZXItY29sb3I6IHJnYigxODgsIDE4OCwgMTg4KTtcXHJcXG4gICAgLS1wcmltYXJ5LXRleHQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXHJcXG4gICAgLS1zZWNvbmRhci10ZXh0LWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxyXFxuICAgIC0tYnRuLWNvbG9yOiByZ2IoNjksIDIxMiwgMjAzKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIFN0eWxpbmdzICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaXRlLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIFN0eWxpbmcgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDM1MHB4KSAxZnI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSBTdHlsaW5nICovXFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxyXFxufVxcclxcblxcclxcbiNtZW51LXRpdGxlLCAjcHJvamVjdHMtc2VjdGlvbiwgI2NoZWNrbGlzdC1zZWN0aW9uLCAubWVudS1zdWJ0aXRsZSwgLnByb2plY3QtYmFyLCAuY2hlY2tsaXN0LWJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtc2VjdGlvbiwgI2NoZWNrbGlzdC1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3QsICNjaGVja2xpc3QtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNtZW51LXRpdGxlLCAjcHJvamVjdC10aXRsZSwgLm1lbnUtc3VidGl0bGUsIC5mb3JtLWhlYWRpbmcge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS10aXRsZSwgI3Byb2plY3QtdGl0bGUsIC5mb3JtLWhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXN1YnRpdGxlLCAudGFzay10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc3VidGl0bGUsIC5wcm9qZWN0LWJhciwgLmNoZWNrbGlzdC1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYmFyLCAuY2hlY2tsaXN0LWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1iYXI6aG92ZXIsICNhZGQtcHJvamVjdDpob3ZlciwgLmNoZWNrbGlzdC1iYXI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24sIC5kZWxldGUtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvcGx1cy5wbmcpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvYmluLnBuZykgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudCB7XFxyXFxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUYXNrIFNlY3Rpb24gU3R5bGluZyAqL1xcclxcblxcclxcbiN0YXNrcy1zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZ3JpZCB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyLCAuc3VibWl0LWJ0bjpob3ZlciwgLmNhbmNlbC1idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXgtd2lkdGg6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzYyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbXMsIC5leHRyYS1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbXMge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stYm94IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZC10YXNrIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLWJveDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy90aWNrLnBuZykgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1ib3guY2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy90aWNrLnBuZykgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlbGV0ZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZWxldGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIEluZm8gSW5wdXQgU2VjdGlvbiBTdHlsaW5nICovXFxyXFxuXFxyXFxuI2luZm8taW5wdXQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAtNzAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWluZm8sICN0YXNrLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhci10ZXh0LWNvbG9yKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDVweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4sICNwcmlvcml0aWVzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biwgLmNhbmNlbC1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2gsICNtLCAjbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2gge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jbSB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbiNsIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayA+IGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGdldENoZWNrbGlzdFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjaGVja2xpc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja2xpc3RTZWN0aW9uLmlkID0gJ2NoZWNrbGlzdC1zZWN0aW9uJztcclxuXHJcbiAgICBjb25zdCBjaGVja0xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0xpc3RIZWFkaW5nLmlkID0gJ2FkZC1jaGVja3MnO1xyXG4gICAgY2hlY2tMaXN0SGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtc3VidGl0bGUnKTtcclxuICAgIGNoZWNrTGlzdEhlYWRpbmcuaW5uZXJUZXh0ID0gJ0NoZWNrbGlzdCc7XHJcbiAgICBjaGVja2xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKGNoZWNrTGlzdEhlYWRpbmcpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrbGlzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrbGlzdExpc3QuaWQgPSAnY2hlY2tsaXN0LWxpc3QnO1xyXG4gICAgY2hlY2tsaXN0U2VjdGlvbi5hcHBlbmRDaGlsZChjaGVja2xpc3RMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gY2hlY2tsaXN0U2VjdGlvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENoZWNrbGlzdFNlY3Rpb247IiwiZnVuY3Rpb24gZ2V0Rm9ybXMoKSB7XHJcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybXMuaWQgPSAnaW5mby1pbnB1dC1zZWMnO1xyXG5cclxuICAgIGZvcm1zLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWhlYWRpbmdcIj5QbGVhc2UgUHJvdmlkZSBQcm9qZWN0IERldGFpbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmb3JtXCIgaWQ9XCJwcm9qZWN0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdE5hbWVcIiBjbGFzcz1cImxhYmVsXCI+UHJvamVjdCBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3ROYW1lXCIgaWQ9XCJwcm9qZWN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RDb2xvclwiIGNsYXNzPVwibGFiZWxcIj5Qcm9qZWN0IENvbG9yOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIG5hbWU9XCJwcm9qZWN0Q29sb3JcIiBpZD1cInByb2plY3RDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ0blwiIHZhbHVlPVwiQWRkIFByb2plY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC1idG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRhc2staW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWhlYWRpbmdcIj5QbGVhc2UgUHJvdmlkZSBUYXNrIERldGFpbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmb3JtXCIgaWQ9XCJ0YXNrLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza05hbWVcIiBjbGFzcz1cImxhYmVsXCI+VGFzayBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tOYW1lXCIgaWQ9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiVGFzayBOYW1lXCIgcmVxdWlyZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrRGVzY1wiIGNsYXNzPVwibGFiZWxcIj5UYXNrIERlc2NyaXB0aW9uOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0YXNrRGVzY1wiIGlkPVwidGFza0Rlc2NcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFRhc2sgRGVzY3JpcHRpb25cIiBjb2xzPVwiNDVcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrUHJpb3JpdHlcIiBjbGFzcz1cImxhYmVsXCI+VGFzayBQcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByaW9yaXRpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eUhcIiB2YWx1ZT1cIkhcIiByZXF1aXJlZD4gPHNwYW4gaWQ9XCJoXCI+SGlnaDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eU1cIiB2YWx1ZT1cIk1cIj4gPHNwYW4gIGlkPVwibVwiPk1lZGl1bTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YXNrUHJpb3JpdHlcIiBpZD1cInRhc2tQcmlvcml0eUxcIiB2YWx1ZT1cIkxcIj4gPHNwYW4gIGlkPVwibFwiPkxvdzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tEYXRlXCIgY2xhc3M9XCJsYWJlbFwiPlRhc2sgRHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidGFza0RhdGVcIiBpZD1cInRhc2tEYXRlXCIgcmVxdWlyZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ0blwiIHZhbHVlPVwiU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYW5jZWwtYnRuXCIgdmFsdWU9XCJDYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZvcm1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9ybXM7IiwiZnVuY3Rpb24gbG9hZEhlYWRlciAoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIk1pbmltYWwgVG8tRG9cIjtcclxuICAgIHRpdGxlLmlkID0gXCJzaXRlLXRpdGxlXCI7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSGVhZGVyOyIsImltcG9ydCBnZXRNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGdldFRhc2tTZWN0aW9uIGZyb20gXCIuL3Rhc2tTZWN0aW9uXCI7XHJcbmltcG9ydCBnZXRGb3JtcyBmcm9tIFwiLi9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBsb2FkSW5pdGlhbHMgfSBmcm9tIFwiLi9wcm9qZWN0QW5kVGFza01hbmFnZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZ2V0TWVudSgpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbiAgICBjb25zdCB0YXNrU2VjdGlvbiA9IGdldFRhc2tTZWN0aW9uKCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tTZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBmb3JtcyA9IGdldEZvcm1zKCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm1zKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gICAgbG9hZEluaXRpYWxzKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWFpbjsiLCJpbXBvcnQgZ2V0UHJvamVjdFNlY3Rpb24gZnJvbSBcIi4vcHJvamVjdFNlY3Rpb25cIjtcclxuaW1wb3J0IGdldENoZWNrbGlzdFNlY3Rpb24gZnJvbSBcIi4vY2hlY2tsaXN0U2VjdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuaWQgPSAnbWVudSc7XHJcblxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VGl0bGUuaWQgPSAnbWVudS10aXRsZSc7XHJcbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZ2V0UHJvamVjdFNlY3Rpb24oKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrbGlzdFNlY3Rpb24gPSBnZXRDaGVja2xpc3RTZWN0aW9uKCk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGNoZWNrbGlzdFNlY3Rpb24pO1xyXG5cclxuICAgIHJldHVybiBtZW51O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVudTsiLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2Jpbi5wbmdcIjtcclxuaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuY2xhc3MgVEFTSyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIFBST0pFQ1Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnRhc2tBcnJheSA9IFtdO1xyXG4gICAgfVxyXG59O1xyXG5cclxubGV0IHByb2plY3RFdmVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcclxubGV0IHRhc2tFdmVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcclxubGV0IGNhbmNlbEV2ZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xyXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcclxubGV0IGluZGV4ID0gMCwgb3BlbmVkUHJvamVjdCwgdGFza0luZGV4ID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNsZWFuVGFza3NTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3Mtc2VjdGlvbicpO1xyXG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbGlzdC1saXN0Jyk7XHJcbiAgICB3aGlsZSAodGFza1NlY3Rpb24uZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHRhc2tTZWN0aW9uLnJlbW92ZUNoaWxkKHRhc2tTZWN0aW9uLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdExpc3Rbb3BlbmVkUHJvamVjdF0udGFza0FycmF5ID0gcHJvamVjdExpc3Rbb3BlbmVkUHJvamVjdF0udGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2sgIT09IHVuZGVmaW5lZCk7XHJcbiAgICB0YXNrSW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKGNoZWNrbGlzdC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY2hlY2tsaXN0LnJlbW92ZUNoaWxkKGNoZWNrbGlzdC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrQ291bnQoKSB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgcHJvamVjdExpc3Rbb3BlbmVkUHJvamVjdF0udGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2sgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3VudFwiKVtvcGVuZWRQcm9qZWN0XS5pbm5lclRleHQgPSBgJHtjb3VudH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrQ3JlYXRlZCh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWdyaWQnKTtcclxuICAgIGxldCBUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUYXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpO1xyXG4gICAgVGFzay5pZCA9IGAke3Rhc2tJbmRleH1gO1xyXG4gICAgdGFza0luZGV4Kys7XHJcbiAgICBUYXNrLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXNjXCI+JHt0YXNrLmRlc2N9PC9kaXY+YDtcclxuXHJcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjay1ib3gnKTtcclxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmICh0YXNrLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgVGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQtdGFzaycpO1xyXG4gICAgICAgICAgICBUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MnKS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkLXRhc2snKTtcclxuICAgICAgICAgICAgVGFzay5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkLXRhc2snKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QtbGlzdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjaGVja2Jhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdC1iYXInKTtcclxuICAgICAgICAgICAgY2hlY2tiYXIuaWQgPSBgJHtvcGVuZWRQcm9qZWN0fSR7VGFzay5pZH1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tCYXJUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjaGVja0JhclRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1uYW1lJyk7XHJcbiAgICAgICAgICAgIGNoZWNrQmFyVGFza05hbWUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcclxuICAgICAgICAgICAgY2hlY2tiYXIuYXBwZW5kQ2hpbGQoY2hlY2tCYXJUYXNrTmFtZSk7XHJcbiAgICAgICAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChjaGVja2Jhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZC10YXNrJyk7XHJcbiAgICAgICAgICAgIFRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stZGVzYycpLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQtdGFzaycpO1xyXG4gICAgICAgICAgICBUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQtdGFzaycpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvcGVuZWRQcm9qZWN0fSR7VGFzay5pZH1gKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBUYXNrLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuXHJcbiAgICBjb25zdCB0YXNrSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0l0ZW1zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1pdGVtcycpO1xyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZS1kYXRlJyk7XHJcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcclxuICAgIHRhc2tJdGVtcy5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tEZWxldGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWRlbGV0ZScpO1xyXG4gICAgdGFza0RlbGV0ZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2RlbGV0ZUljb259XCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPmA7XHJcbiAgICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgSUQgPSB0YXNrRGVsZXRlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IHRhc2tHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IElEKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZC10YXNrJyk7XHJcbiAgICAgICAgICAgICAgICBUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MnKS5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkLXRhc2snKTtcclxuICAgICAgICAgICAgICAgIFRhc2sucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJykuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZC10YXNrJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3Rbb3BlbmVkUHJvamVjdF0udGFza0FycmF5W1Rhc2suaWRdLmNoZWNrZWQgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3BlbmVkUHJvamVjdH0ke1Rhc2suaWR9YCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRhc2suaWQgPSBgJHtpbmRleCAtIDF9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb2plY3RMaXN0W29wZW5lZFByb2plY3RdLnRhc2tBcnJheS5zcGxpY2UoSUQsIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgICAgIGdldFRhc2tDb3VudCgpO1xyXG4gICAgfSk7XHJcbiAgICB0YXNrSXRlbXMuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XHJcbiAgICBUYXNrLmFwcGVuZENoaWxkKHRhc2tJdGVtcyk7XHJcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ0gnKVxyXG4gICAgICAgIFRhc2suc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XCI7XHJcbiAgICBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnTScpIFxyXG4gICAgICAgIFRhc2suc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2U7XCI7XHJcbiAgICBlbHNlIFxyXG4gICAgICAgIFRhc2suc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcIjtcclxuICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcclxuICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICAgICAgVGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQtdGFzaycpO1xyXG4gICAgICAgIFRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stZGVzYycpLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQtdGFzaycpO1xyXG4gICAgICAgIFRhc2sucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJykuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZC10YXNrJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QtbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2hlY2tiYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3QtYmFyJyk7XHJcbiAgICAgICAgY2hlY2tiYXIuaWQgPSBgJHtvcGVuZWRQcm9qZWN0fSR7VGFzay5pZH1gO1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja0JhclRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2hlY2tCYXJUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgICAgIGNoZWNrQmFyVGFza05hbWUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcclxuICAgICAgICBjaGVja2Jhci5hcHBlbmRDaGlsZChjaGVja0JhclRhc2tOYW1lKTtcclxuICAgICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tiYXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRhc2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb1Byb2plY3RCYXIoYmFyLCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0YXNrU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3Mtc2VjdGlvblwiKTtcclxuICAgIGJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBvcGVuZWRQcm9qZWN0ID0gYmFyLmlkO1xyXG4gICAgICAgIGNsZWFuVGFza3NTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIik7XHJcbiAgICAgICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gXCJwcm9qZWN0LXRpdGxlXCI7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tHcmlkLmlkID0gXCJ0YXNrLWdyaWRcIjtcclxuICAgICAgICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrR3JpZCk7XHJcbiAgICAgICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgVGFzayA9IGdldFRhc2tDcmVhdGVkKHRhc2spO1xyXG4gICAgICAgICAgICB0YXNrR3JpZC5hcHBlbmRDaGlsZChUYXNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kVGFza0luTGlzdCh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWdyaWQnKTtcclxuICAgIGNvbnN0IFRhc2sgPSBnZXRUYXNrQ3JlYXRlZCh0YXNrKTtcclxuICAgIHRhc2tHcmlkLmFwcGVuZENoaWxkKFRhc2spO1xyXG4gICAgZ2V0VGFza0NvdW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RJbkxpc3Qob2JqZWN0KSB7XHJcbiAgICBjb25zdCBodG1sUHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWJhcicpO1xyXG4gICAgcHJvamVjdEJhci5pZCA9IGAke2luZGV4fWA7XHJcbiAgICBwcm9qZWN0QmFyLnN0eWxlLmJvcmRlckxlZnQgPSBgM3B4IHNvbGlkICR7b2JqZWN0LmNvbG9yfWA7XHJcbiAgICBpbmRleCsrO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gb2JqZWN0Lm5hbWU7XHJcbiAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb3VudCcpO1xyXG4gICAgY291bnQuaW5uZXJUZXh0ID0gYCR7b2JqZWN0LnRhc2tBcnJheS5sZW5ndGh9YDtcclxuICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoY291bnQpO1xyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJUb1Byb2plY3RCYXIocHJvamVjdEJhciwgb2JqZWN0KTtcclxuXHJcbiAgICBodG1sUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJhcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8taW5wdXQtc2VjJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWluZm8nKTtcclxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5mbycpO1xyXG4gICAgXHJcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZm9ybS5zdHlsZS5yaWdodCA9IDA7XHJcblxyXG4gICAgaWYgKCFwcm9qZWN0RXZlbnRMaXN0ZW5lckFkZGVkKSB7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbG9yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUFJPSkVDVChwcm9qZWN0TmFtZS52YWx1ZSwgcHJvamVjdENvbG9yLnZhbHVlKTtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3IudmFsdWUgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbiAgICAgICAgICAgIGFwcGVuZFByb2plY3RJbkxpc3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIGZvcm0uc3R5bGUucmlnaHQgPSAnLTcwMHB4JztcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb2plY3RFdmVudExpc3RlbmVyQWRkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWlucHV0LXNlYycpO1xyXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbmZvJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWluZm8nKTtcclxuICAgIFxyXG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGZvcm0uc3R5bGUucmlnaHQgPSAwO1xyXG5cclxuICAgIGlmICghdGFza0V2ZW50TGlzdGVuZXJBZGRlZCkge1xyXG4gICAgICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKTtcclxuICAgICAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RhdGUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3Rhc2tQcmlvcml0eScpLmZvckVhY2gocHJpb3JpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRBU0sodGFza05hbWUudmFsdWUsIHRhc2tEZXNjLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3Rbb3BlbmVkUHJvamVjdF0udGFza0FycmF5LnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgICAgICAgICB0YXNrTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB0YXNrRGVzYy52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhcHBlbmRUYXNrSW5MaXN0KHRhc2spO1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLnJpZ2h0ID0gJy03MDBweCc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrRXZlbnRMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEluaXRpYWxzKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSkge1xyXG4gICAgICAgIHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIikpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGFwcGVuZFByb2plY3RJbkxpc3QocHJvamVjdCk7ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShnZXREYXRhKCkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgICAgIGFwcGVuZFByb2plY3RJbkxpc3QocHJvamVjdExpc3RbMF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1pbnB1dC1zZWMnKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsLWJ0bicpO1xyXG4gICAgY2FuY2VsQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLnJpZ2h0ID0gJy03MDBweCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHthZGROZXdQcm9qZWN0LCBhZGROZXdUYXNrLCBsb2FkSW5pdGlhbHN9OyIsImltcG9ydCB7YWRkTmV3UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdEFuZFRhc2tNYW5hZ2VyXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0U2VjdGlvbi5pZCA9ICdwcm9qZWN0cy1zZWN0aW9uJztcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZC1wcm9qZWN0JztcclxuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LXN1YnRpdGxlJyk7XHJcbiAgICBhZGRQcm9qZWN0LmlubmVyVGV4dCA9ICdQcm9qZWN0cyc7XHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xyXG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RzTGlzdC5pZCA9ICdwcm9qZWN0cy1saXN0JztcclxuICAgIFxyXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhZGROZXdQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcclxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9qZWN0U2VjdGlvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFByb2plY3RTZWN0aW9uOyIsImxldCBEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRHVtbXkgUHJvamVjdFwiLFxyXG4gICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICB0YXNrQXJyYXk6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR28gdG8gR3ltXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIkVuZ2FnZSBpbiBhIHByb2R1Y3RpdmUgd29ya291dCBzZXNzaW9uIHRvIGJvb3N0IHBoeXNpY2FsIGZpdG5lc3MgYW5kIG92ZXJhbGwgd2VsbC1iZWluZy5cIixcclxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC8wNy8xMFwiLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiSFwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV2F0ZXIgdGhlIFBsYW50c1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzYzogXCJOb3VyaXNoIHRoZSBwbGFudHMgdG8gbWFpbnRhaW4gdGhlaXIgaGVhbHRoIGFuZCBncm93dGguXCIsXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBcIjIwMjQvMDcvOVwiLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR28gZm9yIHN3aW1taW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIkVuam95IGEgcmVmcmVzaGluZyBzd2ltIHRvIGVuaGFuY2UgZml0bmVzcyBhbmQgcmVsYXhhdGlvbi5cIixcclxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC8wNy84XCIsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFkIDEwIHBhZ2VzXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIkltbWVyc2UgaW4gcmVhZGluZyAxMCBwYWdlcyB0byBleHBhbmQga25vd2xlZGdlIGFuZCB1bndpbmQuXCIsXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBcIjIwMjQvMDcvMTFcIixcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIk1cIixcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIktlZXAgR3Jvd2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzYzogXCJKdXN0IGtlZXAgZ3Jvd2luZyBhbmQgc3ByZWFkIHBvc2l0aXZpdHkgZXZlcnl3aGVyZS5cIixcclxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC8wNy8xMVwiLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiSFwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiaW1wb3J0IGFkZFRhc2tJbWcgZnJvbSBcIi4uL2Fzc2V0cy9wbHVzLnBuZ1wiO1xyXG5pbXBvcnQgeyBhZGROZXdUYXNrIH0gZnJvbSBcIi4vcHJvamVjdEFuZFRhc2tNYW5hZ2VyXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IHRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tTZWN0aW9uLmlkID0gXCJ0YXNrcy1zZWN0aW9uXCI7XHJcblxyXG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkTmV3VGFza0J0bi5pZCA9IFwiYWRkLXRhc2tcIjtcclxuICAgIGNvbnN0IHRhc2tCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRhc2tCdG5JbWcuc3JjID0gYWRkVGFza0ltZztcclxuICAgIGFkZE5ld1Rhc2tCdG4uYXBwZW5kQ2hpbGQodGFza0J0bkltZyk7XHJcblxyXG4gICAgYWRkTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhZGROZXdUYXNrKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tTZWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFza1NlY3Rpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgbG9hZE1haW4gZnJvbSAnLi9tYWluJztcclxuXHJcbmxvYWRIZWFkZXIoKTtcclxubG9hZE1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
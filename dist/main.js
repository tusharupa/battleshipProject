/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.ship = this.createShip();\n    }\n\n    createShip(){\n        let shipArray = new Array(this.length).fill({hit:\"false\"});\n\n        return shipArray;\n    }\n\n    hit(index){\n        this.ship[index].hit = \"true\";\n    }\n    isSunk(){\n        if(this.ship.every(this.checkHit))\n        return true;\n        else\n        return false;\n    }\n    getShip(){\n        return this.ship;\n    }\n    getShipLength(){\n        return this.ship.length;\n    }\n    checkHit(obj){\n        if(obj.hit===\"true\"){\n            return true;\n        }\n        else\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxZQUFZOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwbmV3Ly4vc3JjL1NoaXAuanM/ZjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnNoaXAgPSB0aGlzLmNyZWF0ZVNoaXAoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaGlwKCl7XG4gICAgICAgIGxldCBzaGlwQXJyYXkgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpLmZpbGwoe2hpdDpcImZhbHNlXCJ9KTtcblxuICAgICAgICByZXR1cm4gc2hpcEFycmF5O1xuICAgIH1cblxuICAgIGhpdChpbmRleCl7XG4gICAgICAgIHRoaXMuc2hpcFtpbmRleF0uaGl0ID0gXCJ0cnVlXCI7XG4gICAgfVxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLnNoaXAuZXZlcnkodGhpcy5jaGVja0hpdCkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0U2hpcCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwO1xuICAgIH1cbiAgICBnZXRTaGlwTGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXAubGVuZ3RoO1xuICAgIH1cbiAgICBjaGVja0hpdChvYmope1xuICAgICAgICBpZihvYmouaGl0PT09XCJ0cnVlXCIpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Ship.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\nconsole.log('hello tushar');\n\nconst ship1 = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\nconsole.log(ship1);\nship1.hit(1);\n// ship1.hit(2);\nconsole.log(ship1);\n// console.log(ship1.isSunk());\n// ship1.hit(0);\n// ship1.hit(3);\n// console.log(ship1.isSunk());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEI7QUFDOUI7O0FBRUEsa0JBQWtCLDBDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwbmV3Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9TaGlwLmpzXCJcbmNvbnNvbGUubG9nKCdoZWxsbyB0dXNoYXInKTtcblxuY29uc3Qgc2hpcDEgPSBuZXcgU2hpcCg0KTtcbmNvbnNvbGUubG9nKHNoaXAxKTtcbnNoaXAxLmhpdCgxKTtcbi8vIHNoaXAxLmhpdCgyKTtcbmNvbnNvbGUubG9nKHNoaXAxKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmlzU3VuaygpKTtcbi8vIHNoaXAxLmhpdCgwKTtcbi8vIHNoaXAxLmhpdCgzKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmlzU3VuaygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
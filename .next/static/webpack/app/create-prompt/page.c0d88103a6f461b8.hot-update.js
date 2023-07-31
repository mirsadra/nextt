"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create-prompt/page",{

/***/ "(app-pages-browser)/./app/create-prompt/page.jsx":
/*!************************************!*\
  !*** ./app/create-prompt/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Form */ \"(app-pages-browser)/./components/Form.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // which users are logged in\n\n\nconst CreatePrompt = ()=>{\n    _s();\n    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        prompt: \"\",\n        tag: \"\"\n    });\n    const CreatePrompt = async (e)=>{\n        e.preventDefault(); // to make our prompt function (written in Form.jsx) work, we need to prevent the default behavior of the browser while submitting the form to reload.\n        setSubmitting(true); // we're submitting the form, so we set the submitting to true. We use it as kind of loader.\n        // Focus on creating our first prompt. We need to send a request to our API to create a new prompt. \n        try {\n            var _session;\n            // API call to create a new prompt. (after it, we will create our own API with a separate backend developer.)\n            const response = await fetch(\"/api/prompt/new\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    prompt: post.prompt,\n                    userId: (_session = session) === null || _session === void 0 ? void 0 : _session.user.id,\n                    tag: post.tag\n                })\n            });\n            if (response.ok) {\n                Router.push(\"/\"); // if we have a response, we redirect the user to the homepage.\n            }\n        } catch (error) {\n            console.log(error); // if we have an error, we log it to the console.\n        } finally{\n            setSubmitting(false); // we're done submitting the form, so we set the submitting to false.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"Create\",\n        post: post,\n        setPost: setPost,\n        submitting: submitting,\n        handleSubmit: CreatePrompt\n    }, void 0, false, {\n        fileName: \"/Users/m1pro/nextt/app/create-prompt/page.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreatePrompt, \"htNQUdZCVgMP1jh8oGy6nGrBgRo=\");\n_c = CreatePrompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePrompt);\nvar _c;\n$RefreshReg$(_c, \"CreatePrompt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUtcHJvbXB0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1ksQ0FBRSw0QkFBNEI7QUFDL0I7QUFFVDtBQUVuQyxNQUFNSSxlQUFlOztJQUNuQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO1FBQy9CUyxRQUFRO1FBQ1JDLEtBQUs7SUFDUDtJQUVBLE1BQU1OLGVBQWUsT0FBT087UUFDMUJBLEVBQUVDLGNBQWMsSUFBSyxzSkFBc0o7UUFDM0tOLGNBQWMsT0FBUSw0RkFBNEY7UUFDbEgsb0dBQW9HO1FBQ3BHLElBQUk7Z0JBTVVPO1lBTGxCLDZHQUE2RztZQUN2RyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO2dCQUM5Q0MsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQlYsUUFBUUYsS0FBS0UsTUFBTTtvQkFDbkJXLE1BQU0sR0FBRVAsV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTUSxJQUFJLENBQUNDLEVBQUU7b0JBQ3hCWixLQUFLSCxLQUFLRyxHQUFHO2dCQUNmO1lBQ0Y7WUFFQSxJQUFHSSxTQUFTUyxFQUFFLEVBQUU7Z0JBQ2RDLE9BQU9DLElBQUksQ0FBQyxNQUFPLCtEQUErRDtZQUNwRjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGLFFBQVMsaURBQWlEO1FBQ3hFLFNBQVU7WUFDUnBCLGNBQWMsUUFBUyxxRUFBcUU7UUFDOUY7SUFDRjtJQUVFLHFCQUNBLDhEQUFDSCx1REFBSUE7UUFDRDBCLE1BQUs7UUFDTHRCLE1BQU1BO1FBQ05DLFNBQVNBO1FBQ1RILFlBQVlBO1FBQ1p5QixjQUFjMUI7Ozs7OztBQUd0QjtHQXpDTUE7S0FBQUE7QUEyQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NyZWF0ZS1wcm9tcHQvcGFnZS5qc3g/NDZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7ICAvLyB3aGljaCB1c2VycyBhcmUgbG9nZ2VkIGluXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbXBvcnQgRm9ybSBmcm9tICdjb21wb25lbnRzL0Zvcm0nO1xuXG5jb25zdCBDcmVhdGVQcm9tcHQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe1xuICAgIHByb21wdDogJycsXG4gICAgdGFnOiAnJyxcbiAgfSk7XG4gIFxuICBjb25zdCBDcmVhdGVQcm9tcHQgPSBhc3luYyAoZSkgPT4geyAgLy8gd2UncmUgZ29pbmcgdG8gY3JlYXRlIGEgbmV3IHByb21wdC5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAvLyB0byBtYWtlIG91ciBwcm9tcHQgZnVuY3Rpb24gKHdyaXR0ZW4gaW4gRm9ybS5qc3gpIHdvcmssIHdlIG5lZWQgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYnJvd3NlciB3aGlsZSBzdWJtaXR0aW5nIHRoZSBmb3JtIHRvIHJlbG9hZC5cbiAgICBzZXRTdWJtaXR0aW5nKHRydWUpOyAgLy8gd2UncmUgc3VibWl0dGluZyB0aGUgZm9ybSwgc28gd2Ugc2V0IHRoZSBzdWJtaXR0aW5nIHRvIHRydWUuIFdlIHVzZSBpdCBhcyBraW5kIG9mIGxvYWRlci5cbiAgICAvLyBGb2N1cyBvbiBjcmVhdGluZyBvdXIgZmlyc3QgcHJvbXB0LiBXZSBuZWVkIHRvIHNlbmQgYSByZXF1ZXN0IHRvIG91ciBBUEkgdG8gY3JlYXRlIGEgbmV3IHByb21wdC4gXG4gICAgdHJ5IHtcbi8vIEFQSSBjYWxsIHRvIGNyZWF0ZSBhIG5ldyBwcm9tcHQuIChhZnRlciBpdCwgd2Ugd2lsbCBjcmVhdGUgb3VyIG93biBBUEkgd2l0aCBhIHNlcGFyYXRlIGJhY2tlbmQgZGV2ZWxvcGVyLilcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcHJvbXB0L25ldycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsICAvLyB3ZSdyZSBzZW5kaW5nIGEgUE9TVCByZXF1ZXN0IHRvIG91ciBBUEkuXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgIC8vIHdlJ3JlIHNlbmRpbmcgdGhlIGJvZHkgb2YgdGhlIHJlcXVlc3QgYXMgYSBKU09OIHN0cmluZy5cbiAgICAgICAgICBwcm9tcHQ6IHBvc3QucHJvbXB0LCAgLy8gd2UncmUgc2VuZGluZyB0aGUgcHJvbXB0IG9mIHRoZSBwb3N0LlxuICAgICAgICAgIHVzZXJJZDogc2Vzc2lvbj8udXNlci5pZCwgIC8vIHdlJ3JlIGNoZWNraW5nIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBgc2Vzc2lvbj9gLiBJZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4sIHdlJ3JlIHNlbmRpbmcgdGhlIHVzZXIgaWQuXG4gICAgICAgICAgdGFnOiBwb3N0LnRhZywgIC8vIHdlJ3JlIHNlbmRpbmcgdGhlIHRhZyBvZiB0aGUgcG9zdC5cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGlmKHJlc3BvbnNlLm9rKSB7ICAvLyBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UsIHdlIGNoZWNrIGlmIHRoZSByZXNwb25zZSBpcyBvay5cbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTsgIC8vIGlmIHdlIGhhdmUgYSByZXNwb25zZSwgd2UgcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGhvbWVwYWdlLlxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7ICBcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgIC8vIGlmIHdlIGhhdmUgYW4gZXJyb3IsIHdlIGxvZyBpdCB0byB0aGUgY29uc29sZS5cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7ICAvLyB3ZSdyZSBkb25lIHN1Ym1pdHRpbmcgdGhlIGZvcm0sIHNvIHdlIHNldCB0aGUgc3VibWl0dGluZyB0byBmYWxzZS5cbiAgICB9XG4gIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDxGb3JtIFxuICAgICAgICB0eXBlPVwiQ3JlYXRlXCJcbiAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgc2V0UG9zdD17c2V0UG9zdH1cbiAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgaGFuZGxlU3VibWl0PXtDcmVhdGVQcm9tcHR9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcm9tcHQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiRm9ybSIsIkNyZWF0ZVByb21wdCIsInN1Ym1pdHRpbmciLCJzZXRTdWJtaXR0aW5nIiwicG9zdCIsInNldFBvc3QiLCJwcm9tcHQiLCJ0YWciLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcklkIiwidXNlciIsImlkIiwib2siLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImhhbmRsZVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create-prompt/page.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/asking/page",{

/***/ "(app-pages-browser)/./app/asking/page.tsx":
/*!*****************************!*\
  !*** ./app/asking/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Asking; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/asking/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/react/hooks/useMutation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation CreateQuestion($title: String!, $text: String!) {\\n    createQuestion(title: $title, text: $text) {\\n      question {\\n        id\\n        title\\n        text\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CREATE_QUESTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());\nfunction Asking() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [createQuestion, { loading, error }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_QUESTION);\n    const handleAsk = ()=>{\n        router.push(\"/asking\");\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!title.trim() || !text.trim()) {\n            alert(\"Please enter both a title and a question\");\n            return;\n        }\n        try {\n            const result = await createQuestion({\n                variables: {\n                    title,\n                    text\n                }\n            });\n            console.log(\"Question created:\", result.data.createQuestion);\n            setTitle(\"\");\n            setText(\"\");\n            alert(\"Question submitted successfully!\");\n            router.push(\"/dashboard\");\n        } catch (err) {\n            console.error(\"Error creating question:\", err);\n            alert(\"Failed to submit question. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().iconContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                                src: \"/icon.png\",\n                                alt: \"profile pic\",\n                                width: 50,\n                                height: 50\n                            }, void 0, false, {\n                                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            \"Pseudo near expert\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                            onClick: handleAsk,\n                            children: \"Ask a question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"New Question\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginForm),\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Question title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().textarea),\n                                placeholder: \"Enter your question here\",\n                                value: text,\n                                onChange: (e)=>setText(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                type: \"submit\",\n                                disabled: loading,\n                                children: loading ? \"Submitting...\" : \"Submit Question\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"error\",\n                                children: [\n                                    \"Error: \",\n                                    error.message\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sid/Documents/gleenDemo/helix_web/app/asking/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Asking, \"ansczw3yjXTUiCquxHJUFyV60nY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = Asking;\nvar _c;\n$RefreshReg$(_c, \"Asking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hc2tpbmcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0M7QUFDTTtBQUNiO0FBQ21CO0FBQ2pCO0FBRWpDLE1BQU1NLGtCQUFrQkgsbURBQUdBO0FBWVosU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsZ0JBQWdCLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFLENBQUMsR0FBR1gsMkRBQVdBLENBQUNFO0lBRXpELE1BQU1VLFlBQVk7UUFDaEJSLE9BQU9TLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJLENBQUNYLE1BQU1ZLElBQUksTUFBTSxDQUFDVixLQUFLVSxJQUFJLElBQUk7WUFDakNDLE1BQU07WUFDTjtRQUNGO1FBQ0EsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTVYsZUFBZTtnQkFBRVcsV0FBVztvQkFBRWY7b0JBQU9FO2dCQUFLO1lBQUU7WUFDakVjLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJILE9BQU9JLElBQUksQ0FBQ2QsY0FBYztZQUMzREgsU0FBUztZQUNURSxRQUFRO1lBQ1JVLE1BQU07WUFDTmQsT0FBT1MsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPVyxLQUFLO1lBQ1pILFFBQVFWLEtBQUssQ0FBQyw0QkFBNEJhO1lBQzFDTixNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXOUIsdUVBQW9COzswQkFDbEMsOERBQUM2QjtnQkFBSUMsV0FBVzlCLGdFQUFhOztrQ0FDM0IsOERBQUM2Qjt3QkFBSUMsV0FBVzlCLHVFQUFvQjs7MENBQ2xDLDhEQUFDRSxrREFBS0E7Z0NBQ0o0QixXQUFXOUIsOERBQVc7Z0NBQ3RCbUMsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7OzRCQUNSOzs7Ozs7O2tDQUdKLDhEQUFDVDtrQ0FDQyw0RUFBQ1U7NEJBQU9ULFdBQVc5QixnRUFBYTs0QkFBRXdDLFNBQVN4QjtzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3hELDhEQUFDYTtnQkFBSUMsV0FBVzlCLHdFQUFxQjs7a0NBQ3JDLDhEQUFDMEM7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUtiLFdBQVc5QixtRUFBZ0I7d0JBQUU2QyxVQUFVM0I7OzBDQUMzQyw4REFBQzRCO2dDQUNDQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPeEM7Z0NBQ1B5QyxVQUFVLENBQUMvQixJQUFNVCxTQUFTUyxFQUFFZ0MsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q0csUUFBUTs7Ozs7OzBDQUVWLDhEQUFDQztnQ0FDQ3ZCLFdBQVc5QixrRUFBZTtnQ0FDMUJnRCxhQUFZO2dDQUNaQyxPQUFPdEM7Z0NBQ1B1QyxVQUFVLENBQUMvQixJQUFNUCxRQUFRTyxFQUFFZ0MsTUFBTSxDQUFDRixLQUFLO2dDQUN2Q0csUUFBUTs7Ozs7OzBDQUVWLDhEQUFDYjtnQ0FBT1QsV0FBVzlCLGdFQUFhO2dDQUFFK0MsTUFBSztnQ0FBU08sVUFBVXhDOzBDQUN2REEsVUFBVSxrQkFBa0I7Ozs7Ozs0QkFFOUJDLHVCQUFTLDhEQUFDd0M7Z0NBQUV6QixXQUFVOztvQ0FBUTtvQ0FBUWYsTUFBTXlDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUQ7R0F6RXdCakQ7O1FBQ1BOLHNEQUFTQTtRQUdxQkcsdURBQVdBOzs7S0FKbENHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hc2tpbmcvcGFnZS50c3g/NjU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ1JFQVRFX1FVRVNUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVRdWVzdGlvbigkdGl0bGU6IFN0cmluZyEsICR0ZXh0OiBTdHJpbmchKSB7XG4gICAgY3JlYXRlUXVlc3Rpb24odGl0bGU6ICR0aXRsZSwgdGV4dDogJHRleHQpIHtcbiAgICAgIHF1ZXN0aW9uIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNraW5nKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjcmVhdGVRdWVzdGlvbiwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9RVUVTVElPTik7XG5cbiAgY29uc3QgaGFuZGxlQXNrID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL2Fza2luZ1wiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGl0bGUudHJpbSgpIHx8ICF0ZXh0LnRyaW0oKSkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYm90aCBhIHRpdGxlIGFuZCBhIHF1ZXN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlUXVlc3Rpb24oeyB2YXJpYWJsZXM6IHsgdGl0bGUsIHRleHQgfSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gY3JlYXRlZDpcIiwgcmVzdWx0LmRhdGEuY3JlYXRlUXVlc3Rpb24pO1xuICAgICAgc2V0VGl0bGUoXCJcIik7XG4gICAgICBzZXRUZXh0KFwiXCIpO1xuICAgICAgYWxlcnQoXCJRdWVzdGlvbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBxdWVzdGlvbjpcIiwgZXJyKTtcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHN1Ym1pdCBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICBzcmM9XCIvaWNvbi5wbmdcIlxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZSBwaWNcIlxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIFBzZXVkbyBuZWFyIGV4cGVydFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQXNrfT5cbiAgICAgICAgICAgIEFzayBhIHF1ZXN0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Db250YWluZXJ9PlxuICAgICAgICA8aDM+TmV3IFF1ZXN0aW9uPC9oMz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVlc3Rpb24gdGl0bGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJTdWJtaXR0aW5nLi4uXCIgOiBcIlN1Ym1pdCBRdWVzdGlvblwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvclwiPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+fVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsImdxbCIsInVzZU11dGF0aW9uIiwidXNlU3RhdGUiLCJDUkVBVEVfUVVFU1RJT04iLCJBc2tpbmciLCJyb3V0ZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwidGV4dCIsInNldFRleHQiLCJjcmVhdGVRdWVzdGlvbiIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZUFzayIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiYWxlcnQiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImZsZXhDb250YWluZXIiLCJoZWFkZXIiLCJpY29uQ29udGFpbmVyIiwiaWNvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayIsImxvZ2luQ29udGFpbmVyIiwiaDMiLCJmb3JtIiwibG9naW5Gb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiZGlzYWJsZWQiLCJwIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/asking/page.tsx\n"));

/***/ })

});
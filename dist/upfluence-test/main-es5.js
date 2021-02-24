function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_upfluence_sse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/upfluence-sse.service */
    "./src/app/services/upfluence-sse.service.ts");
    /* harmony import */


    var _punch_card_punch_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./punch-card/punch-card.component */
    "./src/app/punch-card/punch-card.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(sseService) {
        _classCallCheck(this, AppComponent);

        this.sseService = sseService;
        this.title = 'upfluence-test';
        this.notifyChild = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSocialPosts();
        }
      }, {
        key: "getSocialPosts",
        value: function getSocialPosts() {
          var _this = this;

          this.sseService.getStream().subscribe(function (socialPost) {
            _this.notifyChild.next(socialPost);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upfluence_sse_service__WEBPACK_IMPORTED_MODULE_2__["UpfluenceSseService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 1,
      consts: [[1, "toolbar"], ["alt", "Upfluence Logo", "src", "assets/images/logo.png"], [1, "title"], [1, "content"], [3, "inputSocialPost"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Coding Challenge.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "punch-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputSocialPost", ctx.notifyChild.asObservable());
        }
      },
      directives: [_punch_card_punch_card_component__WEBPACK_IMPORTED_MODULE_3__["PunchCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-image: url('/assets/images/background.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n@font-face {\n  font-family: \"eesti\";\n  font-style: normal;\n  src: url('/assets/fonts/GTEestiProText-Regular.ttf') format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"eesti-bold\";\n  font-style: bold;\n  src: url('/assets/fonts/GTEestiProText-Bold.ttf') format(\"truetype\");\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  background-color: #f4f5ff;\n  color: white;\n  font-weight: 600;\n  border-bottom: 1px solid #ececec;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 40px;\n  width: 120px;\n}\n\n.toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"eesti\";\n  color: black;\n  font-size: 18px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvUHJvamVjdHMvVXBmbHVlbmNlLXRlc3Qvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4L1Byb2plY3RzL1VwZmx1ZW5jZS10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0VBQUE7QUNKRjs7QUNyQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkZNZTtFRUxmLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FEdUJGOztBQ3BCQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FEdUJGOztBQ3BCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUR1QkY7O0FDcEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUR1QkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwofi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4kdXBmbHVlbmNlLWJsdWU6ICMwZDBlZTY7XG4kdXBmbHVlbmNlLW9yYW5nZTogI2ZmNDMzMTtcbiR1cGZsdWVuY2UtZ3JleTogI2Y0ZjVmZjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVlc3RpXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJ+L2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvVGV4dC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVlc3RpLWJvbGRcIjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgc3JjOiB1cmwoXCJ+L2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvVGV4dC1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbiIsImh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCh+L2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJlZXN0aVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwifi9hc3NldHMvZm9udHMvR1RFZXN0aVByb1RleHQtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZWVzdGktYm9sZFwiO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBzcmM6IHVybChcIn4vYXNzZXRzL2ZvbnRzL0dURWVzdGlQcm9UZXh0LUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnRvb2xiYXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZWVzdGlcIjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJAaW1wb3J0IFwiLi4vc3R5bGVzLnNjc3NcIjtcbi50b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR1cGZsdWVuY2UtZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnRvb2xiYXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdlZXN0aSc7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_upfluence_sse_service__WEBPACK_IMPORTED_MODULE_2__["UpfluenceSseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _services_upfluence_sse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/upfluence-sse.service */
    "./src/app/services/upfluence-sse.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _punch_card_punch_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./punch-card/punch-card.component */
    "./src/app/punch-card/punch-card.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_upfluence_sse_service__WEBPACK_IMPORTED_MODULE_0__["UpfluenceSseService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _punch_card_punch_card_component__WEBPACK_IMPORTED_MODULE_8__["PunchCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]],
          providers: [_services_upfluence_sse_service__WEBPACK_IMPORTED_MODULE_0__["UpfluenceSseService"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _punch_card_punch_card_component__WEBPACK_IMPORTED_MODULE_8__["PunchCardComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/day.model.ts":
  /*!*************************************!*\
    !*** ./src/app/models/day.model.ts ***!
    \*************************************/

  /*! exports provided: weekdays, hoursLabels */

  /***/
  function srcAppModelsDayModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "weekdays", function () {
      return weekdays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hoursLabels", function () {
      return hoursLabels;
    });

    var weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var hoursLabels = ['Midnight', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
    /***/
  },

  /***/
  "./src/app/models/social-post.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/social-post.model.ts ***!
    \*********************************************/

  /*! exports provided: SocialPostTypes, SocialPost, FacebookStatus, Tweet, Pin, Article, InstagramMedia, YoutubeVideo */

  /***/
  function srcAppModelsSocialPostModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialPostTypes", function () {
      return SocialPostTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialPost", function () {
      return SocialPost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacebookStatus", function () {
      return FacebookStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tweet", function () {
      return Tweet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pin", function () {
      return Pin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Article", function () {
      return Article;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstagramMedia", function () {
      return InstagramMedia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeVideo", function () {
      return YoutubeVideo;
    });

    var SocialPostTypes = ['FacebookStatus', 'Tweet', 'Pin', 'Article', 'InstagramMedia', 'YoutubeVideo'];

    var SocialPost = function SocialPost() {
      _classCallCheck(this, SocialPost);
    };

    var FacebookStatus = /*#__PURE__*/function (_SocialPost) {
      _inherits(FacebookStatus, _SocialPost);

      var _super = _createSuper(FacebookStatus);

      function FacebookStatus(obj) {
        var _this2;

        _classCallCheck(this, FacebookStatus);

        _this2 = _super.call(this);
        Object.assign(_assertThisInitialized(_this2), obj);
        return _this2;
      }

      return FacebookStatus;
    }(SocialPost);

    var Tweet = /*#__PURE__*/function (_SocialPost2) {
      _inherits(Tweet, _SocialPost2);

      var _super2 = _createSuper(Tweet);

      function Tweet(obj) {
        var _this3;

        _classCallCheck(this, Tweet);

        _this3 = _super2.call(this);
        Object.assign(_assertThisInitialized(_this3), obj);
        return _this3;
      }

      return Tweet;
    }(SocialPost);

    var Pin = /*#__PURE__*/function (_SocialPost3) {
      _inherits(Pin, _SocialPost3);

      var _super3 = _createSuper(Pin);

      function Pin(obj) {
        var _this4;

        _classCallCheck(this, Pin);

        _this4 = _super3.call(this);
        Object.assign(_assertThisInitialized(_this4), obj);
        return _this4;
      }

      return Pin;
    }(SocialPost);

    var Article = /*#__PURE__*/function (_SocialPost4) {
      _inherits(Article, _SocialPost4);

      var _super4 = _createSuper(Article);

      function Article(obj) {
        var _this5;

        _classCallCheck(this, Article);

        _this5 = _super4.call(this);
        Object.assign(_assertThisInitialized(_this5), obj);
        return _this5;
      }

      return Article;
    }(SocialPost);

    var InstagramMedia = /*#__PURE__*/function (_SocialPost5) {
      _inherits(InstagramMedia, _SocialPost5);

      var _super5 = _createSuper(InstagramMedia);

      function InstagramMedia(obj) {
        var _this6;

        _classCallCheck(this, InstagramMedia);

        _this6 = _super5.call(this);
        Object.assign(_assertThisInitialized(_this6), obj);
        return _this6;
      }

      return InstagramMedia;
    }(SocialPost);

    var YoutubeVideo = /*#__PURE__*/function (_SocialPost6) {
      _inherits(YoutubeVideo, _SocialPost6);

      var _super6 = _createSuper(YoutubeVideo);

      function YoutubeVideo(obj) {
        var _this7;

        _classCallCheck(this, YoutubeVideo);

        _this7 = _super6.call(this);
        Object.assign(_assertThisInitialized(_this7), obj);
        return _this7;
      }

      return YoutubeVideo;
    }(SocialPost);
    /***/

  },

  /***/
  "./src/app/punch-card/punch-card.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/punch-card/punch-card.component.ts ***!
    \****************************************************/

  /*! exports provided: PunchCardComponent */

  /***/
  function srcAppPunchCardPunchCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PunchCardComponent", function () {
      return PunchCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_day_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/day.model */
    "./src/app/models/day.model.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PunchCardComponent_img_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PunchCardComponent_img_3_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.stopSubscription();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PunchCardComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PunchCardComponent_img_4_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.restartSubscription();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PunchCardComponent_div_7_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.hoverDetails(hour_r11), " ");
      }
    }

    function PunchCardComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PunchCardComponent_div_7_div_3_Template_div_mouseenter_0_listener() {
          var hour_r11 = ctx.$implicit;
          return hour_r11.showHover = true;
        })("mouseleave", function PunchCardComponent_div_7_div_3_Template_div_mouseleave_0_listener() {
          var hour_r11 = ctx.$implicit;
          return hour_r11.showHover = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PunchCardComponent_div_7_div_3_div_2_Template, 2, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r10.getCircleSize(hour_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hour_r11.showHover);
      }
    }

    function PunchCardComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PunchCardComponent_div_7_div_3_Template, 3, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r9.dayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r9.hours);
      }
    }

    function PunchCardComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r16, " ");
      }
    }

    function PunchCardComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PunchCardComponent_div_12_Template_mat_checkbox_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var socialPost_r17 = ctx.$implicit;
          return socialPost_r17.value.show = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var socialPost_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", socialPost_r17.value.show)("color", "primary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", socialPost_r17.key, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", socialPost_r17.value.counter, " ");
      }
    }

    var PunchCardComponent = /*#__PURE__*/function () {
      function PunchCardComponent() {
        _classCallCheck(this, PunchCardComponent);

        this.running = true;
        this.weekdayArray = [];
        this.totalSocialPostsProcessed = 0;
        this.hoursLabels = _models_day_model__WEBPACK_IMPORTED_MODULE_1__["hoursLabels"];
        this.socialPostCounter = {
          'FacebookStatus': {},
          'Tweet': {},
          'Pin': {},
          'Article': {},
          'InstagramMedia': {},
          'YoutubeVideo': {}
        };
      }

      _createClass(PunchCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initWeekdayArray();
          this.counterInit();
          this.initSubscription();
        }
      }, {
        key: "getCircleSize",
        value: function getCircleSize(postArray) {
          if (postArray.length === 0) {
            return {
              height: '0%',
              width: '0%'
            };
          }

          var activeLegendSPs = this.getNumberOfPostsBasedOnUserFilters(postArray);
          var sizeInPercentage = activeLegendSPs * 20;
          return {
            height: sizeInPercentage + '%',
            width: sizeInPercentage + '%'
          };
        }
      }, {
        key: "hoverDetails",
        value: function hoverDetails(postArray) {
          return 'Number of Social posts ' + this.getNumberOfPostsBasedOnUserFilters(postArray);
        }
      }, {
        key: "stopSubscription",
        value: function stopSubscription() {
          this.running = false;
          this.subscription.unsubscribe();
        }
      }, {
        key: "restartSubscription",
        value: function restartSubscription() {
          this.weekdayArray = [];
          this.initWeekdayArray();
          this.counterInit();
          this.totalSocialPostsProcessed = 0;
          this.running = true;
          this.initSubscription();
        }
      }, {
        key: "getNumberOfPostsBasedOnUserFilters",
        value: function getNumberOfPostsBasedOnUserFilters(postArray) {
          var _this8 = this;

          return postArray.filter(function (spType) {
            return Object.keys(_this8.socialPostCounter).filter(function (key) {
              return key === spType.constructor.name && _this8.socialPostCounter[key].show === true;
            }).length !== 0;
          }).length;
        }
      }, {
        key: "initSubscription",
        value: function initSubscription() {
          var _this9 = this;

          this.subscription = this.inputSocialPost.subscribe(function (post) {
            _this9.addPostToDay(post);
          });
        }
      }, {
        key: "addPostToDay",
        value: function addPostToDay(post) {
          var timestamp = moment__WEBPACK_IMPORTED_MODULE_2__["unix"](post.timestamp);
          this.totalSocialPostsProcessed++;
          this.socialPostCounter[post.constructor.name].counter++;
          this.weekdayArray[timestamp.day()].hours[timestamp.hour()].push(post);
        }
      }, {
        key: "initWeekdayArray",
        value: function initWeekdayArray() {
          var _this10 = this;

          _models_day_model__WEBPACK_IMPORTED_MODULE_1__["weekdays"].forEach(function (day) {
            _this10.weekdayArray.push({
              dayName: day,
              hours: _this10.initAllHours()
            });
          });
        }
      }, {
        key: "initAllHours",
        value: function initAllHours() {
          var hourArray = [];

          for (var i = 0; i < 24; ++i) {
            hourArray.push([]);
          }

          return hourArray;
        }
      }, {
        key: "counterInit",
        value: function counterInit() {
          var _this11 = this;

          Object.keys(this.socialPostCounter).forEach(function (socialPost) {
            _this11.socialPostCounter[socialPost] = {
              counter: 0,
              show: true
            };
          });
        }
      }]);

      return PunchCardComponent;
    }();

    PunchCardComponent.ɵfac = function PunchCardComponent_Factory(t) {
      return new (t || PunchCardComponent)();
    };

    PunchCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PunchCardComponent,
      selectors: [["punch-card"]],
      inputs: {
        inputSocialPost: "inputSocialPost"
      },
      decls: 20,
      vars: 8,
      consts: [["fxLayout", "column", 1, "container"], ["fxLayoutAlign", "center center", 1, "title"], ["src", "assets/icons/stop-button.png", 3, "click", 4, "ngIf"], ["src", "assets/icons/update-arrow.png", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "chart"], [1, "values"], ["fxLayout", "row", "fxLayoutAlign", "start center", "class", "day-row", "fxLayoutGap", "5px", 4, "ngFor", "ngForOf"], ["fxLayout", "row"], ["fxFlex", "85px"], ["class", "legend-hour", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "15", 1, "legend"], [4, "ngFor", "ngForOf"], ["fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], [1, "total-label"], ["fxFlex", "", 1, "total-amount"], ["src", "assets/icons/stop-button.png", 3, "click"], ["src", "assets/icons/update-arrow.png", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", 1, "day-row"], ["fxLayoutAlign", "center end", 1, "day-name"], ["class", "day-value", "fxLayoutAlign", "center center", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "center center", 1, "day-value", 3, "mouseenter", "mouseleave"], [1, "punch-circle", 3, "ngStyle"], ["class", "hover-data", 4, "ngIf"], [1, "hover-data"], [1, "legend-hour"], [3, "ngModel", "color", "ngModelChange"]],
      template: function PunchCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Social Post Activity per Day & Hour (in Real-time from Stream) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PunchCardComponent_img_3_Template, 1, 0, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PunchCardComponent_img_4_Template, 1, 0, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PunchCardComponent_div_7_Template, 4, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PunchCardComponent_div_10_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PunchCardComponent_div_12_Template, 5, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Total Number of Social Posts : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.running);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.running);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weekdayArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hoursLabels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.socialPostCounter));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalSocialPostsProcessed, " ");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-image: url('/assets/images/background.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n@font-face {\n  font-family: \"eesti\";\n  font-style: normal;\n  src: url('/assets/fonts/GTEestiProText-Regular.ttf') format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"eesti-bold\";\n  font-style: bold;\n  src: url('/assets/fonts/GTEestiProText-Bold.ttf') format(\"truetype\");\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #0d0ee6 !important;\n}\n\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #0d0ee6 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 20px;\n  border-radius: 4px;\n  margin: 20px;\n  min-width: 1250px;\n}\n\n.chart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.values[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.punch-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  max-width: 100% !important;\n  max-height: 100% !important;\n  background-color: black;\n}\n\n.hover-data[_ngcontent-%COMP%] {\n  background-color: #0d0ee6;\n  z-index: 100;\n  position: absolute;\n  padding: 10px;\n  border-radius: 4px;\n  color: white;\n  margin-top: 120px;\n  width: 80px;\n  text-align: center;\n}\n\n.hover-data[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  border-width: 10px 12px;\n  border-color: transparent transparent #0d0ee6 transparent;\n  left: 38px;\n  top: -20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  font-family: \"eesti-bold\";\n  font-size: 20px;\n}\n\n.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.day-row[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.day-name[_ngcontent-%COMP%] {\n  width: 80px;\n  transform: rotate(-45deg);\n  font-family: \"eesti\";\n  text-align: right;\n}\n\n.day-value[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  max-height: 100%;\n  max-width: 100%;\n  border: 1px solid #ECECEC;\n  cursor: pointer;\n}\n\n.legend[_ngcontent-%COMP%] {\n  font-family: \"eesti\";\n}\n\n.legend-hour[_ngcontent-%COMP%] {\n  font-family: \"eesti\";\n  width: 40px;\n  height: 40px;\n  margin-top: 20px;\n  text-align: center;\n  transform: rotate(-45deg);\n}\n\n.total-label[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.total-amount[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 40px;\n}\n\n  .mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #0d0ee6 !important;\n}\n\n  .mat-checkbox:not(.mat-checkbox-disabled) .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #0d0ee6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvUHJvamVjdHMvVXBmbHVlbmNlLXRlc3Qvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9wdW5jaC1jYXJkL3B1bmNoLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4L1Byb2plY3RzL1VwZmx1ZW5jZS10ZXN0L3NyYy9hcHAvcHVuY2gtY2FyZC9wdW5jaC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtFQUNBLHNEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0VBQUE7QUNKRjs7QUNwQkE7RUFDRSxXQUFBO0FEc0JGOztBQ25CQTtFQUNFLGdDQUFBO0FEc0JGOztBQ25CQTtFQUNFLDBCQUFBO0FEc0JGOztBQ25CQTtFQUNFLCtHQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURzQkY7O0FDbkJBO0VBQ0UsV0FBQTtBRHNCRjs7QUNuQkE7RUFDRSxXQUFBO0FEc0JGOztBQ25CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QURzQkY7O0FDbkJBO0VBQ0UseUJGNUJlO0VFNkJmLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRHNCRjs7QUNuQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseURBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRHNCRjs7QUNuQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURzQkY7O0FDbkJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURzQkY7O0FDbkJBO0VBQ0UsWUFBQTtBRHNCRjs7QUNuQkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FEc0JGOztBQ25CQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FEc0JGOztBQ25CQTtFQUNFLG9CQUFBO0FEc0JGOztBQ25CQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURzQkY7O0FDbkJBO0VBQ0UsWUFBQTtBRHNCRjs7QUNuQkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QURzQkY7O0FDbkJBOztFQUVFLG9DQUFBO0FEc0JGOztBQ2xCQTtFQUNFLG9DQUFBO0FEcUJGIiwiZmlsZSI6InNyYy9hcHAvcHVuY2gtY2FyZC9wdW5jaC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuJHVwZmx1ZW5jZS1ibHVlOiAjMGQwZWU2O1xuJHVwZmx1ZW5jZS1vcmFuZ2U6ICNmZjQzMzE7XG4kdXBmbHVlbmNlLWdyZXk6ICNmNGY1ZmY7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJlZXN0aVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKFwifi9hc3NldHMvZm9udHMvR1RFZXN0aVByb1RleHQtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJlZXN0aS1ib2xkXCI7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHNyYzogdXJsKFwifi9hc3NldHMvZm9udHMvR1RFZXN0aVByb1RleHQtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4iLCJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwofi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZWVzdGlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybChcIn4vYXNzZXRzL2ZvbnRzL0dURWVzdGlQcm9UZXh0LVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVlc3RpLWJvbGRcIjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgc3JjOiB1cmwoXCJ+L2Fzc2V0cy9mb250cy9HVEVlc3RpUHJvVGV4dC1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6ICMwZDBlZTYgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogIzBkMGVlNiAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4td2lkdGg6IDEyNTBweDtcbn1cblxuLmNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52YWx1ZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnB1bmNoLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5ob3Zlci1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGVlNjtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvdmVyLWRhdGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDEwcHggMTJweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMGQwZWU2IHRyYW5zcGFyZW50O1xuICBsZWZ0OiAzOHB4O1xuICB0b3A6IC0yMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImVlc3RpLWJvbGRcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRheS1yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5kYXktbmFtZSB7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBmb250LWZhbWlseTogXCJlZXN0aVwiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRheS12YWx1ZSB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VDRUNFQztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiZWVzdGlcIjtcbn1cblxuLmxlZ2VuZC1ob3VyIHtcbiAgZm9udC1mYW1pbHk6IFwiZWVzdGlcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4udG90YWwtbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi50b3RhbC1hbW91bnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZWU2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGVlNiAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiAkdXBmbHVlbmNlLWJsdWUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogJHVwZmx1ZW5jZS1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIG1pbi13aWR0aDogMTI1MHB4O1xufVxuXG4uY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZhbHVlcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHVuY2gtY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmhvdmVyLWRhdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBmbHVlbmNlLWJsdWU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob3Zlci1kYXRhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEycHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJHVwZmx1ZW5jZS1ibHVlIHRyYW5zcGFyZW50O1xuICBsZWZ0OiAzOHB4O1xuICB0b3A6IC0yMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnZWVzdGktYm9sZCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpdGxlIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXktcm93IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZGF5LW5hbWUge1xuICB3aWR0aDogODBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgZm9udC1mYW1pbHk6ICdlZXN0aSc7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGF5LXZhbHVlIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUNFQ0VDO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZWdlbmQge1xuICBmb250LWZhbWlseTogJ2Vlc3RpJztcbn1cblxuLmxlZ2VuZC1ob3VyIHtcbiAgZm9udC1mYW1pbHk6ICdlZXN0aSc7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLnRvdGFsLWxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4udG90YWwtYW1vdW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIFxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR1cGZsdWVuY2UtYmx1ZSAhaW1wb3J0YW50O1xufVxuXG4vLyBvdmVyd3JpdGUgdGhlIHJpcHBsZSBvdmVybGF5IG9uIGhvdmVyIGFuZCBjbGlja1xuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBmbHVlbmNlLWJsdWUgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PunchCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'punch-card',
          templateUrl: './punch-card.component.html',
          styleUrls: ['./punch-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        inputSocialPost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/upfluence-sse.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/upfluence-sse.service.ts ***!
    \***************************************************/

  /*! exports provided: UpfluenceSseService */

  /***/
  function srcAppServicesUpfluenceSseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpfluenceSseService", function () {
      return UpfluenceSseService;
    });
    /* harmony import */


    var _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../models/social-post.model */
    "./src/app/models/social-post.model.ts");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UpfluenceSseService = /*#__PURE__*/function () {
      function UpfluenceSseService() {
        _classCallCheck(this, UpfluenceSseService);
      }

      _createClass(UpfluenceSseService, [{
        key: "getStream",
        value: function getStream() {
          var _this12 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (obs) {
            var eventSource = _this12.getEventSource();

            eventSource.addEventListener('message', function (event) {
              var socialPost = JSON.parse(event.data);
              if (Object.keys(socialPost).length) obs.next(_this12.getTypeFromObjectKey(socialPost));
            });
            eventSource.addEventListener('error', function (err) {
              obs.error(err);
            });
          });
        }
      }, {
        key: "getEventSource",
        value: function getEventSource() {
          return new EventSource(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].upfluenceStreamUrl);
        } // Super Ugly ! :O

      }, {
        key: "getTypeFromObjectKey",
        value: function getTypeFromObjectKey(object) {
          var objKey = Object.keys(object)[0];

          if (objKey === 'facebook_status') {
            return new _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__["FacebookStatus"](object[objKey]);
          } else if (objKey === 'tweet') {
            return new _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__["Tweet"](object[objKey]);
          } else if (objKey === 'pin') {
            return new _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__["Pin"](object[objKey]);
          } else if (objKey === 'article') {
            return new _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__["Article"](object[objKey]);
          } else if (objKey === 'youtube_video') {
            return new _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__["YoutubeVideo"](object[objKey]);
          } else if (objKey === 'instagram_media') {
            return new _models_social_post_model__WEBPACK_IMPORTED_MODULE_0__["InstagramMedia"](object[objKey]);
          }
        }
      }]);

      return UpfluenceSseService;
    }();

    UpfluenceSseService.ɵfac = function UpfluenceSseService_Factory(t) {
      return new (t || UpfluenceSseService)();
    };

    UpfluenceSseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UpfluenceSseService,
      factory: UpfluenceSseService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UpfluenceSseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      upfluenceStreamUrl: 'https://stream.upfluence.co/stream'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      upfluenceStreamUrl: 'https://stream.upfluence.co/stream'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/max/Projects/Upfluence-test/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app__inner container\">\n  <app-modal [open]=\"modalOpened\" [edit]=\"currentTask.name\" (sendName)=\"receivedName($event)\"></app-modal>\n  <app-timer (receive-time)=\"receivedTime($event)\"></app-timer>\n\n  <div class=\"tasks\">\n    <table class=\"tasks__inner\">\n        <tr *ngFor=\"let task of tasks; let i = index\">\n          <td>{{i+1}}</td>\n          <td> {{task.time}}</td>\n          <td>{{task.name}}</td>\n        </tr>\n    </table>\n  </div>\n</div>\n\n<!-- add responsive tables -->\n<!-- figure out what to do on mobile view -->\n<!-- \n  index cell:hide\n  time cell: width 100%\n  scroll to left for other info\n -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.modalOpened = false;
        this.tasks = [];
        this.nameToEdit = "test";
        this.currentTask = { time: null, name: null, id: null };
    }
    AppComponent.prototype.receivedTime = function (formattedTime) {
        this.currentTask.time = formattedTime;
        this.modalOpened = true;
    };
    AppComponent.prototype.receivedName = function (name) {
        this.currentTask.name = name;
        this.modalOpened = false;
        if (this.currentTask.id) {
            //find by id
            var toFind_1 = this.currentTask;
            var index = this.tasks.findIndex(function (i) { return i === toFind_1; });
            if (index === -1)
                throw "MYERROR: this should not have happened";
            this.tasks[index] = this.currentTask;
        }
        else {
            this.currentTask.id = this.tasks.length;
            this.tasks.push(this.currentTask);
        }
        this.currentTask = { time: null, name: null, id: null };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_timer_timer_component__ = __webpack_require__("../../../../../src/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_format_time_component__ = __webpack_require__("../../../../../src/app/pipes/format-time.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_format_time_component__["a" /* Format */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    background: rgba(0,0,0,.5);\r\n\r\n    display: none;\r\n  }\r\n  \r\n  /* mobile */\r\n  .modal__box {\r\n    min-width: 300px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -40%);\r\n    width: 96%;\r\n    height: 50%;\r\n    background: #000;\r\n    border-radius: 6px;\r\n    padding-top: 50px;\r\n    padding-bottom: 0;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    \r\n    background: #fff;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: rgba(0,0,0, 0.6);\r\n    \r\n    color: rgba(0,0,0,.7);\r\n    font-weight: 300;\r\n    overflow: hidden;\r\n\r\n    animation-name: up;\r\n    animation-fill-mode: forwards;\r\n    animation-duration: .4s;\r\n  }\r\n\r\n\r\n  \r\n  .modal__description {\r\n      margin-bottom: 18px;\r\n      font-size: 32px;\r\n      font-weight: 300;\r\n      text-align: center;\r\n      font-weight: 300;\r\n  }\r\n  \r\n  .modal__name {\r\n    display: block;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    font-weight: inherit;\r\n    width: 100%;\r\n    height: 60px !important;\r\n  }\r\n  .modal__name::-webkit-input-placeholder {\r\n    color: rgba(0,0,0,.3); \r\n  }\r\n  .modal__name:-ms-input-placeholder {\r\n    color: rgba(0,0,0,.3); \r\n  }\r\n  .modal__name::placeholder {\r\n    color: rgba(0,0,0,.3); \r\n  }\r\n  .modal__name:focus {\r\n    border-color: #0275d8;\r\n  }\r\n  .modal__name:focus::-webkit-input-placeholder {\r\n    color:transparent;\r\n  }\r\n  .modal__name:focus:-ms-input-placeholder {\r\n    color:transparent;\r\n  }\r\n  .modal__name:focus::placeholder {\r\n    color:transparent;\r\n  }\r\n  .modal__button {\r\n    box-shadow: none;\r\n    border: none;\r\n    font-size: 20px;\r\n    transition: background .1s linear;\r\n    font-weight: inherit;\r\n    border-radius: 0 !important;\r\n    \r\n    position: absolute;\r\n    display: block;\r\n    bottom:0;\r\n    left: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 25%;\r\n  }\r\n  \r\n  \r\n  @media (min-width: 500px) {\r\n    .modal__box {\r\n      max-width: 500px;\r\n      padding-left: 20px;\r\n      padding-right: 20px;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [class.visible]=\"isOpen\">\n  <!-- bind to @input  -->\n  <div class=\"modal__box\">\n    <p class=\"modal__description\"> Task name here</p>\n    <input type=\"text\" class=\"modal__name\" id=\"modalInput\" name=\"modal_input\" \n    placeholder=\"Insert new name\" [value]=\"name\" #Name>\n    <!-- bind to @Input() to receive name to edit -->\n    <button class=\"modal__button button-primary\" (click)=\"sendEdittedTask(Name.value)\"> Add </button>\n    <!-- (click)=\"emit event to app-root\" -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.sendName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.sendEdittedTask = function (name) {
        this.name = name;
        this.sendName.emit(this.name);
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('open'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('edit'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])('sendName'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "sendName", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timer__inner {\r\n    padding-top: 100px;\r\n}\r\n\r\n.timer__time {\r\n    font-size: 60px;\r\n    font-weight: 100;\r\n    text-align: center;\r\n}\r\n\r\n.timer__units {\r\n    width: 74px;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.sub {\r\n    font-size: 26px;\r\n    display: none;\r\n}\r\n\r\n.timer__buttons {\r\n    text-align: center;\r\n}\r\n\r\n.timer__buttons .button {\r\n    font-size: 14px !important;\r\n}\r\n\r\n.hidden-xs {\r\n    display:none;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 400px) {\r\n    .hidden-xs {\r\n        display: unset;\r\n    }\r\n    .visible-xs {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 360px) {\r\n    .timer__time {\r\n        font-size: 60px;\r\n    }\r\n    .sub {\r\n        display: inline;\r\n        font-weight: 200;\r\n    }\r\n\r\n    .timer__buttons .button {\r\n        font-size: 11px !important;\r\n        min-width: 102px;\r\n    }\r\n\r\n    .timer__units {\r\n        width: 90px;\r\n    }\r\n}\r\n\r\n@media(min-width: 460px) {\r\n    .timer__time {\r\n        font-size: 80px;\r\n    }\r\n\r\n    .timer__units {\r\n        min-width: 100px;\r\n    }\r\n}\r\n\r\n\r\n.disabled, .disabled:hover, .disabled:active{\r\n    border-color: #d8d7d7;\r\n    color: #969393;\r\n}\r\n\r\n.disabled.button-primary, .disabled.button-primary:hover, .disabled.button-primary:active {\r\n    border-color:#9cd2e2 !important;\r\n    background-color: #9cd2e2 !important;\r\n    color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timer__inner\">\n  <div class=\"timer__time\">\n    <span class=\"timer__hours timer__units\">{{hours}}<span class=\"sub\">h</span>\n    </span>\n    <span class=\"timer__minutes timer__units\">{{minutes}}<span class=\"sub\">m</span>\n    </span>\n    <span class=\"timer__seconds timer__units\">{{seconds}}<span class=\"sub\">s</span>\n    </span>\n  </div>\n  <div class=\"timer__buttons\">\n    <button class=\"button timer__button timer__start\" (click)=\"run()\">\n      <i class=\"fas visible-xs\" [ngClass]=\"{\n        'fa-play': !running,\n        'fa-stop': running\n      }\"></i>\n      <span class=\"text hidden-xs\">{{running ? \"Stop\" : \"Start\"}}</span>\n    </button>\n    <button class=\"button timer__button timer__reset\" (click)=\"reset()\" \n    [disabled]=\"running || time === 0\" \n    [class.disabled]=\"running || time === 0\">\n      <i class=\"fas fa-redo-alt visible-xs\"></i>\n      <span class=\"text hidden-xs\">Reset</span>\n    </button>\n    <button class=\"button button-primary timer__button timer__complete\" (click)=\"complete()\" \n    [disabled]=\"running || time === 0\" \n    [class.disabled]=\"running || time === 0\">\n      <i class=\"fas fa-check visible-xs\">\n      </i>\n      <span class=\"text hidden-xs\">Complete</span>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = (function () {
    function TimerComponent() {
        this.running = false;
        this.time = 0;
        this.sendTime = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TimerComponent.prototype.transform = function () {
        var time = this.time, hours = time / 3600 | 0, minutes = time % 3600 / 60 | 0, seconds = time % 60;
        this.hours = hours >= 10 ? "" + hours : "0" + hours;
        this.minutes = minutes >= 10 ? "" + minutes : "0" + minutes;
        this.seconds = seconds >= 10 ? "" + seconds : "0" + seconds;
    };
    TimerComponent.prototype.run = function () {
        var _ = this;
        if (this.running === false) {
            this.running = true;
            this.timer = setInterval(function () {
                _.time++;
                _.transform();
            }, 1000);
        }
        else {
            this.running = false;
            clearInterval(this.timer);
        }
    };
    TimerComponent.prototype.reset = function () {
        this.running = false;
        this.time = 0;
        this.transform();
    };
    TimerComponent.prototype.complete = function () {
        this.sendTime.emit(this.hours + ":" + this.minutes + ":" + this.seconds);
        this.reset();
    };
    TimerComponent.prototype.ngOnInit = function () {
        this.transform();
    };
    return TimerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])('receive-time'),
    __metadata("design:type", Object)
], TimerComponent.prototype, "sendTime", void 0);
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/components/timer/timer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/timer/timer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);

//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/format-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Format; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Format = (function () {
    function Format() {
    }
    Format.prototype.transform = function (value) {
        return value < 10 ? "0" + value : "" + value;
    };
    return Format;
}());
Format = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: "format"
    })
], Format);

//# sourceMappingURL=format-time.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event-selection/event-selection.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event-selection/event-selection.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" id=\"event-selection-page\">\n\n  <ng-container *ngFor=\"let event of events\">\n    <app-event [event]=\"event\" (signupClick)=\"selectEvent(event.id)\" (tvClick)=\"selectTvEvent(event.id)\"></app-event>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event/event.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event/event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event\">\n  {{event.Name}}\n\n  <button class=\"signup\" (click)=\"signupClick.emit($event)\">\n    Signup\n  </button>\n\n  <button class=\"tv\" (click)=\"tvClick.emit($event)\">\n    TV\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" id=\"home-page\">\n  <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\" [ngClass]=\"{error: error}\">\n    <input type=\"text\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\" />\n    <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" />\n    <button type=\"submit\">Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leaderboard-result/leaderboard-result.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leaderboard-result/leaderboard-result.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leaderboard-result\">\n  <div class=\"name\">\n    {{firstName}} {{lastName}}\n  </div>\n\n  <div class=\"category\">\n    {{category}}\n  </div>\n\n  <div class=\"time\">\n    {{time}}\n  </div>\n\n  <div class=\"team\">\n    {{team}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leaderboard/leaderboard.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leaderboard/leaderboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n  {{event?.Name}}\n\n  <ng-container *ngFor=\"let time of times\">\n    <leaderboard-result [firstName]=\"time.Participant.FirstName\" [lastName]=\"time.Participant.LastName\"\n      [time]=\"time.Time\" [team]=\"time.Participant.Team\" [category]=\"time.Participant.Gender\">\n    </leaderboard-result>\n  </ng-container>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup-complete/signup-complete.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup-complete/signup-complete.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Thanks for signing up\n\n<button (click)=\"back()\">Back</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" id=\"signup-page\">\n\n  <div class=\"title\">\n    Welcome to {{event?.Name}}\n  </div>\n\n  <div class=\"body\">\n    <div class=\"logo-client\">\n      <img src=\"./assets/logo.jpg\" alt=\"\" class=\"logo\">\n    </div>\n\n    <form #signupForm=\"ngForm\" (ngSubmit)=\"submit()\">\n\n      <div class=\"input-container half\">\n        <label for=\"firstName\">First Name</label>\n        <input class=\"name\" [(ngModel)]=\"details.firstName\" name=\"firstName\" placeholder=\"First Name\" type=\"text\"\n          [ngClass]=\"{error: errors.firstName}\" />\n      </div>\n\n      <div class=\"input-container half\">\n        <label for=\"lastName\">Last Name</label>\n        <input class=\"name\" [(ngModel)]=\"details.lastName\" name=\"lastName\" placeholder=\"Last Name\" type=\"text\"\n          [ngClass]=\"{error: errors.lastName}\" />\n      </div>\n\n      <div class=\"input-container full\">\n        <label>Gender</label>\n        <button type=\"button\" (click)=\"setCategory(0)\" [ngClass]=\"{selected: details.gender === 'Male'}\"\n          class=\"half\">Male</button>\n        <button type=\"button\" (click)=\"setCategory(1)\" [ngClass]=\"{selected: details.gender === 'Female'}\"\n          class=\"half\">Female</button>\n      </div>\n\n      <div class=\"input-container half\">\n        <label for=\"team\">Team</label>\n        <input type=\"text\" [(ngModel)]=\"details.team\" name=\"team\" placeholder=\"Team / Company\"\n          [ngClass]=\"{error: errors.team}\">\n      </div>\n\n      <div class=\"input-container half\">\n        <label for=\"time\">Time</label>\n        <input type=\"number\" [(ngModel)]=\"details.time\" step=\"0.01\" name=\"time\" placeholder=\"Time\"\n          pattern=\"^\\d*(\\.\\d{0,2})?$\" [ngClass]=\"{error: errors.time}\">\n      </div>\n\n      <div class=\"input-container full\">\n        <label for=\"email\">Email</label>\n        <input class=\"email\" [(ngModel)]=\"details.email\" name=\"email\" placeholder=\"Email\" type=\"email\"\n          [ngClass]=\"{error: errors.email}\" />\n      </div>\n\n      <div class=\"input-container full\">\n        <button type=\"submit\">Submit</button>\n      </div>\n    </form>\n\n    <div class=\"logo-host\">\n      <img src=\"./assets/logo.jpg\" alt=\"\" class=\"logo\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tv-category/tv-category.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv-category/tv-category.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tv-category\">\n  {{category}} <br />\n  {{firstName}} <br />\n  {{lastName}} <br />\n  {{time}}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tv/tv.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv/tv.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" id=\"tv-page\">\n  <div class=\"title\">\n    {{event?.Name}}<br>\n    Leaderboard <br>\n    <img src=\"https://placehold.it/350x150\" />\n  </div>\n\n  <div class=\"categories\">\n    <ng-container *ngFor=\"let participant of fastest.Male\">\n      <app-tv-category category=\"Fastest Male\" [firstName]=\"participant.Participant.FirstName\"\n        [lastName]=\"participant.Participant.LastName\" [time]=\"participant.Time\"></app-tv-category>\n    </ng-container>\n\n    <ng-container *ngFor=\"let participant of fastest.Female\">\n      <app-tv-category category=\"Fastest Female\" [firstName]=\"participant.Participant.FirstName\"\n        [lastName]=\"participant.Participant.LastName\" [time]=\"participant.Time\"></app-tv-category>\n    </ng-container>\n\n    <ng-container *ngFor=\"let team of fastest.Team\">\n      <app-tv-category category=\"Winning Team\" [firstName]=\"team.Team.Name\" [time]=\"team.Count\"></app-tv-category>\n    </ng-container>\n  </div>\n"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.current = {
            EventId: 1,
            Token: ''
        };
    }
    ApiService.prototype.login = function (username, password) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/auth/local';
        return this.http.post(url, { identifier: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (el) {
            _this.current.Token = el.jwt;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (el) { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false); }));
    };
    ApiService.prototype.getTeam = function (teamId) {
        var teamUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/teams/';
        return this.http
            .get(teamUrl, { params: { id: String(teamId) } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (el) { return (el && el.length > 0 ? el[0] : undefined); }));
    };
    ApiService.prototype.getEvent = function (id) {
        var eventUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/events/' + id;
        return this.http.get(eventUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    ApiService.prototype.getTimes = function (eventId) {
        var timeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/times';
        return this.http
            .get(timeUrl, {
            params: { Event: String(eventId), _sort: 'Time:ASC' }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    ApiService.prototype.getAllEvents = function () {
        var eventUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/events/';
        return this.http.get(eventUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    ApiService.prototype.getUpcomingEvents = function () {
        var upcomingUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/events/';
        return this.http.get(upcomingUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    ApiService.prototype.addTime = function (user, time, event) {
        var _this = this;
        var participantUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/participants/';
        var timeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/times/';
        var teamUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/teams/';
        // create team
        // create participant
        // create time
        return this.http.post(teamUrl, user.Team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (team) {
            return _this.http.post(participantUrl, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { Team: team.id })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (participant) {
                return _this.http
                    .post(timeUrl, {
                    Time: time.Time,
                    Event: event,
                    Participant: participant.id
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            }));
        }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv/tv.component */ "./src/app/tv/tv.component.ts");
/* harmony import */ var _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-complete/signup-complete.component */ "./src/app/signup-complete/signup-complete.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-selection/event-selection.component */ "./src/app/event-selection/event-selection.component.ts");









var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'event', component: _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_8__["EventSelectionComponent"] },
    { path: 'event/:id/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'event/:id/signup/complete', component: _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_6__["SignupCompleteComponent"] },
    { path: 'event/:id/leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
    { path: 'event/:id/tv', component: _tv_tv_component__WEBPACK_IMPORTED_MODULE_5__["TvComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'leaderboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _leaderboard_result_leaderboard_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaderboard-result/leaderboard-result.component */ "./src/app/leaderboard-result/leaderboard-result.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tv/tv.component */ "./src/app/tv/tv.component.ts");
/* harmony import */ var _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup-complete/signup-complete.component */ "./src/app/signup-complete/signup-complete.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event-selection/event-selection.component */ "./src/app/event-selection/event-selection.component.ts");
/* harmony import */ var _tv_category_tv_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tv-category/tv-category.component */ "./src/app/tv-category/tv-category.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__["LeaderboardComponent"],
                _leaderboard_result_leaderboard_result_component__WEBPACK_IMPORTED_MODULE_7__["LeaderboardResultComponent"],
                _tv_tv_component__WEBPACK_IMPORTED_MODULE_9__["TvComponent"],
                _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_10__["SignupCompleteComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_13__["EventSelectionComponent"],
                _tv_category_tv_category_component__WEBPACK_IMPORTED_MODULE_14__["TvCategoryComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_15__["EventComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event-selection/event-selection.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/event-selection/event-selection.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LXNlbGVjdGlvbi9ldmVudC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/event-selection/event-selection.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/event-selection/event-selection.component.ts ***!
  \**************************************************************/
/*! exports provided: EventSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSelectionComponent", function() { return EventSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EventSelectionComponent = /** @class */ (function () {
    function EventSelectionComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    EventSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getUpcomingEvents().subscribe(function (events) {
            _this.events = events;
            console.log(_this.events);
        });
    };
    EventSelectionComponent.prototype.selectEvent = function (id) {
        this.router.navigate(['/event/:id/signup', { id: id }]);
    };
    EventSelectionComponent.prototype.selectTvEvent = function (id) {
        this.router.navigate(['/event/:id/tv', { id: id }]);
    };
    EventSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-selection',
            template: __webpack_require__(/*! raw-loader!./event-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/event-selection/event-selection.component.html"),
            styles: [__webpack_require__(/*! ./event-selection.component.scss */ "./src/app/event-selection/event-selection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EventSelectionComponent);
    return EventSelectionComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.scss":
/*!********************************************!*\
  !*** ./src/app/event/event.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.event {\n  background: white;\n  padding: 8px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmV2ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCJkaXYuZXZlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventComponent = /** @class */ (function () {
    function EventComponent() {
        this.tvClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signupClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventComponent.prototype, "tvClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventComponent.prototype, "signupClick", void 0);
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/index.js!./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/event/event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background: #0037ff;\n}\n\n[hidden] {\n  opacity: 0;\n}\n\nhtml,\nbody,\nrouter-outlet {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  background: rgba(51, 51, 51, 0.333);\n  padding: 64px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: row wrap;\n  border: 1px solid white;\n}\n\nform .input-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform .input-container label {\n  width: 80px;\n  font-size: 12px;\n  text-align: left;\n}\n\nform input,\nform span,\nform button {\n  display: block;\n  margin-bottom: 8px;\n}\n\nform input,\nform textarea,\nform button,\nform select {\n  outline: none;\n}\n\nform input {\n  padding: 8px;\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid white;\n  background: transparent;\n  color: white;\n}\n\nform input::-webkit-input-placeholder {\n  color: #cccccc;\n}\n\nform input::-moz-placeholder {\n  color: #cccccc;\n}\n\nform input::-ms-input-placeholder {\n  color: #cccccc;\n}\n\nform input::placeholder {\n  color: #cccccc;\n}\n\nform button {\n  padding: 8px 16px;\n  border-radius: 0;\n  border: 0;\n  margin-top: 16px;\n  background: transparent;\n  border-radius: 32px;\n  width: 100px;\n  border: 1px solid white;\n  color: white;\n  transition: 0.3s all;\n  text-transform: uppercase;\n}\n\nform button[type=submit] {\n  background: white;\n  color: black;\n}\n\nform button.selected {\n  background: #0037ff;\n}\n\nform button:hover {\n  cursor: pointer;\n  background: #0037ff;\n  color: white;\n}\n\nform .input-container button {\n  margin-top: 0;\n  border-radius: 8px;\n}\n\nform .input-container button.half:first-of-type {\n  margin-left: 0;\n  width: calc(50% - 4px);\n}\n\nform .input-container button.half:last-of-type {\n  margin-right: 0;\n  width: calc(50% - 4px);\n}\n\nform .half {\n  width: calc(50% - 8px);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\nform .full {\n  width: calc(100% - 8px);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.error input,\ninput.error {\n  border-color: red;\n}\n\n#home-page {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2V2aW4vZXJnby1sZWFkZXJib2FyZC93ZWItYXBwL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0hGOztBREtBLGdEQUFBOztBQUNBOztFQUVFLGNBQUE7QUNGRjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7O0VBRUUsV0FBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLHNCQUFBO0FDSUY7O0FERkE7RUFDRSxtQkFBQTtBQ0tGOztBREZBO0VBQ0UsVUFBQTtBQ0tGOztBREZBOzs7RUFHRSx3SUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQU9FLG1DQUxpQjtFQU1qQixhQUpjO0VBS2Qsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRE47O0FES0U7OztFQUdFLGNBQUE7RUFDQSxrQkE3QmE7QUMwQmpCOztBRE1FOzs7O0VBSUUsYUFBQTtBQ0pKOztBRE9FO0VBQ0UsWUF0Q2E7RUF1Q2IsV0FBQTtFQUNBLGtCQTVDWTtFQTZDWix1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRE9JO0VBQ0UsY0FBQTtBQ0xOOztBRElJO0VBQ0UsY0FBQTtBQ0xOOztBRElJO0VBQ0UsY0FBQTtBQ0xOOztBRElJO0VBQ0UsY0FBQTtBQ0xOOztBRFNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRFNJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDUE47O0FEVUk7RUFDRSxtQkFBQTtBQ1JOOztBRFdJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ROOztBRGNJO0VBQ0UsYUFBQTtFQUNBLGtCQXRGVTtBQzBFaEI7O0FEY1E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUNaVjs7QURlUTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ2JWOztBRG1CRTtFQUdFLHNCQUFBO0VBQ0EsZ0JBSGE7RUFJYixpQkFKYTtBQ2ZqQjs7QURzQkU7RUFHRSx1QkFBQTtFQUNBLGdCQUhhO0VBSWIsaUJBSmE7QUNsQmpCOztBRDBCQTs7RUFFRSxpQkFBQTtBQ3ZCRjs7QUNwS0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEdUtKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxuICBibHVlOiAjMDAzN2ZmXG4pO1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5odG1sIHtcbiAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JzLCBibHVlKTtcbn1cblxuW2hpZGRlbl0ge1xuICBvcGFjaXR5OiAwO1xufVxuXG5odG1sLFxuYm9keSxcbnJvdXRlci1vdXRsZXQge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmZvcm0ge1xuICAkaW5wdXRSYWRpdXM6IDhweDtcbiAgJGZvcm1CYWNrZ3JvdW5kOiByZ2JhKCMzMzMzMzMsIC4zMzMpO1xuICAkbWFyZ2luQm90dG9tOiA4cHg7XG4gICRmb3JtUGFkZGluZzogNjRweDtcbiAgJGlucHV0UGFkZGluZzogOHB4O1xuXG4gIGJhY2tncm91bmQ6ICRmb3JtQmFja2dyb3VuZDtcbiAgcGFkZGluZzogJGZvcm1QYWRkaW5nO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblxuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBsYWJlbCB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQsXG4gIHNwYW4sXG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbkJvdHRvbTtcbiAgfVxuXG4gIGlucHV0LFxuICB0ZXh0YXJlYSxcbiAgYnV0dG9uLFxuICBzZWxlY3Qge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcGFkZGluZzogJGlucHV0UGFkZGluZztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXRSYWRpdXM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAmW3R5cGU9J3N1Ym1pdCddIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JzLCBibHVlKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDM3ZmY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAkaW5wdXRSYWRpdXM7XG4gICAgICAmLmhhbGYge1xuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDRweCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDRweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGFsZiB7XG4gICAgJG1hcmdpblNpZGU6IDRweDtcblxuICAgIHdpZHRoOiBjYWxjKDUwJSAtICN7MiAqICRtYXJnaW5TaWRlfSk7XG4gICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW5TaWRlO1xuICAgIG1hcmdpbi1yaWdodDogJG1hcmdpblNpZGU7XG4gIH1cblxuICAuZnVsbCB7XG4gICAgJG1hcmdpblNpZGU6IDRweDtcblxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAjezIgKiAkbWFyZ2luU2lkZX0pO1xuICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luU2lkZTtcbiAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW5TaWRlO1xuICB9XG59XG5cbi5lcnJvciBpbnB1dCxcbmlucHV0LmVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZDogIzAwMzdmZjtcbn1cblxuW2hpZGRlbl0ge1xuICBvcGFjaXR5OiAwO1xufVxuXG5odG1sLFxuYm9keSxcbnJvdXRlci1vdXRsZXQge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuMzMzKTtcbiAgcGFkZGluZzogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5mb3JtIC5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvcm0gLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XG4gIHdpZHRoOiA4MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5mb3JtIGlucHV0LFxuZm9ybSBzcGFuLFxuZm9ybSBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuZm9ybSBpbnB1dCxcbmZvcm0gdGV4dGFyZWEsXG5mb3JtIGJ1dHRvbixcbmZvcm0gc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmZvcm0gaW5wdXQge1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cbmZvcm0gYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuZm9ybSBidXR0b24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMDAzN2ZmO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDM3ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvcm0gLmlucHV0LWNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5mb3JtIC5pbnB1dC1jb250YWluZXIgYnV0dG9uLmhhbGY6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xufVxuZm9ybSAuaW5wdXQtY29udGFpbmVyIGJ1dHRvbi5oYWxmOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNHB4KTtcbn1cbmZvcm0gLmhhbGYge1xuICB3aWR0aDogY2FsYyg1MCUgLSA4cHgpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbmZvcm0gLmZ1bGwge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5lcnJvciBpbnB1dCxcbmlucHV0LmVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbiNob21lLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMnO1xuXG4jaG9tZS1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, router) {
        this.api = api;
        this.router = router;
        this.username = '';
        this.password = '';
        this.error = false;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.api.login(this.username, this.password).subscribe(function (el) {
            _this.error = !el;
            if (el) {
                _this.router.navigate(['/event']);
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard-result/leaderboard-result.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/leaderboard-result/leaderboard-result.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaderboard-result {\n  background: white;\n  padding: 8px;\n  border-radius: 16px;\n  display: block;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL2xlYWRlcmJvYXJkLXJlc3VsdC9sZWFkZXJib2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlYWRlcmJvYXJkLXJlc3VsdC9sZWFkZXJib2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVyYm9hcmQtcmVzdWx0L2xlYWRlcmJvYXJkLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFkZXJib2FyZC1yZXN1bHQge1xuICBiYWNrZ3JvdW5kOndoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIiwiLmxlYWRlcmJvYXJkLXJlc3VsdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/leaderboard-result/leaderboard-result.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/leaderboard-result/leaderboard-result.component.ts ***!
  \********************************************************************/
/*! exports provided: LeaderboardResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardResultComponent", function() { return LeaderboardResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeaderboardResultComponent = /** @class */ (function () {
    function LeaderboardResultComponent() {
    }
    LeaderboardResultComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeaderboardResultComponent.prototype, "firstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeaderboardResultComponent.prototype, "lastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeaderboardResultComponent.prototype, "team", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeaderboardResultComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeaderboardResultComponent.prototype, "category", void 0);
    LeaderboardResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'leaderboard-result',
            template: __webpack_require__(/*! raw-loader!./leaderboard-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/leaderboard-result/leaderboard-result.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard-result.component.scss */ "./src/app/leaderboard-result/leaderboard-result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeaderboardResultComponent);
    return LeaderboardResultComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.scss":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results {\n  width: 90%;\n  display: flex;\n  margin-left: 5%;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.results leaderboard-result {\n  display: block;\n  width: 100%;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cyB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgbGVhZGVyYm9hcmQtcmVzdWx0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG59XG4iLCIucmVzdWx0cyB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ucmVzdWx0cyBsZWFkZXJib2FyZC1yZXN1bHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogOHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(route, router, api) {
        this.route = route;
        this.router = router;
        this.api = api;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (params) {
            _this.api.getEvent(params.id).subscribe(function (event) {
                _this.event = event;
            });
            _this.api.getTimes(params.id).subscribe(function (times) {
                _this.times = times;
            });
        });
    };
    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! raw-loader!./leaderboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.scss */ "./src/app/leaderboard/leaderboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/signup-complete/signup-complete.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/signup-complete/signup-complete.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1jb21wbGV0ZS9zaWdudXAtY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup-complete/signup-complete.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/signup-complete/signup-complete.component.ts ***!
  \**************************************************************/
/*! exports provided: SignupCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupCompleteComponent", function() { return SignupCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SignupCompleteComponent = /** @class */ (function () {
    function SignupCompleteComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SignupCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.back();
        }, 3000);
    };
    SignupCompleteComponent.prototype.back = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (params) {
            _this.router.navigate(['event/:id/signup', { id: params.id }]);
        });
    };
    SignupCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-complete',
            template: __webpack_require__(/*! raw-loader!./signup-complete.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup-complete/signup-complete.component.html"),
            styles: [__webpack_require__(/*! ./signup-complete.component.scss */ "./src/app/signup-complete/signup-complete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupCompleteComponent);
    return SignupCompleteComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signup-page {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#signup-page .body {\n  max-width: 720px;\n  width: 90%;\n}\n#signup-page .logo {\n  position: absolute;\n  bottom: 8px;\n  right: 16px;\n}\n#signup-page label {\n  display: none;\n}\n#signup-page .title {\n  font-size: 32px;\n  color: white;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZ251cC1wYWdle1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuYm9keSB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDhweDtcbiAgICByaWdodDogMTZweDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbn1cbiIsIiNzaWdudXAtcGFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3NpZ251cC1wYWdlIC5ib2R5IHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgd2lkdGg6IDkwJTtcbn1cbiNzaWdudXAtcGFnZSAubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIHJpZ2h0OiAxNnB4O1xufVxuI3NpZ251cC1wYWdlIGxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNzaWdudXAtcGFnZSAudGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.details = {
            firstName: '',
            lastName: '',
            category: 0,
            team: '',
            time: '',
            email: '',
            gender: 'Male',
            event: 0
        };
        this.errors = {
            firstName: false,
            lastName: false,
            team: false,
            time: false,
            email: false
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.details.event = 0;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (el) {
            _this.api.getEvent(el.id).subscribe(function (ev) {
                _this.event = ev;
            });
        });
    };
    SignupComponent.prototype.setCategory = function (id) {
        this.details.category = id;
        this.details.gender = id === 0 ? 'Male' : 'Female';
    };
    SignupComponent.prototype.validateForm = function () {
        var e_1, _a;
        this.errors = {
            firstName: this.details.firstName === '',
            lastName: this.details.lastName === '',
            team: this.details.team === '',
            time: this.details.time === '' || this.details.time < 0,
            email: this.details.email === '' || this.details.email.indexOf('@') === -1
        };
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(this.errors)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (this.errors[key] === true) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        if (!this.validateForm()) {
            return;
        }
        this.api
            .addTime({
            FirstName: this.details.firstName,
            LastName: this.details.lastName,
            Email: this.details.email,
            Gender: this.details.gender,
            Team: { Name: this.details.team, Event: this.event.id }
        }, { Time: this.details.time }, this.event.id)
            .subscribe(function (val) {
            console.log(val);
            _this.router.navigate([
                'event/:id/signup/complete',
                { id: _this.event.id }
            ]);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/sockets.service.ts":
/*!************************************!*\
  !*** ./src/app/sockets.service.ts ***!
  \************************************/
/*! exports provided: SocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsService", function() { return SocketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var SocketsService = /** @class */ (function () {
    function SocketsService() {
        var _this = this;
        this.time$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api);
        socket.on('time', function (res) {
            console.log('incoming socket');
            console.log(res);
            _this.time$.next(res);
        });
    }
    SocketsService.prototype.time = function () {
        return this.time$;
    };
    SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketsService);
    return SocketsService;
}());



/***/ }),

/***/ "./src/app/tv-category/tv-category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/tv-category/tv-category.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.tv-category {\n  background: white;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL3R2LWNhdGVnb3J5L3R2LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90di1jYXRlZ29yeS90di1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3R2LWNhdGVnb3J5L3R2LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnR2LWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiIsImRpdi50di1jYXRlZ29yeSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tv-category/tv-category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tv-category/tv-category.component.ts ***!
  \******************************************************/
/*! exports provided: TvCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCategoryComponent", function() { return TvCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TvCategoryComponent = /** @class */ (function () {
    function TvCategoryComponent() {
    }
    TvCategoryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TvCategoryComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TvCategoryComponent.prototype, "firstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TvCategoryComponent.prototype, "lastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TvCategoryComponent.prototype, "time", void 0);
    TvCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-category',
            template: __webpack_require__(/*! raw-loader!./tv-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/tv-category/tv-category.component.html"),
            styles: [__webpack_require__(/*! ./tv-category.component.scss */ "./src/app/tv-category/tv-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TvCategoryComponent);
    return TvCategoryComponent;
}());



/***/ }),

/***/ "./src/app/tv/tv.component.scss":
/*!**************************************!*\
  !*** ./src/app/tv/tv.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2L3R2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tv/tv.component.ts":
/*!************************************!*\
  !*** ./src/app/tv/tv.component.ts ***!
  \************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");






var TvComponent = /** @class */ (function () {
    function TvComponent(api, route, socket) {
        this.api = api;
        this.route = route;
        this.socket = socket;
        this.fastest = this.initFastest();
    }
    TvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.time().subscribe(function (el) {
            console.log(_this.times);
            _this.times.push(el);
            _this.updateTimes();
        });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (params) {
            _this.api
                .getEvent(params.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function (event) {
                _this.event = event;
            });
            _this.updateLeaderboard(params.id);
            // full refresh every 60 seconds
            setInterval(function () {
                _this.updateLeaderboard(params.id);
            }, 1000 * 60);
        });
    };
    TvComponent.prototype.initFastest = function () {
        return {
            Male: [],
            Female: [],
            Team: []
        };
    };
    TvComponent.prototype.updateLeaderboard = function (eventId) {
        var _this = this;
        this.api.getTimes(eventId).subscribe(function (times) {
            _this.times = times;
            _this.updateTimes();
        });
    };
    TvComponent.prototype.updateTimes = function () {
        var _this = this;
        var e_1, _a, e_2, _b, e_3, _c;
        this.fastest = this.initFastest();
        var teamCount = {};
        var recordedParticipants = {};
        try {
            for (var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.times), _e = _d.next(); !_e.done; _e = _d.next()) {
                var time = _e.value;
                if (!time.Participant) {
                    return;
                }
                var gender = time.Participant.Gender;
                var team = String(time.Participant.Team);
                if (!recordedParticipants[time.Participant.id]) {
                    recordedParticipants[time.Participant.id] = true;
                    if (team) {
                        if (!teamCount[team]) {
                            teamCount[team] = 0;
                        }
                        teamCount[team]++;
                    }
                }
                if (gender && gender === 'Male') {
                    if (this.fastest.Male.length === 0 ||
                        this.fastest.Male[0].Time === time.Time) {
                        this.fastest.Male.push(time);
                    }
                    else if (time.Time < this.fastest.Male[0].Time) {
                        this.fastest.Male = [time];
                    }
                }
                else if (gender && gender === 'Female') {
                    if (this.fastest.Female.length === 0 ||
                        this.fastest.Female[0].Time === time.Time) {
                        this.fastest.Female.push(time);
                    }
                    else if (time.Time < this.fastest.Female[0].Time) {
                        this.fastest.Female = [time];
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var highestCount = {
            Count: 0,
            Team: []
        };
        try {
            for (var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(teamCount)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var team = _g.value;
                var count = teamCount[team];
                if (count > highestCount.Count) {
                    highestCount = { Count: count, Team: [team] };
                }
                else if (count === highestCount.Count) {
                    highestCount.Team.push(team);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.fastest.Team = [];
        try {
            for (var _h = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](highestCount.Team), _j = _h.next(); !_j.done; _j = _h.next()) {
                var team = _j.value;
                this.api.getTeam(parseInt(team, 10)).subscribe(function (teamObj) {
                    _this.fastest.Team.push({ Team: teamObj, Count: highestCount.Count });
                });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    TvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv',
            template: __webpack_require__(/*! raw-loader!./tv.component.html */ "./node_modules/raw-loader/index.js!./src/app/tv/tv.component.html"),
            styles: [__webpack_require__(/*! ./tv.component.scss */ "./src/app/tv/tv.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _sockets_service__WEBPACK_IMPORTED_MODULE_5__["SocketsService"]])
    ], TvComponent);
    return TvComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://leaderboard.ergoactive.events:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kevin/ergo-leaderboard/web-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
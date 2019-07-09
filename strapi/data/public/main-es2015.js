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

module.exports = "<div class=\"page\" id=\"signup-page\">\n\n  <div class=\"title\">\n    Welcome to {{event?.Name}}\n  </div>\n\n  <div class=\"body\">\n    <div class=\"logo-client\">\n      <img src=\"./assets/logo.jpg\" alt=\"\" class=\"logo\">\n    </div>\n\n    <form #signupForm=\"ngForm\" (ngSubmit)=\"submit()\">\n\n      <div class=\"input-container half\">\n        <label for=\"firstName\">First Name</label>\n        <input class=\"name\" [(ngModel)]=\"details.firstName\" name=\"firstName\" placeholder=\"First Name\" type=\"text\"\n          [ngClass]=\"{error: errors.firstName}\" />\n      </div>\n\n      <div class=\"input-container half\">\n        <label for=\"lastName\">Last Name</label>\n        <input class=\"name\" [(ngModel)]=\"details.lastName\" name=\"lastName\" placeholder=\"Last Name\" type=\"text\"\n          [ngClass]=\"{error: errors.lastName}\" />\n      </div>\n\n      <div class=\"input-container full\">\n        <label>Gender</label>\n        <button type=\"button\" (click)=\"setCategory(0)\" [ngClass]=\"{selected: details.gender === 'Male'}\"\n          class=\"half\">Male</button>\n        <button type=\"button\" (click)=\"setCategory(1)\" [ngClass]=\"{selected: details.gender === 'Female'}\"\n          class=\"half\">Female</button>\n      </div>\n\n      <div class=\"input-container half\" (click)=\"chooseTeam()\">\n        <label for=\"team\">Team</label>\n        <input type=\"text\" [ngModel]=\"details.team\" name=\"team\" placeholder=\"Team / Company\"\n          [ngClass]=\"{error: errors.team}\">\n      </div>\n\n      <div class=\"input-container half\">\n        <label for=\"time\">Time</label>\n        <input type=\"number\" [(ngModel)]=\"details.time\" step=\"0.01\" name=\"time\" placeholder=\"Time\"\n          pattern=\"^\\d*(\\.\\d{0,2})?$\" [ngClass]=\"{error: errors.time}\">\n      </div>\n\n      <div class=\"input-container full\">\n        <label for=\"email\">Email</label>\n        <input class=\"email\" [(ngModel)]=\"details.email\" name=\"email\" placeholder=\"Email\" type=\"email\"\n          [ngClass]=\"{error: errors.email}\" />\n      </div>\n\n      <div class=\"input-container full\">\n        <button type=\"submit\">Submit</button>\n      </div>\n    </form>\n\n    <div class=\"logo-host\">\n      <img src=\"./assets/logo.jpg\" alt=\"\" class=\"logo\">\n    </div>\n  </div>\n\n  <app-team-selection [(team)]=\"details.team\" (teamChange)=\"teamSelectionVisible = false\" [teams]=\"teams\"\n    *ngIf=\"teamSelectionVisible\"></app-team-selection>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/team-selection/team-selection.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/team-selection/team-selection.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team-selection\">\n  <div class=\"new\">\n    <input type=\"text\" [(ngModel)]=\"newTeamVal\">\n    <button class=\"new\" (click)=\"newTeam()\">New</button>\n  </div>\n\n  <div class=\"item\" *ngFor=\"let t of teams\" (click)=\"changeTeam(t.Name)\">\n    {{t.Name}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tv-category/tv-category.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv-category/tv-category.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tv-category\">\n  <span class=\"category\">\n    {{category}}\n  </span> <br />\n  <span class=\"value\">\n    {{firstName}} {{lastName}} <br />\n    {{time}}\n  </span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tv/tv.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv/tv.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" id=\"tv-page\">\n  <div class=\"title\">\n    <h2>\n      {{event?.Name}}\n    </h2>\n\n    <h3>\n      Leaderboard\n    </h3>\n\n    <img src=\"{{baseUrl}}{{event?.HostCompany.Logo.url}}\" />\n  </div>\n\n  <div class=\"categories\">\n    <ng-container *ngFor=\"let participant of fastest.Male\">\n      <app-tv-category category=\"Fastest Male\" [firstName]=\"participant.Participant.FirstName\"\n        [lastName]=\"participant.Participant.LastName\" [time]=\"participant.Time\"></app-tv-category>\n    </ng-container>\n\n    <ng-container *ngFor=\"let participant of fastest.Female\">\n      <app-tv-category category=\"Fastest Female\" [firstName]=\"participant.Participant.FirstName\"\n        [lastName]=\"participant.Participant.LastName\" [time]=\"participant.Time\"></app-tv-category>\n    </ng-container>\n\n    <ng-container *ngFor=\"let team of fastest.Team\">\n      <app-tv-category category=\"Winning Team\" [firstName]=\"team?.Team?.Name\" [time]=\"team?.Count\"></app-tv-category>\n    </ng-container>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.current = {
            EventId: 1,
            Token: ''
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api;
    }
    login(username, password) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/auth/local';
        return this.http.post(url, { identifier: username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((el) => {
            this.current.Token = el.jwt;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(el => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false)));
    }
    getTeam(teamId) {
        const teamUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/teams/';
        return this.http
            .get(teamUrl, { params: { id: String(teamId) } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(el => (el && el.length > 0 ? el[0] : undefined)));
    }
    getEvent(id) {
        const eventUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/events/' + id;
        return this.http.get(eventUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getTimes(eventId) {
        const timeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/times';
        return this.http
            .get(timeUrl, {
            params: { Event: String(eventId), _sort: 'Time:ASC' }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getTeams(eventId) {
        const teamUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/teams';
        return this.http
            .get(teamUrl, {
            params: { Event: String(eventId) }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAllEvents() {
        const eventUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/events/';
        return this.http.get(eventUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getUpcomingEvents() {
        const upcomingUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/events/';
        return this.http.get(upcomingUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    addTime(user, time, event) {
        const participantUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/participants/';
        const timeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/times/';
        const teamUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/teams/';
        // create team
        // create participant
        // create time
        let teamObs;
        if (typeof user.Team === 'number' || user.Team.id) {
            teamObs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](obs => {
                obs.next({
                    id: typeof user.Team === 'number' ? user.Team : user.Team.id,
                    Name: undefined,
                    Event: event
                });
                obs.complete();
            });
        }
        else {
            teamObs = this.http.post(teamUrl, user.Team);
        }
        return teamObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((team) => {
            return this.http.post(participantUrl, Object.assign({}, user, { Team: team.id })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((participant) => {
                return this.http
                    .post(timeUrl, {
                    Time: time.Time,
                    Event: event,
                    Participant: participant.id
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            }));
        }));
    }
};
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv/tv.component */ "./src/app/tv/tv.component.ts");
/* harmony import */ var _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-complete/signup-complete.component */ "./src/app/signup-complete/signup-complete.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-selection/event-selection.component */ "./src/app/event-selection/event-selection.component.ts");









const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'event', component: _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_8__["EventSelectionComponent"] },
    { path: 'event/:id/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'event/:id/signup/complete', component: _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_6__["SignupCompleteComponent"] },
    { path: 'event/:id/leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
    { path: 'event/:id/tv', component: _tv_tv_component__WEBPACK_IMPORTED_MODULE_5__["TvComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'leaderboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _leaderboard_result_leaderboard_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaderboard-result/leaderboard-result.component */ "./src/app/leaderboard-result/leaderboard-result.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tv/tv.component */ "./src/app/tv/tv.component.ts");
/* harmony import */ var _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup-complete/signup-complete.component */ "./src/app/signup-complete/signup-complete.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _event_selection_event_selection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event-selection/event-selection.component */ "./src/app/event-selection/event-selection.component.ts");
/* harmony import */ var _tv_category_tv_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tv-category/tv-category.component */ "./src/app/tv-category/tv-category.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _team_selection_team_selection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team-selection/team-selection.component */ "./src/app/team-selection/team-selection.component.ts");

















let AppModule = class AppModule {
};
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
            _event_event_component__WEBPACK_IMPORTED_MODULE_15__["EventComponent"],
            _team_selection_team_selection_component__WEBPACK_IMPORTED_MODULE_16__["TeamSelectionComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EventSelectionComponent = class EventSelectionComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
        this.api.getUpcomingEvents().subscribe(events => {
            this.events = events;
            console.log(this.events);
        });
    }
    selectEvent(id) {
        this.router.navigate(['/event/:id/signup', { id }]);
    }
    selectTvEvent(id) {
        this.router.navigate(['/event/:id/tv', { id }]);
    }
};
EventSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-selection',
        template: __webpack_require__(/*! raw-loader!./event-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/event-selection/event-selection.component.html"),
        styles: [__webpack_require__(/*! ./event-selection.component.scss */ "./src/app/event-selection/event-selection.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], EventSelectionComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventComponent = class EventComponent {
    constructor() {
        this.tvClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signupClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
};
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



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background: #0037ff;\n}\n\n[hidden] {\n  opacity: 0;\n}\n\nhtml,\nbody,\nrouter-outlet {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  background: rgba(51, 51, 51, 0.333);\n  padding: 64px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: row wrap;\n  border: 1px solid white;\n}\n\nform .input-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform .input-container label {\n  width: 80px;\n  font-size: 12px;\n  text-align: left;\n}\n\nform input,\nform span,\nform button {\n  display: block;\n  margin-bottom: 8px;\n}\n\nform input,\nform textarea,\nform button,\nform select {\n  outline: none;\n}\n\nform input {\n  padding: 8px;\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid white;\n  background: transparent;\n  color: white;\n}\n\nform input::-webkit-input-placeholder {\n  color: #cccccc;\n}\n\nform input::-moz-placeholder {\n  color: #cccccc;\n}\n\nform input::-ms-input-placeholder {\n  color: #cccccc;\n}\n\nform input::placeholder {\n  color: #cccccc;\n}\n\nform button {\n  padding: 8px 16px;\n  border-radius: 0;\n  border: 0;\n  margin-top: 16px;\n  background: transparent;\n  border-radius: 32px;\n  width: 100px;\n  border: 1px solid white;\n  color: white;\n  transition: 0.3s all;\n  text-transform: uppercase;\n}\n\nform button[type=submit] {\n  background: white;\n  color: black;\n}\n\nform button.selected {\n  background: #0037ff;\n}\n\nform button:hover {\n  cursor: pointer;\n  background: #0037ff;\n  color: white;\n}\n\nform .input-container button {\n  margin-top: 0;\n  border-radius: 8px;\n}\n\nform .input-container button.half:first-of-type {\n  margin-left: 0;\n  width: calc(50% - 4px);\n}\n\nform .input-container button.half:last-of-type {\n  margin-right: 0;\n  width: calc(50% - 4px);\n}\n\nform .half {\n  width: calc(50% - 8px);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\nform .full {\n  width: calc(100% - 8px);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.page .title {\n  display: flex;\n  align-content: center;\n  flex-flow: column;\n}\n\n.page .title h2 {\n  font-size: 32px;\n  color: white;\n  text-align: center;\n}\n\n.page .title h3 {\n  color: white;\n  text-align: center;\n}\n\n.page .title img {\n  margin: 16px auto;\n  width: 150px;\n}\n\n.error input,\ninput.error {\n  border-color: red;\n}\n\n#home-page {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2V2aW4vZXJnby1sZWFkZXJib2FyZC93ZWItYXBwL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0hGOztBREtBLGdEQUFBOztBQUNBOztFQUVFLGNBQUE7QUNGRjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7O0VBRUUsV0FBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLHNCQUFBO0FDSUY7O0FERkE7RUFDRSxtQkFBQTtBQ0tGOztBREZBO0VBQ0UsVUFBQTtBQ0tGOztBREZBOzs7RUFHRSx3SUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQU9FLG1DQUxpQjtFQU1qQixhQUpjO0VBS2Qsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRE47O0FES0U7OztFQUdFLGNBQUE7RUFDQSxrQkE3QmE7QUMwQmpCOztBRE1FOzs7O0VBSUUsYUFBQTtBQ0pKOztBRE9FO0VBQ0UsWUF0Q2E7RUF1Q2IsV0FBQTtFQUNBLGtCQTVDWTtFQTZDWix1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRE9JO0VBQ0UsY0FBQTtBQ0xOOztBRElJO0VBQ0UsY0FBQTtBQ0xOOztBRElJO0VBQ0UsY0FBQTtBQ0xOOztBRElJO0VBQ0UsY0FBQTtBQ0xOOztBRFNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRFNJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDUE47O0FEVUk7RUFDRSxtQkFBQTtBQ1JOOztBRFdJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ROOztBRGNJO0VBQ0UsYUFBQTtFQUNBLGtCQXRGVTtBQzBFaEI7O0FEY1E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUNaVjs7QURlUTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ2JWOztBRG1CRTtFQUdFLHNCQUFBO0VBQ0EsZ0JBSGE7RUFJYixpQkFKYTtBQ2ZqQjs7QURzQkU7RUFHRSx1QkFBQTtFQUNBLGdCQUhhO0VBSWIsaUJBSmE7QUNsQmpCOztBRDJCRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDeEJKOztBRDBCSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUN4Qk47O0FEMkJJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDekJOOztBRDRCSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQzFCTjs7QUQrQkE7O0VBRUUsaUJBQUE7QUM1QkY7O0FDdkxBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRDBMSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgYmx1ZTogIzAwMzdmZlxuKTtcblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCB7XG4gIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9ycywgYmx1ZSk7XG59XG5cbltoaWRkZW5dIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaHRtbCxcbmJvZHksXG5yb3V0ZXItb3V0bGV0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5mb3JtIHtcbiAgJGlucHV0UmFkaXVzOiA4cHg7XG4gICRmb3JtQmFja2dyb3VuZDogcmdiYSgjMzMzMzMzLCAuMzMzKTtcbiAgJG1hcmdpbkJvdHRvbTogOHB4O1xuICAkZm9ybVBhZGRpbmc6IDY0cHg7XG4gICRpbnB1dFBhZGRpbmc6IDhweDtcblxuICBiYWNrZ3JvdW5kOiAkZm9ybUJhY2tncm91bmQ7XG4gIHBhZGRpbmc6ICRmb3JtUGFkZGluZztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbGFiZWwge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0LFxuICBzcGFuLFxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW5Cb3R0b207XG4gIH1cblxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIGJ1dHRvbixcbiAgc2VsZWN0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBhZGRpbmc6ICRpbnB1dFBhZGRpbmc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0UmFkaXVzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgJlt0eXBlPSdzdWJtaXQnXSB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9ycywgYmx1ZSk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAzN2ZmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGlucHV0UmFkaXVzO1xuICAgICAgJi5oYWxmIHtcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhhbGYge1xuICAgICRtYXJnaW5TaWRlOiA0cHg7XG5cbiAgICB3aWR0aDogY2FsYyg1MCUgLSAjezIgKiAkbWFyZ2luU2lkZX0pO1xuICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luU2lkZTtcbiAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW5TaWRlO1xuICB9XG5cbiAgLmZ1bGwge1xuICAgICRtYXJnaW5TaWRlOiA0cHg7XG5cbiAgICB3aWR0aDogY2FsYygxMDAlIC0gI3syICogJG1hcmdpblNpZGV9KTtcbiAgICBtYXJnaW4tbGVmdDogJG1hcmdpblNpZGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luU2lkZTtcbiAgfVxufVxuXG4ucGFnZSB7XG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3IgaW5wdXQsXG5pbnB1dC5lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuIiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGJhY2tncm91bmQ6ICMwMDM3ZmY7XG59XG5cbltoaWRkZW5dIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaHRtbCxcbmJvZHksXG5yb3V0ZXItb3V0bGV0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjMzMyk7XG4gIHBhZGRpbmc6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5mb3JtIC5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICB3aWR0aDogODBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZm9ybSBpbnB1dCxcbmZvcm0gc3BhbixcbmZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmZvcm0gaW5wdXQsXG5mb3JtIHRleHRhcmVhLFxuZm9ybSBidXR0b24sXG5mb3JtIHNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5mb3JtIGlucHV0IHtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmZvcm0gYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzAwMzdmZjtcbn1cbmZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAzN2ZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5mb3JtIC5pbnB1dC1jb250YWluZXIgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuZm9ybSAuaW5wdXQtY29udGFpbmVyIGJ1dHRvbi5oYWxmOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNHB4KTtcbn1cbmZvcm0gLmlucHV0LWNvbnRhaW5lciBidXR0b24uaGFsZjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDRweCk7XG59XG5mb3JtIC5oYWxmIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5mb3JtIC5mdWxsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGFnZSAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuLnBhZ2UgLnRpdGxlIGgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlIC50aXRsZSBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2UgLnRpdGxlIGltZyB7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5lcnJvciBpbnB1dCxcbmlucHV0LmVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbiNob21lLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMnO1xuXG4jaG9tZS1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.username = '';
        this.password = '';
        this.error = false;
    }
    ngOnInit() { }
    login() {
        this.api.login(this.username, this.password).subscribe(el => {
            this.error = !el;
            if (el) {
                this.router.navigate(['/event']);
            }
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeaderboardResultComponent = class LeaderboardResultComponent {
    constructor() { }
    ngOnInit() { }
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LeaderboardComponent = class LeaderboardComponent {
    constructor(route, router, api) {
        this.route = route;
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((params) => {
            this.api.getEvent(params.id).subscribe(event => {
                this.event = event;
            });
            this.api.getTimes(params.id).subscribe(times => {
                this.times = times;
            });
        });
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let SignupCompleteComponent = class SignupCompleteComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        setTimeout(() => {
            this.back();
        }, 3000);
    }
    back() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe((params) => {
            this.router.navigate(['event/:id/signup', { id: params.id }]);
        });
    }
};
SignupCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-complete',
        template: __webpack_require__(/*! raw-loader!./signup-complete.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup-complete/signup-complete.component.html"),
        styles: [__webpack_require__(/*! ./signup-complete.component.scss */ "./src/app/signup-complete/signup-complete.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SignupCompleteComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signup-page {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#signup-page .body {\n  max-width: 720px;\n  width: 90%;\n}\n#signup-page .logo {\n  position: absolute;\n  bottom: 8px;\n  right: 16px;\n}\n#signup-page label {\n  display: none;\n}\n#signup-page .title {\n  font-size: 32px;\n  color: white;\n  margin-bottom: 16px;\n}\n#signup-page app-team-selection {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 90%;\n  height: 90%;\n  background: rgba(51, 51, 51, 0.9);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZ251cC1wYWdle1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuYm9keSB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDhweDtcbiAgICByaWdodDogMTZweDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBhcHAtdGVhbS1zZWxlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIzMzMzMzMywgMC45KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cbiIsIiNzaWdudXAtcGFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3NpZ251cC1wYWdlIC5ib2R5IHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgd2lkdGg6IDkwJTtcbn1cbiNzaWdudXAtcGFnZSAubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIHJpZ2h0OiAxNnB4O1xufVxuI3NpZ251cC1wYWdlIGxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNzaWdudXAtcGFnZSAudGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbiNzaWdudXAtcGFnZSBhcHAtdGVhbS1zZWxlY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SignupComponent = class SignupComponent {
    constructor(api, route, router) {
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
        this.teams = [];
        this.teamSelectionVisible = false;
    }
    ngOnInit() {
        this.details.event = 0;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(el => {
            this.api.getEvent(el.id).subscribe(ev => {
                this.event = ev;
            });
            this.api.getTeams(el.id).subscribe(ev => {
                this.teams = ev;
            });
        });
    }
    setCategory(id) {
        this.details.category = id;
        this.details.gender = id === 0 ? 'Male' : 'Female';
    }
    validateForm() {
        this.errors = {
            firstName: this.details.firstName === '',
            lastName: this.details.lastName === '',
            team: this.details.team === '',
            time: this.details.time === '' || this.details.time < 0,
            email: this.details.email === '' || this.details.email.indexOf('@') === -1
        };
        for (const key of Object.keys(this.errors)) {
            if (this.errors[key] === true) {
                return false;
            }
        }
        return true;
    }
    submit() {
        if (!this.validateForm()) {
            return;
        }
        let teamId;
        for (const team of this.teams) {
            if (team.Name === this.details.team) {
                teamId = team.id;
            }
        }
        this.api
            .addTime({
            FirstName: this.details.firstName,
            LastName: this.details.lastName,
            Email: this.details.email,
            Gender: this.details.gender,
            Team: { id: teamId, Name: this.details.team, Event: this.event.id }
        }, { Time: this.details.time }, this.event.id)
            .subscribe(val => {
            this.router.navigate([
                'event/:id/signup/complete',
                { id: this.event.id }
            ]);
        });
    }
    chooseTeam() {
        this.teamSelectionVisible = true;
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let SocketsService = class SocketsService {
    constructor() {
        this.time$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api);
        socket.on('time', res => {
            console.log('incoming socket');
            console.log(res);
            this.time$.next(res);
        });
    }
    time() {
        return this.time$;
    }
};
SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SocketsService);



/***/ }),

/***/ "./src/app/team-selection/team-selection.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/team-selection/team-selection.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-selection {\n  display: block;\n}\n.team-selection div.new input {\n  width: calc(100% - 80px);\n}\n.team-selection div.new button {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL3RlYW0tc2VsZWN0aW9uL3RlYW0tc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFtLXNlbGVjdGlvbi90ZWFtLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBREVJO0VBQ0Usd0JBQUE7QUNBTjtBREdJO0VBQ0UsV0FBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1zZWxlY3Rpb24vdGVhbS1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBkaXYubmV3IHtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLnRlYW0tc2VsZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGVhbS1zZWxlY3Rpb24gZGl2Lm5ldyBpbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbn1cbi50ZWFtLXNlbGVjdGlvbiBkaXYubmV3IGJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/team-selection/team-selection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/team-selection/team-selection.component.ts ***!
  \************************************************************/
/*! exports provided: TeamSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSelectionComponent", function() { return TeamSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamSelectionComponent = class TeamSelectionComponent {
    constructor() {
        this.teamChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.team, this.teams);
    }
    newTeam() {
        this.teamChange.emit(this.newTeamVal);
    }
    changeTeam(team) {
        this.teamChange.emit(team);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TeamSelectionComponent.prototype, "team", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TeamSelectionComponent.prototype, "teamChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TeamSelectionComponent.prototype, "teams", void 0);
TeamSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-selection',
        template: __webpack_require__(/*! raw-loader!./team-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/team-selection/team-selection.component.html"),
        styles: [__webpack_require__(/*! ./team-selection.component.scss */ "./src/app/team-selection/team-selection.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TeamSelectionComponent);



/***/ }),

/***/ "./src/app/tv-category/tv-category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/tv-category/tv-category.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.tv-category {\n  background: rgba(51, 51, 51, 0.333);\n  margin-bottom: 8px;\n  border: 1px solid white;\n  border-radius: 8px;\n  padding: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\ndiv.tv-category .category {\n  color: #ffffff;\n}\ndiv.tv-category .value {\n  color: rgba(255, 255, 255, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvYXBwL3R2LWNhdGVnb3J5L3R2LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90di1jYXRlZ29yeS90di1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQVBjO0VBUWQsa0JBUmM7QUNPaEI7QURJRTtFQUNFLGNBQUE7QUNGSjtBREtFO0VBQ0UsK0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3R2LWNhdGVnb3J5L3R2LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnR2LWNhdGVnb3J5IHtcbiAgJG1hcmdpblNpZGVzOiAxNnB4O1xuXG4gIGJhY2tncm91bmQ6IHJnYmEoIzMzMzMzMywgLjMzMyk7O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2luU2lkZXM7XG4gIG1hcmdpbi1yaWdodDogJG1hcmdpblNpZGVzO1xuICAvLyB3aWR0aDogY2FsYygxMDAlIC0gI3skbWFyZ2luU2lkZXN9KTtcblxuICAuY2F0ZWdvcnkge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBjb2xvcjogcmdiYSgjZmZmZmZmLCAwLjgpO1xuICB9XG59XG4iLCJkaXYudHYtY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuMzMzKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuZGl2LnR2LWNhdGVnb3J5IC5jYXRlZ29yeSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuZGl2LnR2LWNhdGVnb3J5IC52YWx1ZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TvCategoryComponent = class TvCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");






let TvComponent = class TvComponent {
    constructor(api, route, socket) {
        this.api = api;
        this.route = route;
        this.socket = socket;
        this.baseUrl = this.api.baseUrl;
        this.fastest = this.initFastest();
    }
    ngOnInit() {
        this.socket.time().subscribe(el => {
            console.log(this.times);
            this.times.push(el);
            this.updateTimes();
        });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((params) => {
            this.api
                .getEvent(params.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(event => {
                this.event = event;
                console.log(event.HostCompany.Logo.url);
            });
            this.updateLeaderboard(params.id);
            // full refresh every 60 seconds
            setInterval(() => {
                this.updateLeaderboard(params.id);
            }, 1000 * 60);
        });
    }
    initFastest() {
        return {
            Male: [],
            Female: [],
            Team: []
        };
    }
    updateLeaderboard(eventId) {
        this.api.getTimes(eventId).subscribe(times => {
            this.times = times;
            this.updateTimes();
        });
    }
    updateTimes() {
        this.fastest = this.initFastest();
        const teamCount = {};
        const recordedParticipants = {};
        for (const time of this.times) {
            if (!time.Participant) {
                return;
            }
            const gender = time.Participant.Gender;
            const team = String(time.Participant.Team);
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
        let highestCount = {
            Count: 0,
            Team: []
        };
        for (const team of Object.keys(teamCount)) {
            const count = teamCount[team];
            if (count > highestCount.Count) {
                highestCount = { Count: count, Team: [team] };
            }
            else if (count === highestCount.Count) {
                highestCount.Team.push(team);
            }
        }
        this.fastest.Team = [];
        for (const team of highestCount.Team) {
            this.api.getTeam(parseInt(team, 10)).subscribe(teamObj => {
                this.fastest.Team.push({ Team: teamObj, Count: highestCount.Count });
            });
        }
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map
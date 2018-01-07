webpackJsonp([2],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class DecoratedFetcher {
    constructor(fetcher) {
        this.fetcher = fetcher;
    }

    async executeFetchWithLogging() {
        console.log(`Starting fetch ${Date.now()}`);
        await this.fetcher.executeFetch();
        console.log(`Completing fetch ${Date.now()}`);
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = DecoratedFetcher;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kZWNvcmF0ZWQtZmV0Y2hlciJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0EsQyIsImZpbGUiOiJkOTMxY2EyZDJmNDQwNzdjNDE5NC4yLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjb3JhdGVkRmV0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoZmV0Y2hlcikge1xuICAgICAgICB0aGlzLmZldGNoZXIgPSBmZXRjaGVyO1xuICAgIH1cblxuICAgIGFzeW5jIGV4ZWN1dGVGZXRjaFdpdGhMb2dnaW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRpbmcgZmV0Y2ggJHtEYXRlLm5vdygpfWApO1xuICAgICAgICBhd2FpdCB0aGlzLmZldGNoZXIuZXhlY3V0ZUZldGNoKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb21wbGV0aW5nIGZldGNoICR7RGF0ZS5ub3coKX1gKTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbC9kZWNvcmF0ZWQtZmV0Y2hlclxuLy8gbW9kdWxlIGlkID0gMzM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=
webpackJsonp([0],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fetcher = function () {
    function Fetcher(url, fulfillClosure, rejectClosure) {
        _classCallCheck(this, Fetcher);

        this.url = url;
        this.fulfillClosure = fulfillClosure;
        this.rejectClosure = rejectClosure;
    }

    _createClass(Fetcher, [{
        key: "executeFetch",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response, jsonResponse;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return fetch(new Request(this.url));

                            case 3:
                                response = _context.sent;
                                _context.next = 6;
                                return response.json();

                            case 6:
                                jsonResponse = _context.sent;

                                this.fulfillClosure(jsonResponse);
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context["catch"](0);

                                this.rejectClosure(_context.t0);

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 10]]);
            }));

            function executeFetch() {
                return _ref.apply(this, arguments);
            }

            return executeFetch;
        }()
    }]);

    return Fetcher;
}();

exports.default = Fetcher;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9mZXRjaGVyLmpzIl0sIm5hbWVzIjpbIkZldGNoZXIiLCJ1cmwiLCJmdWxmaWxsQ2xvc3VyZSIsInJlamVjdENsb3N1cmUiLCJmZXRjaCIsIlJlcXVlc3QiLCJyZXNwb25zZSIsImpzb24iLCJqc29uUmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsTztBQUNqQixxQkFBWUMsR0FBWixFQUFpQkMsY0FBakIsRUFBaUNDLGFBQWpDLEVBQWdEO0FBQUE7O0FBQzVDLGFBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDSDs7Ozs7Ozs7Ozs7Ozt1Q0FJNEJDLE1BQU0sSUFBSUMsT0FBSixDQUFZLEtBQUtKLEdBQWpCLENBQU4sQzs7O0FBQWpCSyx3Qzs7dUNBQ3FCQSxTQUFTQyxJQUFULEU7OztBQUFyQkMsNEM7O0FBQ0oscUNBQUtOLGNBQUwsQ0FBb0JNLFlBQXBCOzs7Ozs7OztBQUVBLHFDQUFLTCxhQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBYlNILE8iLCJmaWxlIjoiOTZlNjNjOTZjZmM1NDgzZGU5NzcuMC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgZnVsZmlsbENsb3N1cmUsIHJlamVjdENsb3N1cmUpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuZnVsZmlsbENsb3N1cmUgPSBmdWxmaWxsQ2xvc3VyZTtcbiAgICAgICAgdGhpcy5yZWplY3RDbG9zdXJlID0gcmVqZWN0Q2xvc3VyZTtcbiAgICB9XG5cbiAgICBhc3luYyBleGVjdXRlRmV0Y2goKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXcgUmVxdWVzdCh0aGlzLnVybCkpO1xuICAgICAgICAgICAgbGV0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMuZnVsZmlsbENsb3N1cmUoanNvblJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5yZWplY3RDbG9zdXJlKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2ZldGNoZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
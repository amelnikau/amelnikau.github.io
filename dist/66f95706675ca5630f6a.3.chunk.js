webpackJsonp([3],{

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropdownMenu = function () {
    function DropdownMenu() {
        _classCallCheck(this, DropdownMenu);
    }

    _createClass(DropdownMenu, [{
        key: 'addOnClickHandler',
        value: function addOnClickHandler() {
            $(".dropdown-menu a").click(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var Fetcher, configModule, channelId, channelName;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return new Promise(function (resolve) {
                                    __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function (require) {
                                        resolve(__webpack_require__( /* webpackChunkName: "fetcher" */336));
                                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                                });

                            case 2:
                                Fetcher = _context.sent.default;
                                _context.next = 5;
                                return new Promise(function (resolve) {
                                    __webpack_require__.e/* require.ensure */(1/* duplicate */).then((function (require) {
                                        resolve(__webpack_require__( /* webpackChunkName: "config" */337));
                                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                                });

                            case 5:
                                configModule = _context.sent;
                                channelId = $(this).attr('id');
                                channelName = $(this).text();

                                $("#dropdownMenuButton").html(channelName + ' <span class="caret"></span>');
                                new Fetcher(configModule.NEWS_URL_WITHOUT_SOURCE + channelId, function (json) {
                                    var _json$articles = json.articles,
                                        articles = _json$articles === undefined ? [] : _json$articles;

                                    $(".featurette").remove();
                                    $(".featurette-divider").remove();
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var article = _step.value;

                                            $("#dropdownSection").after('    <hr class="featurette-divider">\n\n                                        <div class="row featurette">\n                                            <div class="col-md-7">\n                                                <h2 class="featurette-heading">' + article.title + '</h2>\n                                                <p class="lead">' + article.description + '</p>\n                                            </div>\n                                            <div class="col-md-5">\n                                                <img class="featurette-image img-fluid mx-auto" src="' + article.urlToImage + '"\n                                                     alt="News image">\n                                            </div>\n                                        </div>');
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return) {
                                                _iterator.return();
                                            }
                                        } finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }
                                }, function (error) {
                                    return $('#alert').show();
                                }).executeFetch();

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            })));
        }
    }]);

    return DropdownMenu;
}();

exports.default = DropdownMenu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnUiLCIkIiwiY2xpY2siLCJGZXRjaGVyIiwiZGVmYXVsdCIsImNvbmZpZ01vZHVsZSIsImNoYW5uZWxJZCIsImF0dHIiLCJjaGFubmVsTmFtZSIsInRleHQiLCJodG1sIiwiTkVXU19VUkxfV0lUSE9VVF9TT1VSQ0UiLCJqc29uIiwiYXJ0aWNsZXMiLCJyZW1vdmUiLCJhcnRpY2xlIiwiYWZ0ZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsVG9JbWFnZSIsImVycm9yIiwic2hvdyIsImV4ZWN1dGVGZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxZOzs7Ozs7OzRDQUNHO0FBQ2hCQyxjQUFFLGtCQUFGLEVBQXNCQyxLQUF0Qix5REFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBQ1EsaUNBQWtDLEdBRDFDO0FBQUE7QUFBQTs7QUFBQTtBQUNoQkMsdUNBRGdCLGlCQUM4REMsT0FEOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFFWSxnQ0FBaUMsR0FGN0M7QUFBQTtBQUFBOztBQUFBO0FBRWhCQyw0Q0FGZ0I7QUFJaEJDLHlDQUpnQixHQUlKTCxFQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLElBQWIsQ0FKSTtBQUtoQkMsMkNBTGdCLEdBS0ZQLEVBQUUsSUFBRixFQUFRUSxJQUFSLEVBTEU7O0FBTXBCUixrQ0FBRSxxQkFBRixFQUF5QlMsSUFBekIsQ0FBaUNGLFdBQWpDO0FBQ0Esb0NBQUlMLE9BQUosQ0FBWUUsYUFBYU0sdUJBQWIsR0FBdUNMLFNBQW5ELEVBQThELFVBQUNNLElBQUQsRUFBVTtBQUFBLHlEQUM5Q0EsSUFEOEMsQ0FDL0RDLFFBRCtEO0FBQUEsd0NBQy9EQSxRQUQrRCxrQ0FDcEQsRUFEb0Q7O0FBRXBFWixzQ0FBRSxhQUFGLEVBQWlCYSxNQUFqQjtBQUNBYixzQ0FBRSxxQkFBRixFQUF5QmEsTUFBekI7QUFIb0U7QUFBQTtBQUFBOztBQUFBO0FBSXBFLDZEQUFvQkQsUUFBcEIsOEhBQThCO0FBQUEsZ0RBQXJCRSxPQUFxQjs7QUFDMUJkLDhDQUFFLGtCQUFGLEVBQ0tlLEtBREwsc1FBS3lERCxRQUFRRSxLQUxqRSwrRUFNMENGLFFBQVFHLFdBTmxELDJPQVMrRUgsUUFBUUksVUFUdkY7QUFhSDtBQWxCbUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CdkUsaUNBbkJELEVBbUJHLFVBQUNDLEtBQUQ7QUFBQSwyQ0FBV25CLEVBQUUsUUFBRixFQUFZb0IsSUFBWixFQUFYO0FBQUEsaUNBbkJILEVBbUJrQ0MsWUFuQmxDOztBQVBvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE1QjtBQTZCSDs7Ozs7O2tCQS9CZ0J0QixZIiwiZmlsZSI6IjY2Zjk1NzA2Njc1Y2E1NjMwZjZhLjMuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUge1xuICAgIGFkZE9uQ2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAkKFwiLmRyb3Bkb3duLW1lbnUgYVwiKS5jbGljayhhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IEZldGNoZXIgPSAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZmV0Y2hlclwiICovICcuLi91dGlsL2ZldGNoZXInKSkuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnTW9kdWxlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlnXCIgKi8gJy4uL2NvbmZpZy9jb25maWcnKTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGFubmVsSWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5uZWxOYW1lID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgJChcIiNkcm9wZG93bk1lbnVCdXR0b25cIikuaHRtbChgJHtjaGFubmVsTmFtZX0gPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5gKTtcbiAgICAgICAgICAgICAgICBuZXcgRmV0Y2hlcihjb25maWdNb2R1bGUuTkVXU19VUkxfV0lUSE9VVF9TT1VSQ0UgKyBjaGFubmVsSWQsIChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7YXJ0aWNsZXMgPSBbXX0gPSBqc29uO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmZlYXR1cmV0dGVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuZmVhdHVyZXR0ZS1kaXZpZGVyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhcnRpY2xlIG9mIGFydGljbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2Ryb3Bkb3duU2VjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZnRlcihgICAgIDxociBjbGFzcz1cImZlYXR1cmV0dGUtZGl2aWRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmZWF0dXJldHRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZmVhdHVyZXR0ZS1oZWFkaW5nXCI+JHthcnRpY2xlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj4ke2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZmVhdHVyZXR0ZS1pbWFnZSBpbWctZmx1aWQgbXgtYXV0b1wiIHNyYz1cIiR7YXJ0aWNsZS51cmxUb0ltYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk5ld3MgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+ICQoJyNhbGVydCcpLnNob3coKSkuZXhlY3V0ZUZldGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvRHJvcGRvd25NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
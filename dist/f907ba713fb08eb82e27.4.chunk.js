webpackJsonp([4],{

/***/ 340:
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
    function DropdownMenu(store) {
        _classCallCheck(this, DropdownMenu);

        this.store = store;
        this.store.subscribe(this.renderNews.bind(this));
        this.newsItemsFlightWeightsFactory = new NewsItemsFlightWeightsFactory();
    }

    _createClass(DropdownMenu, [{
        key: "addOnClickHandler",
        value: function addOnClickHandler() {
            var store = this.store;
            $(".dropdown-menu a").click(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var channelId, channelName;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                channelId = $(this).attr('id');
                                channelName = $(this).text();

                                store.dispatch({ "type": "SELECT_CHANNEL", "channelId": channelId, "channelName": channelName });

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            })));
        }
    }, {
        key: "renderNews",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var Fetcher, configModule, state, newsItemsFlightWeightsFactory;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return new Promise(function (resolve) {
                                    __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function (require) {
                                        resolve(__webpack_require__( /* webpackChunkName: "fetcher" */336));
                                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                                });

                            case 2:
                                Fetcher = _context2.sent.default;
                                _context2.next = 5;
                                return new Promise(function (resolve) {
                                    __webpack_require__.e/* require.ensure */(1/* duplicate */).then((function (require) {
                                        resolve(__webpack_require__( /* webpackChunkName: "config" */337));
                                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                                });

                            case 5:
                                configModule = _context2.sent;
                                state = this.store.getState();
                                newsItemsFlightWeightsFactory = this.newsItemsFlightWeightsFactory;


                                $("#dropdownMenuButton").html(state.channelName + " <span class=\"caret\"></span>");
                                new Fetcher(configModule.NEWS_URL_WITHOUT_SOURCE + state.channelId, function (json) {
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

                                            if (!article.title || !article.description || !article.urlToImage) {
                                                // skip news without title or description or image
                                                continue;
                                            }
                                            $("#dropdownSection").after(newsItemsFlightWeightsFactory.get(article.title, article.description, article.urlToImage).render());
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
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function renderNews() {
                return _ref2.apply(this, arguments);
            }

            return renderNews;
        }()
    }]);

    return DropdownMenu;
}();

exports.default = DropdownMenu;


function NewsItemFlightWeight(title, description, urlToImage) {
    var _this = this;

    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;

    this.html = "<hr class=\"featurette-divider\">\n                <div class=\"row featurette\">\n                    <div class=\"col-md-7\">\n                        <h2 class=\"featurette-heading\">" + this.title + "</h2>\n                        <p class=\"lead\">" + this.description + "</p>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <img class=\"featurette-image img-fluid mx-auto\" src=\"" + this.urlToImage + "\"\n                             alt=\"News image\">\n                    </div>\n                </div>";

    this.render = function () {
        return _this.html;
    };
}

function NewsItemsFlightWeightsFactory() {
    var flightWeights = {};

    // clean every 3 minutes
    setInterval(function () {
        return flightWeights = {};
    }, 1000 * 60 * 3);

    return {
        get: function get(title, description, urlToImage) {
            if (!flightWeights[title]) {
                flightWeights[title] = new NewsItemFlightWeight(title, description, urlToImage);
            }
            return flightWeights[title];
        }
    };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnUiLCJzdG9yZSIsInN1YnNjcmliZSIsInJlbmRlck5ld3MiLCJiaW5kIiwibmV3c0l0ZW1zRmxpZ2h0V2VpZ2h0c0ZhY3RvcnkiLCJOZXdzSXRlbXNGbGlnaHRXZWlnaHRzRmFjdG9yeSIsIiQiLCJjbGljayIsImNoYW5uZWxJZCIsImF0dHIiLCJjaGFubmVsTmFtZSIsInRleHQiLCJkaXNwYXRjaCIsIkZldGNoZXIiLCJkZWZhdWx0IiwiY29uZmlnTW9kdWxlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImh0bWwiLCJORVdTX1VSTF9XSVRIT1VUX1NPVVJDRSIsImpzb24iLCJhcnRpY2xlcyIsInJlbW92ZSIsImFydGljbGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsVG9JbWFnZSIsImFmdGVyIiwiZ2V0IiwicmVuZGVyIiwiZXJyb3IiLCJzaG93IiwiZXhlY3V0ZUZldGNoIiwiTmV3c0l0ZW1GbGlnaHRXZWlnaHQiLCJmbGlnaHRXZWlnaHRzIiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsWTtBQUVqQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmLGFBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtBLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixLQUFLQyxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFyQjtBQUNBLGFBQUtDLDZCQUFMLEdBQXFDLElBQUlDLDZCQUFKLEVBQXJDO0FBQ0g7Ozs7NENBRW1CO0FBQ2hCLGdCQUFJTCxRQUFRLEtBQUtBLEtBQWpCO0FBQ0FNLGNBQUUsa0JBQUYsRUFBc0JDLEtBQXRCLHlEQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLHlDQURnQixHQUNKRixFQUFFLElBQUYsRUFBUUcsSUFBUixDQUFhLElBQWIsQ0FE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cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTWVudSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKHRoaXMucmVuZGVyTmV3cy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uZXdzSXRlbXNGbGlnaHRXZWlnaHRzRmFjdG9yeSA9IG5ldyBOZXdzSXRlbXNGbGlnaHRXZWlnaHRzRmFjdG9yeSgpO1xuICAgIH1cblxuICAgIGFkZE9uQ2xpY2tIYW5kbGVyKCkge1xuICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLnN0b3JlO1xuICAgICAgICAkKFwiLmRyb3Bkb3duLW1lbnUgYVwiKS5jbGljayhhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5uZWxJZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hhbm5lbE5hbWUgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XCJ0eXBlXCI6IFwiU0VMRUNUX0NIQU5ORUxcIiwgXCJjaGFubmVsSWRcIjogY2hhbm5lbElkLCBcImNoYW5uZWxOYW1lXCI6IGNoYW5uZWxOYW1lfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVuZGVyTmV3cygpIHtcbiAgICAgICAgbGV0IEZldGNoZXIgPSAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZmV0Y2hlclwiICovICcuLi91dGlsL2ZldGNoZXInKSkuZGVmYXVsdDtcbiAgICAgICAgbGV0IGNvbmZpZ01vZHVsZSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpZ1wiICovICcuLi9jb25maWcvY29uZmlnJyk7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgbGV0IG5ld3NJdGVtc0ZsaWdodFdlaWdodHNGYWN0b3J5ID0gdGhpcy5uZXdzSXRlbXNGbGlnaHRXZWlnaHRzRmFjdG9yeTtcblxuICAgICAgICAkKFwiI2Ryb3Bkb3duTWVudUJ1dHRvblwiKS5odG1sKGAke3N0YXRlLmNoYW5uZWxOYW1lfSA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPmApO1xuICAgICAgICBuZXcgRmV0Y2hlcihjb25maWdNb2R1bGUuTkVXU19VUkxfV0lUSE9VVF9TT1VSQ0UgKyBzdGF0ZS5jaGFubmVsSWQsIChqc29uKSA9PiB7XG4gICAgICAgICAgICBsZXQge2FydGljbGVzID0gW119ID0ganNvbjtcbiAgICAgICAgICAgICQoXCIuZmVhdHVyZXR0ZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoXCIuZmVhdHVyZXR0ZS1kaXZpZGVyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgYXJ0aWNsZSBvZiBhcnRpY2xlcykge1xuICAgICAgICAgICAgICAgIGlmICghYXJ0aWNsZS50aXRsZSB8fCAhYXJ0aWNsZS5kZXNjcmlwdGlvbiB8fCAhYXJ0aWNsZS51cmxUb0ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgbmV3cyB3aXRob3V0IHRpdGxlIG9yIGRlc2NyaXB0aW9uIG9yIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKFwiI2Ryb3Bkb3duU2VjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAuYWZ0ZXIobmV3c0l0ZW1zRmxpZ2h0V2VpZ2h0c0ZhY3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoYXJ0aWNsZS50aXRsZSwgYXJ0aWNsZS5kZXNjcmlwdGlvbiwgYXJ0aWNsZS51cmxUb0ltYWdlKS5yZW5kZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChlcnJvcikgPT4gJCgnI2FsZXJ0Jykuc2hvdygpKS5leGVjdXRlRmV0Y2goKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE5ld3NJdGVtRmxpZ2h0V2VpZ2h0KHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy51cmxUb0ltYWdlID0gdXJsVG9JbWFnZTtcblxuICAgIHRoaXMuaHRtbCA9IGA8aHIgY2xhc3M9XCJmZWF0dXJldHRlLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZlYXR1cmV0dGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmZWF0dXJldHRlLWhlYWRpbmdcIj4ke3RoaXMudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmZWF0dXJldHRlLWltYWdlIGltZy1mbHVpZCBteC1hdXRvXCIgc3JjPVwiJHt0aGlzLnVybFRvSW1hZ2V9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTmV3cyBpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgdGhpcy5yZW5kZXIgPSAoKSA9PiB0aGlzLmh0bWw7XG59XG5cbmZ1bmN0aW9uIE5ld3NJdGVtc0ZsaWdodFdlaWdodHNGYWN0b3J5KCkge1xuICAgIGxldCBmbGlnaHRXZWlnaHRzID0ge307XG5cbiAgICAvLyBjbGVhbiBldmVyeSAzIG1pbnV0ZXNcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBmbGlnaHRXZWlnaHRzID0ge30sIDEwMDAgKiA2MCAqIDMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCB1cmxUb0ltYWdlKSB7XG4gICAgICAgICAgICBpZiAoIWZsaWdodFdlaWdodHNbdGl0bGVdKSB7XG4gICAgICAgICAgICAgICAgZmxpZ2h0V2VpZ2h0c1t0aXRsZV0gPVxuICAgICAgICAgICAgICAgICAgICBuZXcgTmV3c0l0ZW1GbGlnaHRXZWlnaHQodGl0bGUsIGRlc2NyaXB0aW9uLCB1cmxUb0ltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbGlnaHRXZWlnaHRzW3RpdGxlXTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Ecm9wZG93bk1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9
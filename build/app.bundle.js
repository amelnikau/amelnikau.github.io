"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NEWS_API_KEY = 'a3542e73015b4afcb6e9f34ae4c89598';
var CHANNELS_URL = "https://newsapi.org/v2/sources?language=en&country=us&category=general&apiKey=" + NEWS_API_KEY;
var NEWS_URL_WITHOUT_SOURCE = "https://newsapi.org/v2/top-headlines?apiKey=" + NEWS_API_KEY + "&sources=";

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

var DropdownMenuItem = function DropdownMenuItem(channelName, channelId) {
    _classCallCheck(this, DropdownMenuItem);

    $("#dropdownMenu").append("<a class=\"dropdown-item\" id=\"" + channelId + "\" href=\"#\">" + channelName + "</a>");
};

var DropdownMenu = function () {
    function DropdownMenu() {
        _classCallCheck(this, DropdownMenu);
    }

    _createClass(DropdownMenu, [{
        key: "addOnClickHandler",
        value: function addOnClickHandler() {
            $(".dropdown-menu a").click(function () {
                var channelId = $(this).attr('id');
                var channelName = $(this).text();
                $("#dropdownMenuButton").html(channelName + " <span class=\"caret\"></span>");
                new Fetcher(NEWS_URL_WITHOUT_SOURCE + channelId, function (json) {
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

                            $("#dropdownSection").after("    <hr class=\"featurette-divider\">\n\n                                        <div class=\"row featurette\">\n                                            <div class=\"col-md-7\">\n                                                <h2 class=\"featurette-heading\">" + article.title + "</h2>\n                                                <p class=\"lead\">" + article.description + "</p>\n                                            </div>\n                                            <div class=\"col-md-5\">\n                                                <img class=\"featurette-image img-fluid mx-auto\" src=\"" + article.urlToImage + "\"\n                                                     alt=\"News image\">\n                                            </div>\n                                        </div>");
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
            });
        }
    }]);

    return DropdownMenu;
}();

new Fetcher(CHANNELS_URL, function (json) {
    var _json$sources = json.sources,
        sources = _json$sources === undefined ? [] : _json$sources;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = sources[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var channel = _step2.value;

            new DropdownMenuItem(channel.name, channel.id);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    new DropdownMenu().addOnClickHandler();
}, function (error) {
    return $('#alert').show();
}).executeFetch();

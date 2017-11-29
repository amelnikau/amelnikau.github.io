"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        value: function executeFetch() {
            var _this = this;

            fetch(new Request(this.url)).then(function (response) {
                response.json().then(_this.fulfillClosure);
            }).catch(this.rejectClosure);
        }
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

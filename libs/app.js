const NEWS_API_KEY = 'a3542e73015b4afcb6e9f34ae4c89598';
const CHANNELS_URL = `https://newsapi.org/v2/sources?language=en&country=us&category=general&apiKey=${NEWS_API_KEY}`;
const NEWS_URL_WITHOUT_SOURCE = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&sources=`;

class Fetcher {
    constructor(url, fulfillClosure, rejectClosure) {
        this.url = url;
        this.fulfillClosure = fulfillClosure;
        this.rejectClosure = rejectClosure;
    }

    executeFetch() {
        fetch(new Request(this.url))
            .then((response) => {
                response.json().then(this.fulfillClosure);
            })
            .catch(this.rejectClosure);
    }
}


class DropdownMenuItem {
    constructor(channelName, channelId) {
        $("#dropdownMenu").append(`<a class="dropdown-item" id="${channelId}" href="#">${channelName}</a>`);
    }
}

class DropdownMenu {
    addOnClickHandler() {
        $(".dropdown-menu a").click(function () {
                let channelId = $(this).attr('id');
                let channelName = $(this).text();
                $("#dropdownMenuButton").html(`${channelName} <span class="caret"></span>`);
                new Fetcher(NEWS_URL_WITHOUT_SOURCE + channelId, (json) => {
                    let {articles = []} = json;
                    $("#articles").empty();
                    for (let article of articles) {
                        $("#articles").append(`<li class="list-group-item">${article.description}</li>`);
                    }
                }, null).executeFetch();
            }
        );
    }
}

new Fetcher(CHANNELS_URL, (json) => {
    let {sources = []} = json;
    for (let channel of sources) {
        new DropdownMenuItem(channel.name, channel.id);
    }
    new DropdownMenu().addOnClickHandler();
}, null).executeFetch();

const NEWS_API_KEY = 'a3542e73015b4afcb6e9f34ae4c89598';
const CHANNELS_URL = `https://newsapi.org/v2/sources?language=en&country=us&category=general&apiKey=${NEWS_API_KEY}`;
const NEWS_URL_WITHOUT_SOURCE = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&sources=`;

class Fetcher {
    constructor(url, fulfillClosure, rejectClosure) {
        this.url = url;
        this.fulfillClosure = fulfillClosure;
        this.rejectClosure = rejectClosure;
        console.log(this);
    }

    async executeFetch() {
        try {
            let response = await fetch(new Request(this.url));
            let jsonResponse = await response.json();
            this.fulfillClosure(jsonResponse);
        } catch (e) {
            this.rejectClosure(e);
        }
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
                    $(".featurette").remove();
                    $(".featurette-divider").remove();
                    for (let article of articles) {
                        $("#dropdownSection")
                            .after(`    <hr class="featurette-divider">

                                        <div class="row featurette">
                                            <div class="col-md-7">
                                                <h2 class="featurette-heading">${article.title}</h2>
                                                <p class="lead">${article.description}</p>
                                            </div>
                                            <div class="col-md-5">
                                                <img class="featurette-image img-fluid mx-auto" src="${article.urlToImage}"
                                                     alt="News image">
                                            </div>
                                        </div>`);
                    }
                }, (error) => $('#alert').show()).executeFetch();
            }
        );
    }
}

new Fetcher(CHANNELS_URL, (json) => {
    let {sources = []} = json;
    console.log(sources);
    for (let channel of sources) {
        new DropdownMenuItem(channel.name, channel.id);
    }
    new DropdownMenu().addOnClickHandler();
}, (error) => $('#alert').show()).executeFetch();

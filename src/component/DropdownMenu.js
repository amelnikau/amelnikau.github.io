export default class DropdownMenu {

    constructor(store) {
        this.store = store;
        this.store.subscribe(this.renderNews.bind(this));
        this.newsItemsFlightWeightsFactory = new NewsItemsFlightWeightsFactory();
    }

    addOnClickHandler() {
        let store = this.store;
        $(".dropdown-menu a").click(async function () {
                let channelId = $(this).attr('id');
                let channelName = $(this).text();
                store.dispatch({"type": "SELECT_CHANNEL", "channelId": channelId, "channelName": channelName});
            }
        );
    }

    async renderNews() {
        let Fetcher = (await import(/* webpackChunkName: "fetcher" */ '../util/fetcher')).default;
        let configModule = await import(/* webpackChunkName: "config" */ '../config/config');
        let state = this.store.getState();
        let newsItemsFlightWeightsFactory = this.newsItemsFlightWeightsFactory;

        $("#dropdownMenuButton").html(`${state.channelName} <span class="caret"></span>`);
        new Fetcher(configModule.NEWS_URL_WITHOUT_SOURCE + state.channelId, (json) => {
            let {articles = []} = json;
            $(".featurette").remove();
            $(".featurette-divider").remove();
            for (let article of articles) {
                $("#dropdownSection")
                    .after(newsItemsFlightWeightsFactory
                        .get(article.title, article.description, article.urlToImage).render());
            }
        }, (error) => $('#alert').show()).executeFetch();
    }
}

function NewsItemFlightWeight(title, description, urlToImage) {
    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;

    this.html = `<hr class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">${this.title}</h2>
                        <p class="lead">${this.description}</p>
                    </div>
                    <div class="col-md-5">
                        <img class="featurette-image img-fluid mx-auto" src="${this.urlToImage}"
                             alt="News image">
                    </div>
                </div>`;

    this.render = () => this.html;
}

function NewsItemsFlightWeightsFactory() {
    let flightWeights = {};

    // clean every 3 minutes
    setInterval(() => flightWeights = {}, 1000 * 60 * 3);

    return {
        get: function (title, description, urlToImage) {
            if (!flightWeights[title]) {
                flightWeights[title] =
                    new NewsItemFlightWeight(title, description, urlToImage);
            }
            return flightWeights[title];
        }
    };
}
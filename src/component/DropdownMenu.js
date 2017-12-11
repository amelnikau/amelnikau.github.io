export default class DropdownMenu {
    addOnClickHandler() {
        $(".dropdown-menu a").click(async function () {
                let Fetcher = (await import(/* webpackChunkName: "fetcher" */ '../util/fetcher')).default;
                let configModule = await import(/* webpackChunkName: "config" */ '../config/config');

                let channelId = $(this).attr('id');
                let channelName = $(this).text();
                $("#dropdownMenuButton").html(`${channelName} <span class="caret"></span>`);
                new Fetcher(configModule.NEWS_URL_WITHOUT_SOURCE + channelId, (json) => {
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
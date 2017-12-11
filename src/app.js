import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "bootstrap";
import test_json from './test/json_with_number_attributes.json';


$("#news_button").click(async function () {
    $("#buttonSection").hide();

    let Fetcher = (await import(/* webpackChunkName: "fetcher" */ './util/fetcher')).default;
    let DropdownMenuItem = (await import(/* webpackChunkName: "DropdownMenuItem" */ './component/DropdownMenuItem')).default;
    let DropdownMenu = (await import(/* webpackChunkName: "DropdownMenu" */ './component/DropdownMenu')).default;
    let configModule = await import(/* webpackChunkName: "config" */ './config/config');

    new Fetcher(configModule.CHANNELS_URL, async (json) => {
        let {sources = []} = json;
        console.log(sources);
        for (let channel of sources) {
            new DropdownMenuItem(channel.name, channel.id);
        }
        new DropdownMenu().addOnClickHandler();
    }, (error) => $('#alert').show()).executeFetch();

    $("#dropdownSection").show();
});
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "bootstrap";
import createStore from './util/redux';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_DROPDOWN':
            return {showEmptyDropdown:true, channelName:undefined, channelId: undefined};
        case 'SELECT_CHANNEL':
            return {showEmptyDropdown: false, channelName: action.channelName, channelId: action.channelId};
        default:
            return state;
    }
};

const defaultState = {
    showEmptyDropdown:false,
    channelName:undefined,
    channelId:undefined
};

const store = createStore(reducer);

store.subscribe(renderDropdown);

$("#news_button").click(async function () {
    store.dispatch({"type": "SHOW_DROPDOWN"});
});

async function renderDropdown() {
    if (store.getState().showEmptyDropdown) {
        $("#buttonSection").hide();

        let Fetcher = (await import(/* webpackChunkName: "fetcher" */ './util/fetcher')).default;
        let DropdownMenuItem = (await import(/* webpackChunkName: "DropdownMenuItem" */ './component/DropdownMenuItem')).default;
        let DropdownMenu = (await import(/* webpackChunkName: "DropdownMenu" */ './component/DropdownMenu')).default;
        let configModule = await import(/* webpackChunkName: "config" */ './config/config');

        new Fetcher(configModule.CHANNELS_URL, async (json) => {
            let {sources = []} = json;
            for (let channel of sources) {
                new DropdownMenuItem(channel.name, channel.id);
            }
            new DropdownMenu(store).addOnClickHandler();
        }, (error) => $('#alert').show()).executeFetch();

        $("#dropdownSection").show();
    }
}
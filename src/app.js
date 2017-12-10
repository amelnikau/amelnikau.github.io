import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "bootstrap";
import Fetcher from './util/fetcher';
import DropdownMenuItem from './component/DropdownMenuItem';
import DropdownMenu from './component/DropdownMenu';
import {CHANNELS_URL} from './config/config';


new Fetcher(CHANNELS_URL, (json) => {
    let {sources = []} = json;
    console.log(sources);
    for (let channel of sources) {
        new DropdownMenuItem(channel.name, channel.id);
    }
    new DropdownMenu().addOnClickHandler();
}, (error) => $('#alert').show()).executeFetch();

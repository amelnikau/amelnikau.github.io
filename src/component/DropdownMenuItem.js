export default class DropdownMenuItem {
    constructor(channelName, channelId) {
        $("#dropdownMenu").append(`<a class="dropdown-item" id="${channelId}" href="#">${channelName}</a>`);
    }
}
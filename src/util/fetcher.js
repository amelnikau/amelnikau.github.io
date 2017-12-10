export default class Fetcher {
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
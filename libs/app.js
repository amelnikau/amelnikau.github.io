import channelsPromise from 'channels';
import CHANNELS_URL from "channels";
import NEWS_API_KEY from 'config';

console.log(NEWS_API_KEY);
console.log(CHANNELS_URL);

channelsPromise.then((response) => {
    console.log(response)
});


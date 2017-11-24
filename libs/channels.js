import NEWS_API_KEY from 'config';

export const CHANNELS_URL = `https://newsapi.org/v2/sources?language=en&country=us&category=general&apiKey=${NEWS_API_KEY}`;

export default fetch(new Request(CHANNELS_URL));
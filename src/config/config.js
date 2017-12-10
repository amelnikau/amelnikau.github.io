const NEWS_API_KEY = 'a3542e73015b4afcb6e9f34ae4c89598';
const CHANNELS_URL = `https://newsapi.org/v2/sources?language=en&country=us&category=general&apiKey=${NEWS_API_KEY}`;
const NEWS_URL_WITHOUT_SOURCE = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&sources=`;

export {CHANNELS_URL,NEWS_URL_WITHOUT_SOURCE};
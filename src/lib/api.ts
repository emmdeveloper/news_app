export const fetchTHNews = async () => {
  const apikey: string = await import.meta.env.VITE_NEWS_KEY;
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`
  );
  const NewsData = await response.json();
  return NewsData;
};
export const fetchFNews = async (href: string) => {
  const apikey: string = await import.meta.env.VITE_NEWS_KEY;
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${href}&apiKey=${apikey}`
  );
  const NewsData = await response.json();
  return NewsData;
};
export const SearchedNews = async (q: string) => {
  const apikey: string = await import.meta.env.VITE_NEWS_KEY;
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=${apikey}`
  );
  const NewsData = await response.json();
  return NewsData;
};

export interface News {
  map(
    arg0: (news: string, i: number) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  news: NewsDetails[];
}
export interface NewsDetails {
  author: string;
  content: string;
  description: string;
  source?: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

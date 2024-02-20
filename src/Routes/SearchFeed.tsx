import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { SearchedNews } from "../lib/api";
import NewsCard from "../components/NewsCard";
const SearchFeed = () => {
  const [MoreNews, setMoreNews] = useState<null[]>(null);
  const { searchTerm } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["search"],
    queryFn: () => SearchedNews(searchTerm),
  });
  useEffect(() => {
    setMoreNews(data.articles);
  }, [data, searchTerm]);
  return (
    <div>
      {isLoading && (
        <TailSpin
          width={120}
          height={120}
          color="#3b82f6"
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            marginTop: "100px",
            justifyContent: "center",
          }}
        />
      )}
      {error && <p>Something went wrong</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {MoreNews?.map((news, i) => (
          <NewsCard key={i} news={news} />
        ))}
      </div>
    </div>
  );
};

export default SearchFeed;

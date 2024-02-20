import { useQuery } from "react-query";
import { fetchFNews } from "../lib/api";
import NewsCard from "../components/NewsCard";
import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Finance = () => {
  const location = useLocation();
  const url: string = location.pathname.slice(1);
  const [MoreNews, setMoreNews] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["finance"],
    queryFn: () => fetchFNews(url),
  });
  useEffect(() => {
    setMoreNews(data?.articles);
  }, [data]);

  return (
    <section className="">
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
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MoreNews?.map((news, i) => (
            <NewsCard key={i} news={news} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Finance;

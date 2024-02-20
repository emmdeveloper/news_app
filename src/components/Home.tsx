import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchTHNews } from "../lib/api";
import { TailSpin } from "react-loader-spinner";
import NewsCard from "./NewsCard";
const Home = () => {
  const [MoreNews, setMoreNews] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    refetchOnMount: false,
    queryFn: fetchTHNews,
  });
  useEffect(() => {
    setMoreNews(data?.articles);
    console.log(data?.articles);
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

export default Home;

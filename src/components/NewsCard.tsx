import React from "react";
const NewsCard = ({ news }) => {
  return (
    <section>
      <aside className="">
        {news?.urlToImage ? (
          <img src={news?.urlToImage} alt={news?.title} />
        ) : (
          <img src="/noImage.png" alt={news?.title} className="mx-auto" />
        )}
        <div className="text-black font-[Inter] text-center ">
          <h2 className="hover:underline font-bold p-4">
            <a href={news.url} target="_blank" rel="noreferrer">
              {news?.title}
            </a>
          </h2>
          <p>{news?.description}</p>
          <div>
            <h2>
              Source - <span className="font-bold"> {news?.source?.name}</span>
            </h2>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default NewsCard;

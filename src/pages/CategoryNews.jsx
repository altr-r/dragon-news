import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { useEffect } from "react";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id === "0") {
      setCategoryNews(data);
      return;
    } else if (id === "1") {
      const filertedNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filertedNews);
    } else {
      const filertedNews = data.filter(
        (news) => news.category_id === parseInt(id)
      );
      setCategoryNews(filertedNews);
    }
  }, [data, id]);
  return <div>Total {categoryNews.length} news Found</div>;
};

export default CategoryNews;

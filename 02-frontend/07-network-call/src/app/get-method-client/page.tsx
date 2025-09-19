"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function GetMethodClient() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const data = await axios.get(
        "https://assuredmountain-us.backendless.app/api/data/articles",
        { method: "GET" }
      );

      setArticles(data.data);
    }

    getArticles();
  }, []);

  return (
    <main>
      <h1>My Blog</h1>
      <div>
        {articles.map((article: { objectId: string; title: string }) => (
          <h2 key={article.objectId}>{article.title}</h2>
        ))}
      </div>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
/*
useEffect(callback_function, array_dependency)
useEffect(() => {}, [])
*/

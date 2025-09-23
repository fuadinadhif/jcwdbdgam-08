"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteMethod() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const data = await axios.get(
        "https://assuredmountain-us.backendless.app/api/data/articles",
        { method: "GET" }
      );

      setArticles(data.data);
      console.log(data);
    }

    getArticles();
  }, []);

  async function handleDelete(objectId: string) {
    await fetch(
      `https://assuredmountain-us.backendless.app/api/data/articles/${objectId}`,
      { method: "DELETE" }
    );

    setArticles((prev) => {
      return prev.filter((article) => article.objectId !== objectId);
    });
  }

  return (
    <main>
      <h1>My Blog</h1>
      <div>
        {articles.map((article: { objectId: string; title: string }) => (
          <div key={article.objectId}>
            <h2>{article.title}</h2>
            <button onClick={() => handleDelete(article.objectId)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

/*
https://assuredmountain-us.backendless.app/api/data/articles => GET & POST
https://assuredmountain-us.backendless.app/api/data/articles/43524234-342349123 => DELETE & PUT
*/

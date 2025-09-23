"use client";

import React, { useEffect, useState } from "react";

export default function PutMethod() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getArticle() {
      const response = await fetch(
        "https://assuredmountain-us.backendless.app/api/data/articles/659D2108-5DB3-40DC-9383-45E758FCA04C"
      );

      const data = await response.json();

      console.log(data);

      setTitle(data.title);
      setContent(data.content);
    }

    getArticle();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await fetch(
      "https://assuredmountain-us.backendless.app/api/data/articles/659D2108-5DB3-40DC-9383-45E758FCA04C",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      }
    );
  }

  return (
    <main className="grid place-items-center min-h-screen">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Update Article</button>
      </form>
    </main>
  );
}

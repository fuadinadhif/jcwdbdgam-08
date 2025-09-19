"use client";

import { useState } from "react";

export default function PostMethod() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <main>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          await fetch(
            "https://assuredmountain-us.backendless.app/api/data/articles",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ title, content }),
            }
          );
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Input title here..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          placeholder="Input content here"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        ></textarea>

        <button type="submit">Post Article</button>
      </form>
    </main>
  );
}

"use client"; // Mengubah server component menjadi client component. Diubah karena kita mau menerima input dari user kita

import { useState } from "react"; // Agar bisa membuat state

// Sebuah component
// 1. Sebuah fungsi yang namanya harus PascalCase
// 2. Punya return HTML
// 3. Fungsinya harus diexport. `page.tsx` => export default | `navbar.tsx`, `custom-button.tsx` => export default atau export named
export default function PostMethod() {
  // Membuat input yang awalnya uncontrolled menjadi controlled input
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <main className="grid place-items-center min-h-screen">
      <form
        className="grid"
        onSubmit={async (event) => {
          event.preventDefault(); // Agar tidak menjalankan kelakuan defaultnya (reload window)

          /*
          await fetch(api_url, {
            method: "GET" | "POST" | "PUT" | "DELETE".
            headers: {
              "content-type": "application/json"
            },
            body: {}
          })
           */
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
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Input title here..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="border border-white"
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Input content here"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            className="border border-white"
          ></textarea>
        </div>

        <button type="submit">Post Article</button>
      </form>
    </main>
  );
}

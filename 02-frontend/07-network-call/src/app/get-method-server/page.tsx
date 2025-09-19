import axios from "axios";

export default async function GetMethodServer() {
  /* ------------------------------ Manual fetch ------------------------------ */
  // const response = await fetch(
  //   "https://assuredmountain-us.backendless.app/api/data/articles",
  //   {
  //     method: "GET",
  //   }
  // );
  // const data = await response.json(); // Method untuk mengambil body JSON dari sebuah Response object

  // console.log(response);
  // console.log(data);

  /* ------------------------------- Axios fetch ------------------------------ */
  const { data } = await axios.get(
    "https://assuredmountain-us.backendless.app/api/data/articles",
    {
      method: "GET",
    }
  );

  console.log(data);

  return (
    <main>
      <h1>My Blog</h1>
      <div>
        {data.map((article: { objectId: string; title: string }) => (
          <h2 key={article.objectId}>{article.title}</h2>
        ))}
      </div>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
/*
HTTP METHODS:
1. GET => Mengambil data

FETCH:
fetch(api_url, object_options)
*/

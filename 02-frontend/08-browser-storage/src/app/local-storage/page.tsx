"use client";

import React, { useEffect, useState } from "react";

export default function LocalStorage() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userData")!);
    console.log(userName);
  }, []);

  function handleSave(event: React.FormEvent) {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ userName, fullName }));

    alert("Data saved on local storage");
  }

  return (
    <main>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>

        <button type="submit">Save Data</button>
      </form>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Alasan untuk mengubah server komponen menjadi client komponen:
// 1. Ketika butuh input user
// 2. Ketika kita menggunakan React Hooks
// 3. Ketika kita ingin mengakses fitur browser

// const [userData, setUserData] = useState({ userName: "", fullName: "" });
// <div>
//   <label htmlFor="username">User Name</label>
//   <input
//     type="text"
//     id="username"
//     value={userData.userName}
//     onChange={(event) =>
//       setUserData({ ...userData, userName: event.target.value })
//     }
//   />
// </div>;

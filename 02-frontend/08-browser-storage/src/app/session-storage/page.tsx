"use client";

import React, { useEffect, useState } from "react";

export default function SessionStorage() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData")!);
    
    if (userData) {
      setUserName(userData.userName);
      setFullName(userData.fullName);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify({ userName, fullName }));
  }, [userName, fullName]);

  // function handleChange(updatedUserName: string, updatedFullName: string) {
  //   sessionStorage.setItem(
  //     "userData",
  //     JSON.stringify({ userName: updatedUserName, fullName: updatedFullName })
  //   );
  // }

  return (
    <main>
      <form>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
              // handleChange(event.target.value, fullName);
            }}
          />
        </div>

        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
              // handleChange(userName, event.target.value);
            }}
          />
        </div>

        <button type="submit">Save Data</button>
      </form>
    </main>
  );
}

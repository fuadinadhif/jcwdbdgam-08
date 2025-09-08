// Promise -> Janji -> Ditepati/Dilanggar/On Progress -> Resolve/Reject/Pending

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    return resolve({ password: "bismillah123" });
  } else {
    return reject("Promise gagaaaaal!");
  }
});

console.log(myPromise);

/* -------------------------------- Dot then -------------------------------- */
myPromise
  .then((data) => {
    console.log(data);
    console.log("Horeee promise berhasil!");
  })
  .catch((error) => {
    console.log(error);
    console.log("Yahh promise gagal!");
  });

/* ------------------------------ Async / await ----------------------------- */
// syntatic sugar

async function handleMyPromise() {
  try {
    const data = await myPromise; // resolve/reject?
    console.log(data);
    console.log("Horeee promise berhasil!");
  } catch (error) {
    console.log(error);
    console.log("Yahh promise gagal!");
  }
}

handleMyPromise();

/* ----------------------------- Error Handling ----------------------------- */
// Dua kemungkinan kode di dalam catch block dijalankan
// 1. Promise rejected
// 2. Kode throw error

const yourPromise = new Promise((resolve, reject) => {
  // return resolve("Your promise resolved!");
  return reject("Your promise rejected!");
});

yourPromise
  .then(() => {
    console.log("Success!");
    console.log(1);

    throw new Error("Failed in the middle");

    console.log(2);
    console.log(3);
  })
  .catch((error) => {
    console.log(error);
    console.log("Failed!");
  });

/* -------------------------- Real Case Async Await ------------------------- */
// Dot then
const jsonPlaceholderPromise = fetch(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(jsonPlaceholderPromise);

jsonPlaceholderPromise
  .then((data) => {
    console.log(data);
    console.log("Promise succes!");

    return data.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch(() => console.log("Promise failed!"));

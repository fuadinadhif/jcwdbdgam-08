import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      {/* header */}
      <header>
        <h1>Logo</h1>
        <Navbar />
      </header>

      {/* main content */}
      <main>
        <p>Main content here</p>
      </main>

      {/* footer */}
      <footer>Created by ❤</footer>
    </>
  );
}

/* -------------------------- Cara mebuat komponen -------------------------- */
/*
1. Buat sebuah fungsi
2. Pastikan nama fungsinya harus pakai PascalCase
3. Return sebuah element HTML di dalam fungsi tersebut
4. Export default fungsi tersebut
*/

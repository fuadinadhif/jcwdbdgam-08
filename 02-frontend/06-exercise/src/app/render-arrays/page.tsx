const studentNames = ["Zelda", "Mario", "Fullmetal Slug", "Bounce"]; // => [<p>Zelda</p>, <p>Mario</p>, <p>Fullmetal Slug</p>, <p>Bounce</p>]

// export default function RenderArrays() {
//   return (
//     <main>
//       <p>{studentNames[0]}</p>
//       <p>{studentNames[1]}</p>
//       <p>{studentNames[2]}</p>
//       <p>{studentNames[3]}</p>
//     </main>
//   );
// }

// export default function RenderArrays() {
//   return (
//     <main>
//       {[<p>Zelda</p>, <p>Mario</p>, <p>Fullmetal Slug</p>, <p>Bounce</p>]}
//     </main>
//   );
// }

export default function RenderArrays() {
  return (
    <main>
      {studentNames.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </main>
  );
}

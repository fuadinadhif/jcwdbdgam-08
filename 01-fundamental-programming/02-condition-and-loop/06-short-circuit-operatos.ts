/* -------------------------- && Short Circuit AND -------------------------- */
// Akan selalu mengambil nilai falsy pertama atau ketika keduanya truthy maka dia akan mengambil nilai truthy terakhir
console.log("truthy 1" && 0);
console.log("truthy 1" && "truthy 2");
console.log(0 && "truthy 1");
console.log(0 && -0);

/* --------------------------- || Short Circuit OR -------------------------- */
console.log("truthy 1" || 0);
console.log("truthy 1" || "truthy 2");
console.log(0 || "truthy 1");
console.log(0 || -0);

/* ---------------------------------- NOTES --------------------------------- */
// && -> logical operator AND
// perbandingan1 && perbandingan2 -> logical operator AND
// boolean1 && boolean2 -> logical operator AND

// && -> short circuit AND
// value1 && value2 -> short circuit AND

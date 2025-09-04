/* ------------------------------- Explanation ------------------------------ */
// property -> gabungan dari key dan value di dalam suatu object. { key1: value1, key2: value2 }
// method -> property yang valuenya adalah sebuah fungsi. { key: () => {} }

const people = {
  fullName: "King Richard III", // reguler property
  greeting: () => {
    // method
    return "Hi, peasants!";
  },
};

console.log(people.fullName);
console.log(people.greeting());

/* ------------------------- Add and remove property ------------------------ */
interface EmployeeData {
  address?: string;
  fullName: string;
  salary?: number;
  position: string;
}

const employeeData: EmployeeData = {
  fullName: "Jacob Anderson",
  position: "Manager",
  salary: 2000,
};

console.log(employeeData);

employeeData.address = "DKI Jakarta"; // add

console.log(employeeData);

delete employeeData.salary; // remove

console.log(employeeData);

/* ----------------------------- Accessing value ---------------------------- */
const customerData = { name: "Somebody", address: "Jakarta" };

console.log(customerData.name);
console.log(customerData["address"]);

const keyName = "address";
console.log(customerData[keyName]);

console.log(customerData.name, customerData.address);

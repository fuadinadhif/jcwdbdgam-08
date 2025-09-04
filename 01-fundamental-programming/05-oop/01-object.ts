{
  let object1 = {};
  let object2 = new Object();

  console.log(object1);
  console.log(object2);

  /* -------------------------- TypeScript Interface -------------------------- */
  const location: string | null = "Umbulharjo, Yogyakarta"; // explicit
  const zipCode = "55234"; // implicit

  interface UserData {
    name: string;
    userName: string;
    age: number | null;
    email: string | null;
  }

  const userData: UserData = {
    name: "John Doe",
    userName: "johndoe",
    age: 90,
    email: null,
  };
}

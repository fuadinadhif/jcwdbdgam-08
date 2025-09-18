interface IArrayOfObject {
  name: string;
  age?: number;
}

const age: number = 10;
const fullName: string = "Erick Thohir";
const isLoading: boolean = true;

const arrayOfNums: number[] = [1, 2, 3, 4];
const arrayOfObject: IArrayOfObject[] = [
  { name: "Joko", age: 10 },
  { name: "Purboyo" },
];

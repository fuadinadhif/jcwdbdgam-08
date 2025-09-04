// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism

/* ------------------------------- Inheritance ------------------------------ */
// Pewarisan

class Product {
  price: number;
  brand: string;

  constructor(price: number, brand: string) {
    this.price = price;
    this.brand = brand;
  }

  getPrice() {
    return "Rp." + this.price;
  }
}

class Book extends Product {
  author: string;
  publisher: string;

  constructor(price: number, brand: string, author: string, publisher: string) {
    super(price, brand);
    this.author = author;
    this.publisher = publisher;
  }
}

class CanFood extends Product {
  expiredDate: Date;
  weight: string;

  constructor(price: number, brand: string, expiredDate: Date, weight: string) {
    super(price, brand);
    this.expiredDate = expiredDate;
    this.weight = weight;
  }
}

// instance -> object yang dibuat dari sebuah kelas
const harryPotter = new Book(1000, "Gramedia", "J.K Rowling", "Gramedia");
console.log(harryPotter.price);
console.log(harryPotter.publisher);
console.log(harryPotter.getPrice());

const sarden = new CanFood(12_000, "ABC", new Date("2025-05-05"), "10g");
console.log(sarden.getPrice());

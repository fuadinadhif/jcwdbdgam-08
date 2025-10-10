-- Create Store Table
CREATE TABLE IF NOT EXISTS stores (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(50) NOT NULL UNIQUE,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(50)
);

-- Create Product table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(50),
  category_id INTEGER,
  store_id INTEGER,
  price DECIMAL(10, 2),
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (store_id) REFERENCES stores(id)
);

-- Add data into stores table
INSERT INTO stores (store_name, city)
VALUES
  ('Store Jakarta', 'Jakarta'),
  ('Store Bandung', 'Bandung'),
  ('Store Yogyakarta', 'Yogyakarta'),
  ('Store Jember', 'Jember'),
  ('Store Cilegon', 'Cilegon');

-- Add data into categories table
INSERT INTO categories (category_name) VALUES
  ('Electronics'),
  ('Clothing'),
  ('Books'),
  ('Food & Beverage'),
  ('Health & Beauty'),
  ('Sports'),
  ('Furniture'),
  ('Toys'),
  ('Automotive'),
  ('Stationery');

-- Add data into products table
INSERT INTO products (product_name, category_id, store_id, price) VALUES
  ('Laptop Asus VivoBook', 1, 1, 8500000.00),
  ('Smartphone Samsung A55', 1, 2, 6200000.00),
  ('Headphone Sony WH-1000XM5', 1, 3, 4900000.00),
  ('Kemeja Batik Premium', 2, 1, 350000.00),
  ('Celana Jeans Levi’s', 2, 4, 720000.00),
  ('Novel Laskar Pelangi', 3, 3, 95000.00),
  ('Majalah Bisnis Indonesia', 3, 5, 45000.00),
  ('Kopi Arabica Gayo 500g', 4, 1, 120000.00),
  ('Teh Hijau Premium 250g', 4, 2, 90000.00),
  ('Vitamin C 1000mg', 5, 3, 85000.00),
  ('Shampoo Sunsilk 340ml', 5, 4, 48000.00),
  ('Sepatu Olahraga Nike Air', 6, 2, 1450000.00),
  ('Raket Badminton Yonex', 6, 3, 650000.00),
  ('Meja Belajar Kayu Jati', 7, 4, 1200000.00),
  ('Kursi Kantor Ergonomis', 7, 1, 2100000.00),
  ('Mainan Lego Classic', 8, 3, 350000.00),
  ('Mobil Remote Control', 8, 5, 275000.00),
  ('Oli Mobil Shell Helix', 9, 2, 185000.00),
  ('Kaca Spion Motor', 9, 4, 95000.00),
  ('Pulpen Pilot G2', 10, 5, 25000.00),
  ('Buku Catatan Hardcover', 10, 1, 45000.00),
  ('Smartwatch Xiaomi Band 8', 1, 1, 650000.00),
  ('Earbuds JBL Tune', 1, 3, 480000.00),
  ('Kaos Polos Uniqlo', 2, 2, 120000.00),
  ('Jaket Hoodie Adidas', 2, 4, 850000.00),
  ('Buku Pemrograman Python', 3, 1, 135000.00),
  ('Cokelat SilverQueen 65g', 4, 3, 18000.00),
  ('Minuman Isotonik Pocari', 4, 2, 9000.00),
  ('Masker Wajah Naturgo', 5, 5, 35000.00),
  ('Obat Flu Panadol', 5, 1, 25000.00),
  ('Matras Yoga Decathlon', 6, 4, 450000.00),
  ('Tas Gym Nike', 6, 3, 390000.00),
  ('Rak Buku Minimalis', 7, 5, 950000.00),
  ('Lemari 3 Pintu', 7, 2, 2700000.00),
  ('Boneka Teddy Bear 60cm', 8, 4, 175000.00),
  ('Puzzle 1000 Pieces', 8, 3, 135000.00),
  ('Helm Full Face KYT', 9, 1, 650000.00),
  ('Sarung Tangan Motor', 9, 2, 85000.00),
  ('Pensil Mekanik Faber-Castell', 10, 4, 20000.00),
  ('Stabilo Warna Neon', 10, 5, 35000.00);

-- INNER JOIN
SELECT products.product_name, categories.category_name
FROM products
INNER JOIN categories
  ON products.category_id = categories.id;

SELECT *
FROM products
INNER JOIN categories
  ON products.category_id = categories.id;

-- LEFT JOIN
SELECT products.product_name, categories.category_name
FROM products
LEFT JOIN categories
  ON products.category_id = categories.id;

-- RIGHT JOIN
SELECT products.product_name, categories.category_name
FROM products
RIGHT JOIN categories
  ON products.category_id = categories.id;

-- FULL OUTER
SELECT products.product_name, categories.category_name
FROM products
FULL OUTER JOIN categories
  ON products.category_id = categories.id;

/* -------------------------------------------------------------------------- */
/*                                  QUESTIONS                                 */
/* -------------------------------------------------------------------------- */
1. Display a list of all products along with their category names and store names,
but only show products that have both valid category and store data.

Output: | product_name | category_name | store_name | price |

SELECT products.product_name, categories.category_name, stores.store_name, products.price
FROM products
INNER JOIN categories ON products.category_id = categories.id
INNER JOIN stores ON products.store_id = stores.id;

SELECT p.product_name, c.category_name, s.store_name, p.price
FROM products p
INNER JOIN categories c ON p.category_id = c.id
INNER JOIN stores s ON p.store_id = s.id;
CREATE DATABASE IF NOT EXISTS littlecloud_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE littlecloud_db;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  price      INT NOT NULL,
  stock      INT NOT NULL DEFAULT 0,
  category   VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO products (name, price, stock, category) VALUES
('Kaos Polos Anak',       45000,  50, 'Atasan'),
('Kemeja Kotak Anak',     65000,  35, 'Atasan'),
('Dress Bunga Anak',      85000,  30, 'Dress'),
('Dress Polkadot Anak',   90000,  20, 'Dress'),
('Celana Jeans Anak',     75000,  40, 'Bawahan'),
('Celana Pendek Anak',    55000,  45, 'Bawahan'),
('Jaket Hoodie Anak',    120000,   8, 'Jaket'),
('Jaket Denim Anak',     110000,  15, 'Jaket'),
('Piyama Karakter Anak',  65000,  60, 'Tidur'),
('Setelan Tidur Anak',    70000,  38, 'Tidur');

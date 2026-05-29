require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'littlecloud_db',
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database');

  const createTable = `
    CREATE TABLE IF NOT EXISTS products (
      id         INT AUTO_INCREMENT PRIMARY KEY,
      name       VARCHAR(255) NOT NULL,
      price      INT NOT NULL,
      stock      INT NOT NULL DEFAULT 0,
      category   VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;
  db.query(createTable, (err) => {
    if (err) console.error('❌ Error creating table:', err.message);
    else console.log('✅ Table "products" is ready');
  });
});

module.exports = db;

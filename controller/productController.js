const db = require('../db');

// GET /api/products
const getAllProducts = (req, res) => {
  const { category, search } = req.query;
  let query = 'SELECT * FROM products WHERE 1=1';
  const params = [];
  if (category) { query += ' AND category = ?'; params.push(category); }
  if (search)   { query += ' AND name LIKE ?'; params.push(`%${search}%`); }
  query += ' ORDER BY created_at DESC';

  db.query(query, params, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: results, count: results.length });
  });
};

// GET /api/products/stats
const getStats = (req, res) => {
  const query = `
    SELECT
      COUNT(*)            AS total_produk,
      COALESCE(SUM(stock),0)  AS total_stok,
      MIN(price)          AS harga_termurah,
      MAX(price)          AS harga_termahal,
      COUNT(DISTINCT category) AS total_kategori
    FROM products
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: results[0] });
  });
};

// GET /api/products/:id
const getProductById = (req, res) => {
  db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (!results.length) return res.status(404).json({ success: false, message: 'Produk tidak ditemukan' });
    res.json({ success: true, data: results[0] });
  });
};

// POST /api/products
const createProduct = (req, res) => {
  const { name, price, stock, category } = req.body;
  db.query(
    'INSERT INTO products (name, price, stock, category) VALUES (?, ?, ?, ?)',
    [name.trim(), Number(price), Number(stock), category.trim()],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.status(201).json({
        success: true,
        message: 'Produk berhasil ditambahkan',
        data: { id: result.insertId, name, price: Number(price), stock: Number(stock), category },
      });
    }
  );
};

// PUT /api/products/:id
const updateProduct = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (!results.length) return res.status(404).json({ success: false, message: 'Produk tidak ditemukan' });

    const cur = results[0];
    const { name, price, stock, category } = req.body;
    const updated = {
      name:     name     !== undefined ? name.trim()        : cur.name,
      price:    price    !== undefined ? Number(price)      : cur.price,
      stock:    stock    !== undefined ? Number(stock)      : cur.stock,
      category: category !== undefined ? category.trim()    : cur.category,
    };

    db.query(
      'UPDATE products SET name=?, price=?, stock=?, category=? WHERE id=?',
      [updated.name, updated.price, updated.stock, updated.category, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: 'Produk berhasil diupdate' });
      }
    );
  });
};

// DELETE /api/products/:id
const deleteProduct = (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (!result.affectedRows) return res.status(404).json({ success: false, message: 'Produk tidak ditemukan' });
    res.json({ success: true, message: 'Produk berhasil dihapus' });
  });
};

module.exports = { getAllProducts, getStats, getProductById, createProduct, updateProduct, deleteProduct };

const requestLogger = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
};

const validateProduct = (req, res, next) => {
  const { name, price, stock, category } = req.body;
  if (!name || name.trim() === '')
    return res.status(400).json({ success: false, message: 'Nama produk wajib diisi' });
  if (price === undefined || isNaN(price) || Number(price) < 0)
    return res.status(400).json({ success: false, message: 'Harga harus berupa angka positif' });
  if (stock === undefined || isNaN(stock) || Number(stock) < 0)
    return res.status(400).json({ success: false, message: 'Stok harus berupa angka positif' });
  if (!category || category.trim() === '')
    return res.status(400).json({ success: false, message: 'Kategori wajib diisi' });
  next();
};

const validateUpdate = (req, res, next) => {
  const { price, stock } = req.body;
  if (price !== undefined && (isNaN(price) || Number(price) < 0))
    return res.status(400).json({ success: false, message: 'Harga harus berupa angka positif' });
  if (stock !== undefined && (isNaN(stock) || Number(stock) < 0))
    return res.status(400).json({ success: false, message: 'Stok harus berupa angka positif' });
  next();
};

module.exports = { requestLogger, validateProduct, validateUpdate };

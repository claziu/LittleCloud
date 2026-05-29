const express = require('express');
const router  = express.Router();
const {
  getAllProducts, getStats, getProductById,
  createProduct, updateProduct, deleteProduct,
} = require('../controller/productController');
const { requestLogger, validateProduct, validateUpdate } = require('../middleware/productMiddleware');

router.use(requestLogger);

router.get('/stats',  getStats);
router.get('/',       getAllProducts);
router.get('/:id',    getProductById);
router.post('/',      validateProduct, createProduct);
router.put('/:id',    validateUpdate,  updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

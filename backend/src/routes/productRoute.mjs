import express from 'express';
import productController from '../controllers/productController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';
import isAdmin from '../middleware/isAdmin.mjs';

const router = express.Router();


router.post('/create', authMiddleware, isAdmin, productController.createProduct);
router.get('/all', authMiddleware, productController.getAllProducts);
router.get('/:id', authMiddleware, productController.getProductById);
router.put('/update/:id', authMiddleware, isAdmin, productController.updateProduct);
router.put('/delete/:id', authMiddleware, isAdmin, productController.deleteProduct);

export default router;

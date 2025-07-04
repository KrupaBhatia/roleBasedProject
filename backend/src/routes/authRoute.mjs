import express from 'express';
import authController from '../controllers/authController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';
import isAdmin from '../middleware/isAdmin.mjs'

const router = express.Router();

const { login } = authController;

router.post('/login', login);

export default router;

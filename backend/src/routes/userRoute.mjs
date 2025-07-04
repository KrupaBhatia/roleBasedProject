import express from 'express';
import userController from '../controllers/userController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';
import isAdmin from '../middleware/isAdmin.mjs'

const router = express.Router();

const { createUser } = userController;

router.post('/create-user', createUser);

export default router;

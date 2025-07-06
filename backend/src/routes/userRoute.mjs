import express from 'express';
import userController from '../controllers/userController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';
import isAdmin from '../middleware/isAdmin.mjs'
import { validateUserCreation, handleValidationErrors } from '../middleware/validator.mjs';

const router = express.Router();

const { createUser } = userController;

router.post('/create-user',authMiddleware , isAdmin, validateUserCreation,handleValidationErrors, createUser);

export default router;

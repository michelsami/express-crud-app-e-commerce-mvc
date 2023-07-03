import express from 'express';
import { createCategoryController } from '../controllers/category-controllers/create-category-controller.js';
import authMiddleware from '../middlewares/user-auth.js';
import { validateCategoryCreation } from '../middlewares/validators/create-category-validation-middleware.js';
import { updateCategory } from '../controllers/category-controllers/update-category-controller.js';
import { getCategoriesController } from '../controllers/category-controllers/get-categories-controller.js';
import { getCategoryByID } from '../controllers/category-controllers/get-category-by-id-controller.js';
import { deleteCategoryByID } from '../controllers/category-controllers/delete-category-controller.js';

export const categoriesRouter = express.Router();



categoriesRouter.route('/')
	.post(authMiddleware,validateCategoryCreation, createCategoryController)
	.get(getCategoriesController)

categoriesRouter.route('/:id')
	.put(authMiddleware,validateCategoryCreation,updateCategory)
	.get(getCategoryByID)
	.delete(authMiddleware, deleteCategoryByID)
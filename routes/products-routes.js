import express from 'express'
import { createProductController } from '../controllers/product-controllers/create-product-controller.js';
import authMiddleware from '../middlewares/user-auth.js';
import { updateProduct } from '../controllers/product-controllers/update-product-controller.js';
import { validateProductUpdate } from '../middlewares/validators/product-validators/update-product-validator.js';
import { getProductsController } from '../controllers/product-controllers/get-all-products.js';
import { getProductByID } from '../controllers/product-controllers/get-product-by-id.js';
import { deleteProductByID } from '../controllers/product-controllers/delete-product-by-id.js';


export const productsRouter = express.Router();



productsRouter.route('/')
	.post(authMiddleware,createProductController)
	.get(getProductsController)


productsRouter.route('/:id')
	.put(authMiddleware, validateProductUpdate, updateProduct)
	.get(getProductByID)
	.delete(authMiddleware, deleteProductByID)
import { productModel } from "../../models/product-model/product-model.js";



export const getProductsController = async (req, res) => {
	try {
	 
	 
	 const listOfProducts = await productModel.find()
	
	 return res.status(200).json(listOfProducts);
	} catch (err) {
	  console.error(err.message);
	  
	return  res.status(400).json({ message: err});
	}
  }
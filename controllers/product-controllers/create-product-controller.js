import { categoryModel } from "../../models/category-model/create-category-model.js";
import { productModel } from "../../models/product-model/product-model.js";



export const createProductController = async (req, res) => {
	try {
	  const { name,  price,category_id } = req.body;

	  const checkValidID = await categoryModel.findById(category_id)

	  if(!checkValidID) return res.status(400).json({ message: "category_id : no category with that id" });
	
	 const newProduct = await productModel.create({name : name, price: price, category_id : category_id})
	
	 return res.status(201).json(newProduct);
	} catch (err) {
	  console.error(err.message);

	  if(err.message.includes("duplicate key error")){
		return  res.status(400).json({ message: "There is already a product with that name" });
	  }
	return  res.status(400).json({ message: err.message });
	}
  }
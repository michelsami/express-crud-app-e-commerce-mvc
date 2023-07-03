import { categoryModel } from "../../models/category-model/create-category-model.js";
import { productModel } from "../../models/product-model/product-model.js";



export const updateProduct = async(req, res)=>{
	const productID = req.params.id;
	const {name, price , category_id} = req.body;
	try {
		const checkValidID = await categoryModel.findById(category_id)

		if(!checkValidID) return res.status(400).json({ message: "category_id : no category with that id" });
		const updateProduct = await productModel.findOneAndUpdate({_id : productID},{name : name, price: price, category_id:category_id});
		return res.status(201).json({message : "Product updated"})
	} catch (error) {
		return res.status(400).json({message : "There is no Product with that id"})
	}
}
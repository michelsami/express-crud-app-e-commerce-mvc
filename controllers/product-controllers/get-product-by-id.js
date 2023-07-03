import { productModel } from "../../models/product-model/product-model.js";


export const getProductByID = async(req, res)=>{
	const productID = req.params.id;
	
	try {
		const getProduct = await productModel.find({_id : productID});
		return res.status(200).json({message : getProduct})
	} catch (error) {
		return res.status(400).json({message : "There is no category with that id"})
	}
}
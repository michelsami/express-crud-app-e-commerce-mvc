import { productModel } from "../../models/product-model/product-model.js";



export const deleteProductByID = async(req, res)=>{
	const productID = req.params.id;
	
	try {
		const getproduct = await productModel.find({_id : productID});
		const deleteProduct = await productModel.deleteOne({_id : productID});
		if (deleteProduct.deletedCount == 0){
			return res.status(200).json({message : "There is no product with that id"})
		}
		return res.status(200).json({deletedProduct: getproduct, status: deleteProduct, message : "Product is deleted"})
	} catch (error) {
		return res.status(400).json({message : "There is no product with that id"})
	}
}
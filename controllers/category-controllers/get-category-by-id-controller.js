import { categoryModel } from "../../models/category-model/create-category-model.js";


export const getCategoryByID = async(req, res)=>{
	const categoryID = req.params.id;
	
	try {
		const getCategory = await categoryModel.find({_id : categoryID});
		return res.status(200).json({message : getCategory})
	} catch (error) {
		return res.status(400).json({message : "There is no category with that id"})
	}
}
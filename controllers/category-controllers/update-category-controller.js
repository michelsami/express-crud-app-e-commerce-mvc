import { categoryModel } from "../../models/category-model/create-category-model.js";


export const updateCategory = async(req, res)=>{
	const categoryID = req.params.id;
	const {name} = req.body;
	try {
		const updateCategory = await categoryModel.findOneAndUpdate({_id : categoryID},{name : name});
		return res.status(201).json({message : "Category Name updated"})
	} catch (error) {
		return res.status(400).json({message : "There is no category with that id"})
	}
}